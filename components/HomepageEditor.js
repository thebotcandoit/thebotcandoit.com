import { useEffect, useMemo, useState } from 'react'

const DEFAULT_EDITOR_ORIGIN = 'https://status.botworksagency.com'
const PHONE_WIDTHS = [375, 430]

function editorOrigin() {
  return process.env.NEXT_PUBLIC_CONTENT_EDITOR_URL
    || process.env.NEXT_PUBLIC_NOTES_EDITOR_URL
    || DEFAULT_EDITOR_ORIGIN
}

async function responseBody(response) {
  try {
    return await response.json()
  } catch {
    return { error: `Request failed (${response.status})` }
  }
}

function valueAtPath(object, path) {
  return path.split('.').reduce((value, segment) => {
    if (value == null) return undefined
    return value[segment]
  }, object)
}

function editableElements() {
  return Array.from(document.querySelectorAll('[data-home-editable]'))
}

function applyContent(content, readOnly = false) {
  editableElements().forEach((element) => {
    const path = element.getAttribute('data-home-editable')
    const value = valueAtPath(content, path)
    if (typeof value !== 'string') return

    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      element.value = value
      element.readOnly = readOnly
    } else {
      element.innerText = value
      element.contentEditable = readOnly ? 'false' : 'true'
      element.spellcheck = !readOnly
      if (!readOnly) element.setAttribute('role', 'textbox')
    }
    if (!readOnly) element.setAttribute('data-home-editor-active', 'true')
  })
}

function runPhoneChecks(expectedSha, actualSha) {
  const viewportWidth = document.documentElement.clientWidth
  const editable = editableElements()
  const media = Array.from(document.querySelectorAll('img, video, iframe'))
  const pageFits = document.documentElement.scrollWidth <= viewportWidth + 1
  const textFits = editable.every((element) => {
    const rect = element.getBoundingClientRect()
    return rect.left >= -1 && rect.right <= viewportWidth + 1
  })
  const readable = editable.every((element) => Number.parseFloat(getComputedStyle(element).fontSize) >= 11)
  const mediaFits = media.every((element) => {
    const rect = element.getBoundingClientRect()
    return rect.left >= -1 && rect.right <= viewportWidth + 1
  })

  return {
    type: 'BOTWORKS_PHONE_CHECK_RESULT',
    expectedSha,
    sha: actualSha,
    width: viewportWidth,
    checks: { pageFits, textFits, readable, mediaFits },
    passed: Boolean(expectedSha && expectedSha === actualSha && pageFits && textFits && readable && mediaFits),
  }
}

function CheckRow({ passed, children }) {
  return (
    <li className={`flex items-center gap-2 text-xs ${passed ? 'text-emerald-700' : 'text-red-700'}`}>
      <span aria-hidden="true">{passed ? '✓' : '×'}</span>
      {children}
    </li>
  )
}

