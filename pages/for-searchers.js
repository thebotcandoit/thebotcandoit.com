import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const painPoints = [
  'The office manager is the system of record',
  'Data lives across field-service software, spreadsheets, portals, inboxes, and texts',
  'The 100-day plan mentions AI, but the first useful move is not obvious',
  'Staff know the workflow, but nobody has time to turn it into an AI habit, automation, or system',
]

const examples = [
  {
    title: 'Review where AI can help without a build',
    body: 'Start with the workflows employees already touch every week and separate useful AI habits from hype.',
  },
  {
    title: 'Create visibility across locations or teams',
    body: 'Give operators one structured view of work that currently lives in texts, paper, spreadsheets, and disconnected systems.',
  },
  {
    title: 'Build the first owned system when it matters',
    body: 'The first build is narrow on purpose. It earns trust, exposes the real edge cases, and points to the next bottleneck.',
  },
]

export default function ForSearchers() {
  return (
    <>
      <Head>
        <title>Practical AI for searchers &mdash; Botworks Agency</title>
        <meta
          name="description"
          content="Practical AI and custom workflow systems for searchers and acquisition-backed SMBs. Decide what to teach, automate, configure, or build after close."
        />
        <meta property="og:title" content="Practical AI for searchers — Botworks Agency" />
        <meta
          property="og:description"
          content="For searchers and acquisition-backed SMBs that need practical AI judgment and workflow systems, not slide decks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen paper-grid">
        <Nav />
        <main className="max-w-5xl px-8 py-12">
          <section className="max-w-3xl mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">For searchers</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              Practical AI and custom workflow systems for searchers and acquisition-backed SMBs.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Post-close operators inherit messy workflows fast. Botworks helps decide where AI can help immediately, where existing tools are enough, and where a workflow is important enough to build around.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 mb-16">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">When this fits</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">You bought a real business. The workflows came with it.</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Most acquisition-backed SMBs do not need an abstract transformation plan. They need practical judgment about which workflows can improve with AI habits, which need automation, and which need owned systems the company can run. The right first move is usually hiding where one trusted person still copies, chases, reconciles, translates, or remembers the work.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No slide decks. No AI theater. No hostage software.</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Discovery leads to a better AI workflow, a scoped build, a prototype, a production app, or a clear call not to build. Botworks maintains, monitors, and documents what ships. If custom software is the answer, the company owns the code, data, infrastructure, and documentation.
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
