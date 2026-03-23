import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const tagColors = {
  Launch: 'bg-indigo-100 text-indigo-700',
  Improvement: 'bg-green-100 text-green-700',
  Fix: 'bg-yellow-100 text-yellow-700',
  'New skill': 'bg-purple-100 text-purple-700',
}

export default function WhatsNew({ updates }) {
  return (
    <>
      <Head>
        <title>What&apos;s new — thebotcandoit</title>
        <meta name="description" content="A running log of what we've built, fixed, and shipped — written for humans, not developers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white flex flex-col">
        <Nav />
        <main className="flex-1 px-8 py-16 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
            What&apos;s new
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-14">
            A running log of what we&apos;ve built, fixed, and shipped — written for humans, not developers.
          </p>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-100" />
            <div className="flex flex-col gap-12">
              {updates.map((update, i) => (
                <div key={i} className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-400 -translate-x-[3px]" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-400">{update.date}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      tagColors[update.tag] || 'bg-gray-100 text-gray-500'
                    }`}>
                      {update.tag}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {update.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {update.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const updatesPath = path.join(process.cwd(), 'data/updates.json')
  const updates = JSON.parse(fs.readFileSync(updatesPath, 'utf8'))
  return { props: { updates } }
}
