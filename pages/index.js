import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home({ skills }) {
  const available = skills.filter(s => s.status === 'available')

  return (
    <>
      <Head>
        <title>Botworks Agency &mdash; Custom operations software for SMBs</title>
        <meta name="description" content="Custom operations software for SMBs with messy workflows. We start where the pain is sharpest, ship a durable system quickly, then keep finding the next operational bottleneck." />
        <meta property="og:title" content="Botworks Agency — Custom operations software for SMBs" />
        <meta property="og:description" content="Custom operations software for SMBs with messy workflows. No slide decks. Software you own outright." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main>

          {/* HERO */}
          <section className="px-8 pt-16 pb-12 max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              Custom operations software for SMBs{' '}
              <span className="text-indigo-600">with messy workflows.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              We start where the pain is sharpest, ship a durable system quickly, then keep finding the next operational bottleneck. No slide decks. Software you own outright.
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

          {/* CAPABILITY STRIP — three tiers, easy to hard */}
          <section className="px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What we build</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Tier 1 &middot; quick wins</p>
                <h3 className="text-base font-bold text-gray-900 mb-2">Fast prototypes that prove the workflow.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Small working systems that make the pain concrete, show what is possible, and create the trust to keep going.
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Tier 2 &middot; automations</p>
                <h3 className="text-base font-bold text-gray-900 mb-2">Automations that move work between broken systems.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Once-and-done setup. The work happens in the background &mdash; pulling data, filling forms, sending things to the right place &mdash; without anyone clicking through it.
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Tier 3 &middot; custom apps</p>
                <h3 className="text-base font-bold text-gray-900 mb-2">Internal software your team can actually run.</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  Hosted web apps purpose-built for one company&apos;s workflow. We build, host, document, monitor, and maintain. Your team uses it in a normal browser; no installs.
                </p>
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-estate research toolkit: three tools, one workflow.</h3>
                <p className="text-sm text-gray-500 leading-snug mb-4">
                  Three lightweight tools that compress a designer&apos;s pre-pitch homework &mdash; reference photos, listing-price sanity checks, neighborhood comps &mdash; from hours to minutes.
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
                  Botworks builds custom operations software for SMBs and acquisition-backed companies. We start with one workflow where the pain is obvious, ship a durable, working system quickly, and use that first win to uncover the next one.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mt-2">
                  Over time, the business gets a practical software layer around the places where people used to copy, chase, translate, retype, reconcile, and remember. No hidden fees. No hostage software. The company owns the code, data, infrastructure, and documentation.
                </p>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mx-8 mb-16 bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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

export async function getStaticProps() {
  const skillsDir = path.join(process.cwd(), 'data/skills')
  const files = fs.readdirSync(skillsDir).filter(f => f.endsWith('.json'))
  const skills = files.map(file => JSON.parse(fs.readFileSync(path.join(skillsDir, file), 'utf8')))
  return { props: { skills } }
}