export default function HomepageEditor() {
  const [active, setActive] = useState(false)
  const [phoneCheckMode, setPhoneCheckMode] = useState(false)
  const [phase, setPhase] = useState('idle')
  const [message, setMessage] = useState('')
  const [sha, setSha] = useState(null)
  const [hasDraft, setHasDraft] = useState(false)
  const [dirty, setDirty] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewWidth, setPreviewWidth] = useState(PHONE_WIDTHS[0])
  const [phoneResults, setPhoneResults] = useState({})
  const [confirmedWidths, setConfirmedWidths] = useState({})
  const [editableIndex, setEditableIndex] = useState(0)
  const baseUrl = useMemo(editorOrigin, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('edit') !== '1') return undefined

    const checkingPhone = params.get('phonecheck') === '1'
    const expectedSha = params.get('expectedSha') || ''
    setActive(true)
    setPhoneCheckMode(checkingPhone)
    setPhase('checking')
    if (!checkingPhone) document.body.classList.add('homepage-editor-open')

    let cancelled = false
    const onInput = () => {
      setDirty(true)
      setPhoneResults({})
      setConfirmedWidths({})
    }
    const onEditableClick = (event) => {
      event.preventDefault()
      event.stopPropagation()
      event.currentTarget.focus()
    }

    async function initialize() {
      try {
        const response = await fetch(`${baseUrl}/api/editor/homepage`, {
          credentials: 'include',
          headers: { Accept: 'application/json' },
        })
        const body = await responseBody(response)
        if (cancelled) return

        if (response.status === 401) {
          setPhase('signed-out')
          setMessage('Sign in to the Botworks admin, then return here to edit.')
          return
        }
        if (!response.ok) throw new Error(body.error || 'The homepage editor could not open.')

        setSha(body.sha)
        setHasDraft(body.hasDraft)
        applyContent(body.content, checkingPhone)

        if (checkingPhone) {
          document.body.classList.add('homepage-phone-check')
          window.setTimeout(() => {
            window.parent.postMessage(runPhoneChecks(expectedSha, body.sha), window.location.origin)
          }, 450)
          return
        }

        editableElements().forEach((element) => {
          element.addEventListener('input', onInput)
          element.addEventListener('click', onEditableClick)
        })
        setPhase('ready')
        setMessage(body.hasDraft ? 'Draft loaded from the site-demo branch.' : `Editing as ${body.user}`)
      } catch (error) {
        if (cancelled) return
        setPhase('error')
        setMessage(error instanceof Error ? error.message : String(error))
      }
    }

    initialize()
    return () => {
      cancelled = true
      document.body.classList.remove('homepage-editor-open', 'homepage-phone-check')
      editableElements().forEach((element) => {
        element.removeEventListener('input', onInput)
        element.removeEventListener('click', onEditableClick)
        element.removeAttribute('data-home-editor-active')
        element.removeAttribute('role')
        element.contentEditable = 'false'
      })
    }
  }, [baseUrl])

  useEffect(() => {
    function onMessage(event) {
      if (event.origin !== window.location.origin) return
      if (event.data?.type !== 'BOTWORKS_PHONE_CHECK_RESULT') return
      if (event.data.expectedSha !== sha) return
      setPhoneResults((current) => ({ ...current, [event.data.width]: event.data }))
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [sha])

  function collectUpdates() {
    const updates = {}
    editableElements().forEach((element) => {
      const path = element.getAttribute('data-home-editable')
      if (!path) return
      const value = element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement
        ? element.value
        : element.innerText
      updates[path] = value.replace(/\u00a0/g, ' ').trim()
    })
    return updates
  }

  async function saveDraft() {
    if (!sha) throw new Error('The editor does not have the current site version. Reload and try again.')
    if (!dirty && hasDraft) return sha

    setPhase('saving')
    setMessage('Saving this homepage draft…')
    const response = await fetch(`${baseUrl}/api/editor/homepage`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sha, updates: collectUpdates() }),
    })
    const body = await responseBody(response)
    if (response.status === 401) {
      setPhase('signed-out')
      throw new Error('Your editor session expired. Sign in again, then return here.')
    }
    if (response.status === 409) throw new Error('The homepage changed after you opened it. Reload before saving so no work is overwritten.')
    if (!response.ok) throw new Error(body.error || 'The draft could not be saved.')

    const nextSha = body.sha || sha
    setSha(nextSha)
    setDirty(false)
    setHasDraft(true)
    setPhoneResults({})
    setConfirmedWidths({})
    setPhase('ready')
    setMessage(body.unchanged ? 'No text changed.' : 'Draft saved to site-demo. Review both phone widths before publishing.')
    return nextSha
  }

  async function handleSave() {
    try {
      await saveDraft()
    } catch (error) {
      setPhase('error')
      setMessage(error instanceof Error ? error.message : String(error))
    }
  }

  async function openPhoneReview() {
    try {
      const savedSha = await saveDraft()
      setPreviewWidth(PHONE_WIDTHS[0])
      setPreviewOpen(true)
      setMessage(`Reviewing the saved version ${savedSha.slice(0, 7)} at phone widths.`)
    } catch (error) {
      setPhase('error')
      setMessage(error instanceof Error ? error.message : String(error))
    }
  }

  function confirmWidth(width) {
    const result = phoneResults[width]
    if (!result?.passed) return
    setConfirmedWidths((current) => ({ ...current, [width]: true }))
    const nextWidth = PHONE_WIDTHS.find((candidate) => candidate !== width && !confirmedWidths[candidate])
    if (nextWidth) setPreviewWidth(nextWidth)
  }

  async function handlePublish() {
    const readyToPublish = PHONE_WIDTHS.every((width) => confirmedWidths[width] && phoneResults[width]?.passed)
    if (!readyToPublish) {
      setPreviewOpen(true)
      setMessage('Review and confirm both phone widths before publishing.')
      return
    }

    try {
      setPhase('publishing')
      setMessage('Publishing the reviewed draft to the site demo…')
      const response = await fetch(`${baseUrl}/api/editor/homepage/publish`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sha,
          mobileReview: PHONE_WIDTHS.map((width) => ({
            width,
            sha,
            confirmed: true,
            checks: phoneResults[width].checks,
          })),
        }),
      })
      const body = await responseBody(response)
      if (response.status === 409) throw new Error('The draft changed after the phone review. Review the newest version before publishing.')
      if (!response.ok) throw new Error(body.error || 'The homepage could not be published.')

      setSha(body.sha || sha)
      setHasDraft(false)
      setPhoneResults({})
      setConfirmedWidths({})
      setPreviewOpen(false)
      setPhase('ready')
      setMessage('Published to sitedemo.botworksagency.com. The preview deployment is rebuilding now.')
    } catch (error) {
      setPhase('error')
      setMessage(error instanceof Error ? error.message : String(error))
    }
  }

  function moveToEditable(direction) {
    const elements = editableElements()
    if (!elements.length) return
    const nextIndex = (editableIndex + direction + elements.length) % elements.length
    setEditableIndex(nextIndex)
    elements[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
    elements[nextIndex].focus({ preventScroll: true })
  }

  function exitEditor() {
    const url = new URL(window.location.href)
    url.searchParams.delete('edit')
    url.searchParams.delete('phonecheck')
    url.searchParams.delete('expectedSha')
    window.location.href = url.toString()
  }

  if (!active || phoneCheckMode) return null

  const busy = ['saving', 'publishing', 'checking'].includes(phase)
  const reviewed = PHONE_WIDTHS.every((width) => confirmedWidths[width] && phoneResults[width]?.passed)
  const loginUrl = `${baseUrl}/login?next=${encodeURIComponent(window.location.href)}`
  const currentResult = phoneResults[previewWidth]
  const previewUrl = `/?edit=1&phonecheck=1&expectedSha=${encodeURIComponent(sha || '')}&width=${previewWidth}`

  return (
    <>
      <aside className="homepage-editor-bar fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-[#12131a] px-4 py-3 text-white shadow-[0_-18px_55px_rgba(18,19,26,0.28)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-[#f2b84b] px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#12131a]">Homepage editor</span>
              <span className="text-xs text-white/55">site-demo</span>
              {dirty && <span className="text-xs text-[#f2b84b]">Unsaved changes</span>}
              {!dirty && hasDraft && <span className="text-xs text-sky-300">Draft saved</span>}
              {reviewed && <span className="text-xs text-emerald-300">Phone review complete</span>}
            </div>
            <p className={`mt-1 max-w-2xl truncate text-xs ${phase === 'error' ? 'text-red-300' : 'text-white/65'}`}>
              {message || 'Click any outlined words to edit them in place.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {phase === 'signed-out' ? (
              <a href={loginUrl} className="rounded bg-[#f2b84b] px-4 py-2 text-sm font-semibold text-[#12131a] hover:bg-white">Sign in to edit</a>
            ) : (
              <>
                <div className="flex rounded border border-white/15">
                  <button type="button" onClick={() => moveToEditable(-1)} className="px-3 py-2 text-sm text-white/70 hover:text-white" aria-label="Previous editable text">↑</button>
                  <button type="button" onClick={() => moveToEditable(1)} className="px-3 py-2 text-sm text-white/70 hover:text-white" aria-label="Next editable text">↓</button>
                </div>
                <button type="button" onClick={handleSave} disabled={busy || !sha} className="rounded border border-white/20 px-4 py-2 text-sm font-semibold hover:border-white disabled:opacity-40">{phase === 'saving' ? 'Saving…' : 'Save draft'}</button>
                <button type="button" onClick={openPhoneReview} disabled={busy || !sha} className="rounded border border-white/20 px-4 py-2 text-sm font-semibold hover:border-white disabled:opacity-40">Review phone</button>
                <button type="button" onClick={handlePublish} disabled={busy || dirty || !hasDraft || !reviewed} className="rounded bg-[#f2b84b] px-4 py-2 text-sm font-semibold text-[#12131a] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40">{phase === 'publishing' ? 'Publishing…' : 'Publish to demo'}</button>
              </>
            )}
            <button type="button" onClick={exitEditor} className="px-2 py-2 text-sm text-white/55 hover:text-white">Exit</button>
          </div>
        </div>
      </aside>

      {previewOpen && (
        <div className="fixed inset-0 z-[110] overflow-y-auto bg-[#12131a]/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Phone-width review">
          <div className="mx-auto flex min-h-full max-w-5xl items-start justify-center py-4">
            <div className="w-full rounded-xl bg-[#f7f3ea] p-4 shadow-2xl sm:p-6">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1f7a57]">Required before every publish</p>
                  <h2 className="font-display mt-1 text-2xl font-bold text-[#12131a]">Read the homepage at both phone widths.</h2>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#626b7a]">The checks catch overflow and unreadable text automatically. You still confirm that the copy feels right in the actual narrow layout.</p>
                </div>
                <button type="button" onClick={() => setPreviewOpen(false)} className="self-start rounded border border-[#ded6c7] px-3 py-2 text-sm font-semibold text-[#12131a] hover:border-[#12131a]">Close</button>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {PHONE_WIDTHS.map((width) => (
                  <button key={width} type="button" onClick={() => setPreviewWidth(width)} className={`rounded-lg px-4 py-2 text-sm font-semibold ${previewWidth === width ? 'bg-[#12131a] text-white' : 'border border-[#ded6c7] bg-white text-[#12131a]'}`}>
                    {width}px {confirmedWidths[width] ? '✓' : ''}
                  </button>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_250px]">
                <div className="min-w-0 overflow-auto rounded-xl border border-[#ded6c7] bg-[#ebe3d4] p-3">
                  <iframe
                    key={`${previewWidth}-${sha}`}
                    src={previewUrl}
                    title={`${previewWidth}px homepage preview`}
                    style={{ width: `${previewWidth}px`, height: '720px' }}
                    className="mx-auto block max-w-none rounded-lg border-0 bg-white shadow-lg"
                  />
                </div>
                <aside className="rounded-lg border border-[#ded6c7] bg-white p-4">
                  <h3 className="font-display text-lg font-bold text-[#12131a]">{previewWidth}px check</h3>
                  {!currentResult ? (
                    <p className="mt-3 text-sm text-[#626b7a]">Loading the saved draft and checking the layout…</p>
                  ) : (
                    <>
                      <ul className="mt-3 space-y-2">
                        <CheckRow passed={currentResult.checks.pageFits}>No page-level horizontal overflow</CheckRow>
                        <CheckRow passed={currentResult.checks.textFits}>Editable copy stays inside the viewport</CheckRow>
                        <CheckRow passed={currentResult.checks.readable}>Editable text remains readable</CheckRow>
                        <CheckRow passed={currentResult.checks.mediaFits}>Images and embeds fit the viewport</CheckRow>
                        <CheckRow passed={currentResult.sha === sha}>Preview matches the saved draft</CheckRow>
                      </ul>
                      <button
                        type="button"
                        onClick={() => confirmWidth(previewWidth)}
                        disabled={!currentResult.passed}
                        className="mt-5 w-full rounded-lg bg-[#2f9e73] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1f7a57] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {confirmedWidths[previewWidth] ? 'Reviewed ✓' : `I reviewed ${previewWidth}px`}
                      </button>
                    </>
                  )}
                  <p className="mt-4 text-xs leading-relaxed text-[#8a8171]">Publishing stays locked until the 375px and 430px views both pass and you confirm them.</p>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
