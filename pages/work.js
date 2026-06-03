import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <>
      <Head>
        <title>Work &mdash; Botworks Agency</title>
        <meta name="description" content="Case studies from practical AI, automation, and custom workflow systems built for SMBs with messy operations." />
        <meta property="og:title" content="Work — Botworks Agency" />
        <meta property="og:description" content="Practical AI, automation, and custom workflow case studies for SMBs with messy operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-5xl px-8 py-12">

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
            Work
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-2xl">
            Case studies from real projects. Each one started with a workflow that was expensive, manual, or stuck between systems.
          </p>

          {/* CASE STUDIES */}
          <section className="mb-16">
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
          <section className="mb-16">
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

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. If software can make it cleaner, I&apos;ll tell you how &mdash; no commitment, no pitch.
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
