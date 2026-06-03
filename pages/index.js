import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Botworks Agency &mdash; Practical AI and workflow systems for SMBs</title>
        <meta name="description" content="Practical AI and custom workflow systems for SMBs with messy operations. AI when it helps. Custom software when it matters. Operational judgment either way." />
        <meta property="og:title" content="Botworks Agency — Practical AI and workflow systems for SMBs" />
        <meta property="og:description" content="AI when it helps. Custom software when it matters. Operational judgment either way." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main>

          {/* HERO */}
          <section className="px-8 pt-16 pb-12 max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              Practical AI and custom workflow systems for SMBs{' '}
              <span className="text-indigo-600">with messy operations.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-xl">
              AI when it helps. Custom software when it matters. Operational judgment either way.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
              We help operators find where AI can actually save time, where existing tools are enough, and where a workflow is specific enough to deserve software the company owns.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors">
                Let&apos;s talk
              </Link>
              <a href="#case-studies" className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                See a case study &rarr;
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Built by Matt Livingston, former VP of Product. 15 years in software.
            </p>
          </section>

          {/* CAPABILITY STRIP */}
          <section className="px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">How we help</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">AI workflow review</p>
                <h3 className="text-base font-bold text-gray-900 mb-2">Find where AI belongs.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Find where employees can use existing AI tools better, and where they should not.
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Automations between systems</p>
                <h3 className="text-base font-bold text-gray-900 mb-2">Automations that move work between broken systems.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Move data, documents, updates, and decisions between tools without copy-paste.
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Custom owned software</p>
                <h3 className="text-base font-bold text-gray-900 mb-2">Build what is too specific to rent.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Build the workflows that are too specific or too important to leave in spreadsheets, portals, or memory.
                </p>
              </div>
            </div>
          </section>

          {/* AUDIENCES */}
          <section className="px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Who this is for</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/for-searchers"
                className="border rounded-2xl p-6 bg-white transition-all border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer block"
              >
                <p className="text-sm font-semibold text-indigo-600 mb-2">Searchers and acquisition-backed SMBs</p>
                <h2 className="text-lg font-bold text-gray-900 mb-2">The practical AI question in the 100-day plan.</h2>
                <p className="text-sm text-gray-500 leading-snug mb-4">
                  Figure out what AI can handle, what existing tools can handle, and what needs a workflow system of its own.
                </p>
                <span className="text-sm font-semibold text-indigo-600">See how it works &rarr;</span>
              </Link>
              <Link
                href="/for-service-businesses"
                className="border rounded-2xl p-6 bg-white transition-all border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer block"
              >
                <p className="text-sm font-semibold text-indigo-600 mb-2">Service businesses</p>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Office and field workflows that still run on handoffs.</h2>
                <p className="text-sm text-gray-500 leading-snug mb-4">
                  HVAC, landscaping, cleaning, trades, and field-service teams where work gets copied, chased, retyped, or remembered.
                </p>
                <span className="text-sm font-semibold text-indigo-600">See examples &rarr;</span>
              </Link>
            </div>
          </section>

          {/* WORKFLOW EXAMPLES */}
          <section className="px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Where this fits</p>
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-gray-50">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">The best first projects are usually hiding in plain sight.</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-5">
                  Rebate paperwork, field handoffs, customer intake, spreadsheet reconciliation, status chasing, exception queues, manager-only memory. The first question is not always &ldquo;what should we build?&rdquo; It is &ldquo;where should AI, automation, or software actually help?&rdquo;
                </p>
                <Link href="/workflow-examples" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                  See workflow examples &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section id="case-studies" className="px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Case studies</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Real work, in production</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/case-studies/hvac-rebate-automation"
                className="border rounded-2xl p-6 bg-white transition-all border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer block"
              >
                <p className="text-sm font-semibold text-indigo-600 mb-2">HVAC contractor</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rebate program filings: 8 hours a week reclaimed.</h3>
                <p className="text-sm text-gray-500 leading-snug mb-4">
                  A custom hosted web app that turns one paste of a job number into a print-ready double-sided rebate filing. Application, classifier, browser automation, and PDF generation in one button.
                </p>
                <span className="text-sm font-semibold text-indigo-600">
                  Read the case study &rarr;
                </span>
              </Link>
              <Link
                href="/case-studies/field-visit-capture"
                className="border rounded-2xl p-6 bg-white transition-all border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer block"
              >
                <p className="text-sm font-semibold text-indigo-600 mb-2">Commercial landscaping</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Field-visit capture: a structured record for every property visit.</h3>
                <p className="text-sm text-gray-500 leading-snug mb-4">
                  A mobile-first capture surface for account managers in the field, paired with a central review surface for the office. Built as the structured foundation for translation, communications, proposals, and ticketing.
                </p>
                <span className="text-sm font-semibold text-indigo-600">
                  Read the case study &rarr;
                </span>
              </Link>
              <Link
                href="/case-studies/interior-design-research-toolkit"
                className="border rounded-2xl p-6 bg-white transition-all border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer block"
              >
                <p className="text-sm font-semibold text-indigo-600 mb-2">Interior design studio</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-assisted research: better prep without a big custom app.</h3>
                <p className="text-sm text-gray-500 leading-snug mb-4">
                  Practical AI habits and lightweight tools that compress a designer&apos;s pre-pitch homework &mdash; reference photos, listing-price sanity checks, neighborhood comps &mdash; from hours to minutes.
                </p>
                <span className="text-sm font-semibold text-indigo-600">
                  Read the case study &rarr;
                </span>
              </Link>
            </div>
          </section>

          {/* WHAT'S NEXT */}
          <section className="px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">What&apos;s next</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">In the pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border rounded-2xl p-6 bg-white border-gray-200 block">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-semibold text-indigo-600">Chicago HVAC contractor</p>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">Upcoming</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Front-office automation: one view of the day&apos;s work.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Technicians ping Slack to grab their next job; Housecall Pro APIs feed a single source of truth for upcoming work; office and field see the same view in real time. Foundation for agent-driven inventory and scheduling decisions later.
                </p>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="px-8 pb-14 max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/profil_pic_thebotcandoit_2_march30.jpg"
                alt="Matt Livingston"
                className="w-28 h-28 rounded-2xl object-cover flex-shrink-0 bg-gray-100"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Hi, I&apos;m Matt.</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-2">
                  15 years as a technical product manager in software, most recently VP of Product Management. I shipped to engineering teams that ship every day; now I bring that bar to small businesses that don&apos;t have engineering teams of their own.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Botworks helps SMB operators figure out where AI and custom software can actually improve the business. We start with one workflow where the pain is obvious, choose the simplest useful fix, and use that first win to uncover the next one.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mt-2">
                  Over time, the business gets practical AI habits, useful automations, and owned software around the places where people used to copy, chase, translate, retype, reconcile, and remember. No hidden fees. No hostage software.
                </p>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mx-8 mb-16 bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. I&apos;ll help sort whether the answer is AI, automation, custom software, or nothing at all.
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
