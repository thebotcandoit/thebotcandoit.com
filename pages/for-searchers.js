import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const painPoints = [
  'The office manager is the system of record',
  'Data lives across field-service software, spreadsheets, portals, inboxes, and texts',
  'The 100-day plan mentions operational improvement, but the first build is not obvious',
  'Staff know the workflow, but nobody has time to turn it into software',
]

const examples = [
  {
    title: 'Turn a manual back-office workflow into a working internal app',
    body: 'Start with the workflow that already has a clear owner, clear pain, and repeated manual handoff.',
  },
  {
    title: 'Create visibility across locations or teams',
    body: 'Give operators one structured view of work that currently lives in texts, paper, spreadsheets, and disconnected systems.',
  },
  {
    title: 'Build the first system that proves the relationship',
    body: 'The first project is narrow on purpose. It earns trust, exposes the real edge cases, and points to the next bottleneck.',
  },
]

export default function ForSearchers() {
  return (
    <>
      <Head>
        <title>Custom operations software for searchers &mdash; Botworks Agency</title>
        <meta
          name="description"
          content="Custom operations software for searchers and acquisition-backed SMBs. Start with one painful workflow, ship quickly, and build an owned operating layer over time."
        />
        <meta property="og:title" content="Custom operations software for searchers — Botworks Agency" />
        <meta
          property="og:description"
          content="For searchers and acquisition-backed SMBs that need practical workflow systems, not slide decks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-5xl px-8 py-12">
          <section className="max-w-3xl mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">For searchers</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              Custom operations software for searchers and acquisition-backed SMBs.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Post-close operators inherit messy workflows fast. Botworks starts with one painful manual process, ships a durable system around it, and uses that first win to find the next operational bottleneck.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 mb-16">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">When this fits</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">You bought a real business. The workflows came with it.</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Most acquisition-backed SMBs do not need an abstract transformation plan. They need three or four expensive manual workflows turned into practical systems the company can run. The right first build is usually hiding in the place where one trusted person still copies, chases, reconciles, translates, or remembers the work.
              </p>
            </div>
            <ul className="space-y-3">
              {painPoints.map(point => (
                <li key={point} className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 leading-snug">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {examples.map(example => (
              <div key={example.title} className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-base font-bold text-gray-900 mb-2">{example.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{example.body}</p>
              </div>
            ))}
          </section>

          <section className="border border-gray-200 rounded-2xl p-8 mb-16 bg-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">The working relationship</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No slide decks. No hostage software.</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Discovery leads to a scoped build, a prototype, a production app, or a clear call not to build. Botworks maintains, monitors, and documents what ships. The company owns the code, data, infrastructure, and documentation, so the operating layer remains legible after the first project.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a first workflow in mind?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Send the workflow, the system it starts in, the system it ends in, and who owns it today. We can start there.
              </p>
            </div>
            <Link href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors">
              Let&apos;s talk
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
