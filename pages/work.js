import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <>
      <Head>
        <title>Production workflow systems &mdash; Botworks Agency</title>
        <meta name="description" content="Production case studies from workflow automation and custom software built for HVAC, commercial landscaping, and service-business operations." />
        <meta property="og:title" content="Work — Botworks Agency" />
        <meta property="og:description" content="Practical AI, automation, and custom workflow case studies for SMBs with messy operations." />
        <meta property="og:url" content="https://botworksagency.com/work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://botworksagency.com/work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen paper-grid">
        <Nav />
        <main className="mx-auto max-w-5xl px-6 sm:px-8 py-12">

          <p className="text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em] mb-3">Work</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#12131a] leading-[0.98] mb-4">
            Systems that carry real work.
          </h1>
          <p className="text-[#4f5968] text-base sm:text-lg leading-relaxed mb-12 max-w-3xl">
            Each engagement started with one expensive or unreliable handoff. The useful part is not simply what the interface does—it is the operational layer underneath: integrations, rules, records, permissions, monitoring, and a path for the next workflow.
          </p>

          {/* CASE STUDIES */}
          <section className="mb-16">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">Case studies</p>
            <h2 className="font-display text-3xl font-bold text-[#12131a] mb-6">Real work, in production</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/case-studies/hvac-rebate-automation"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#2f9e73] mb-2">HVAC contractor</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">Rebate program filings: 8 hours a week reclaimed.</h3>
                <p className="text-sm text-[#626b7a] leading-relaxed mb-4">
                  A job-number lookup pulls source data from Housecall Pro, classifies the program, lets the operator review exceptions, drives the contractor portal, verifies the rendered customer, and stores a print-ready double-sided mailer.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">
                  Read the case study &rarr;
                </span>
              </Link>
              <Link
                href="/case-studies/field-visit-capture"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#2f9e73] mb-2">Commercial landscaping</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">Field visits now feed crew work, archives, and proposals.</h3>
                <p className="text-sm text-[#626b7a] leading-relaxed mb-4">
                  A resilient mobile PWA captures notes and photos; the system stores a bilingual record, routes crew issues into Microsoft To Do, mirrors photos into SharePoint, and turns enhancement opportunities into editable client PDFs.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">
                  Read the case study &rarr;
                </span>
              </Link>
              <Link
                href="/case-studies/interior-design-research-toolkit"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#f2b84b] mb-2">Interior design studio</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">AI-assisted research: better prep without a big custom app.</h3>
                <p className="text-sm text-[#626b7a] leading-relaxed mb-4">
                  Practical AI habits and lightweight tools that compress a designer&apos;s pre-pitch homework &mdash; reference photos, listing-price sanity checks, neighborhood comps &mdash; from hours to minutes.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">
                  Read the case study &rarr;
                </span>
              </Link>
            </div>
          </section>

          {/* OPERATING PATTERNS */}
          <section className="mb-16">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">What the work has taught us</p>
            <h2 className="font-display text-3xl font-bold text-[#12131a] mb-6">The reusable knowledge is in the decisions.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                ['Adoption beats theoretical completeness', 'A no-login field capture form can be the right choice when every extra step costs adoption—while the supervisor workspace still gets real OTP authentication and role-aware access.'],
                ['Automations need visible failure states', 'A pipeline can behave correctly and still hold work because a token expired or someone renamed a destination list. Health checks must watch business routing, not merely server errors.'],
                ['Structured data creates the next product', 'Once a visit or filing becomes a canonical record, the same facts can drive tasks, archives, PDFs, proposals, reporting, and the next operational workflow without re-entry.'],
                ['Human review belongs at the right boundary', 'People should review exceptions and customer-facing output—not repeat deterministic copying that software can handle reliably.'],
              ].map(([title, body]) => (
                <div key={title} className="hairline-card rounded-lg bg-[#fffaf0] p-6">
                  <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">{title}</h3>
                  <p className="text-sm text-[#626b7a] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#12131a] rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-white/65 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. If software can make it cleaner, I&apos;ll tell you how &mdash; no commitment, no pitch.
              </p>
            </div>
            <Link href="/contact" className="bg-[#f2b84b] text-[#12131a] px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap hover:bg-white transition-colors">
              Let&apos;s talk
            </Link>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
