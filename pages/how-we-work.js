import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const steps = [
  {
    eyebrow: 'Step 1',
    title: 'Start where the pain is sharpest.',
    body:
      'We begin with one workflow that is already costing the business time, trust, or visibility. Then we decide what kind of help fits: better AI use, an automation, a configured tool, custom software, or no build at all.',
  },
  {
    eyebrow: 'Step 2',
    title: 'Ship something working quickly.',
    body:
      'The first build is intentionally narrow. It proves the relationship, exposes the real edge cases, and gives the team something live to react to. Discovery leads to action: a prototype, a production app, a scoped build, or a clear decision not to build.',
  },
  {
    eyebrow: 'Step 3',
    title: 'Keep it running.',
    body:
      'Production software needs care. Botworks maintains, monitors, documents, and updates the systems it ships. The goal is not a clever demo; the goal is a workflow your team can rely on after the first week.',
  },
  {
    eyebrow: 'Step 4',
    title: 'Use the first win to find the next bottleneck.',
    body:
      'Once one workflow is running cleanly, the next one gets easier to see. Over time, the business gets a practical software layer around the places where work used to depend on copy-paste, memory, and heroic staff effort.',
  },
]

const ownershipItems = [
  'Source code and commit history',
  'Operational data and database records',
  'Production infrastructure and deployment path',
  'Documentation for operators and future maintainers',
]

export default function HowWeWork() {
  return (
    <>
      <Head>
        <title>How we work &mdash; Botworks Agency</title>
        <meta
          name="description"
          content="How Botworks helps SMB operators decide where AI, automation, or custom workflow software actually belongs."
        />
        <meta property="og:title" content="How we work — Botworks Agency" />
        <meta
          property="og:description"
          content="Start with one painful workflow, decide what not to build, ship the useful fix, and use the first win to find the next bottleneck."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen paper-grid">
        <Nav />
        <main className="max-w-5xl px-8 py-12">
          <section className="max-w-3xl mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">How we work</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              One painful workflow becomes the first useful fix.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Botworks is built for SMBs where the work still depends on people moving information between messy systems. We start small, decide whether AI or software should help, ship quickly, and use the first win to uncover the next operational bottleneck.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {steps.map(step => (
              <div key={step.title} className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">{step.eyebrow}</p>
                <h2 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </section>

          <section className="border border-gray-200 rounded-2xl p-8 mb-16 bg-white">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Judgment first</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Not every AI opportunity needs custom software.</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Many teams just need better ways to use ChatGPT, Claude, or the tools they already pay for. Other workflows need a simple automation. The recurring, important, company-specific work may deserve owned software. The first job is telling those apart.
            </p>
          </section>

          <section className="border border-gray-200 rounded-2xl p-8 mb-16 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Ownership</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">No hostage software.</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  The company owns what Botworks builds. That means the system is designed to be legible to the business, not just to the person who wrote it. If the relationship ever ends, the goal is a clean handoff: code, data, infrastructure, and documentation.
                </p>
              </div>
              <ul className="space-y-3">
                {ownershipItems.map(item => (
                  <li key={item} className="text-sm text-gray-600 leading-snug border border-gray-200 rounded-xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Fast</p>
              <h2 className="text-base font-bold text-gray-900 mb-2">Days to proof, weeks to production.</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Most delays come from access, vendor portals, API keys, and real-world edge cases. The build itself should move quickly.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Plain</p>
              <h2 className="text-base font-bold text-gray-900 mb-2">No slide-deck theater.</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Discovery should produce a concrete next step: ship, scope, skip, or investigate. The work becomes visible in running software.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Durable</p>
              <h2 className="text-base font-bold text-gray-900 mb-2">Maintained after launch.</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Monitoring, documentation, bug fixes, and minor improvements are part of the operating relationship, not an afterthought.
              </p>
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Know the first workflow?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. We can start there.
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
