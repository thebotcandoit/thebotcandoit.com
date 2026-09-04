import { spawn } from 'node:child_process'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const profile = await mkdtemp(path.join(os.tmpdir(), 'botworks-mobile-qa-'))
const port = 9327
const origin = process.env.QA_ORIGIN || 'http://localhost:3000'
const screenshotRoute = process.env.QA_SCREENSHOT_ROUTE || '/'
const routes = [
  '/',
  '/work',
  '/how-we-work',
  '/about',
  '/contact',
  '/notes',
  '/notes/botworks-vs-using-ai-yourself',
  '/case-studies/landscape-operations-software',
  '/case-studies/finance-operations',
  '/case-studies/hvac-rebate-software',
]

const child = spawn(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: 'ignore' })

async function waitForTarget() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`)
      const targets = await response.json()
      const page = targets.find((target) => target.type === 'page')
      if (page) return page
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  throw new Error('Chrome did not expose a page target')
}

const target = await waitForTarget()
const socket = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})

let nextId = 1
const pending = new Map()
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (!message.id || !pending.has(message.id)) return
  const { resolve, reject } = pending.get(message.id)
  pending.delete(message.id)
  if (message.error) reject(new Error(message.error.message))
  else resolve(message.result)
})

function send(method, params = {}) {
  const id = nextId
  nextId += 1
  socket.send(JSON.stringify({ id, method, params }))
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }))
}

async function ready() {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const result = await send('Runtime.evaluate', {
      expression: 'document.readyState',
      returnByValue: true,
    })
    if (result.result.value === 'complete') return
    await new Promise((resolve) => setTimeout(resolve, 50))
  }
  throw new Error('Page did not finish loading')
}

async function audit(width, height, screenshotRoute) {
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: true,
  })

  const results = []
  for (const route of routes) {
    await send('Page.navigate', { url: `${origin}${route}` })
    await ready()
    const evaluated = await send('Runtime.evaluate', {
      expression: `JSON.stringify((() => ({
        viewport: [innerWidth, innerHeight],
        scrollWidth: document.documentElement.scrollWidth,
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).length,
        headingSize: getComputedStyle(document.querySelector('h1')).fontSize
      }))())`,
      returnByValue: true,
    })
    results.push({ route, ...JSON.parse(evaluated.result.value) })
  }

  await send('Page.navigate', { url: `${origin}${screenshotRoute}` })
  await ready()
  const capture = await send('Page.captureScreenshot', { format: 'png' })
  const output = path.join(os.tmpdir(), `botworks-${width}.png`)
  await writeFile(output, Buffer.from(capture.data, 'base64'))
  return { width, height, output, results }
}

try {
  const reports = [
    await audit(375, 812, screenshotRoute),
    await audit(430, 932, screenshotRoute),
  ]
  console.log(JSON.stringify(reports, null, 2))
} finally {
  socket.close()
  child.kill('SIGTERM')
  if (child.exitCode === null) {
    await new Promise((resolve) => child.once('exit', resolve))
  }
  await rm(profile, { recursive: true, force: true })
}
