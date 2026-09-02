import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

const studies = [
  {
    href: '/case-studies/field-visit-capture',
    industry: 'Large commercial landscaper · South Florida',
    status: 'In production',
    title: 'A field visit became the shared record for operations, clients, and estimates.',
    body: 'Weak-cell photo capture, supervisor review, crew follow-up, client PDFs, and an estimating system under active testing.',
  },
  {
    href: '/case-studies/finance-operations',
    industry: 'Regional transportation company',
    status: 'Active engagement',
    title: 'A recurring executive snapshot became a tested reporting product.',
    body: 'Source mapping, reconciliation, stable reporting definitions, PDF generation, and owner-operator transaction processing.',
  },
  {
    href: '/case-studies/hvac-rebate-automation',
    industry: 'Family-owned HVAC contractor',
    status: 'Under operator validation',
    title: 'A job number became a reviewable, print-ready rebate packet.',
    body: 'Existing job data connected to a local program-specific filing and paperwork workflow without replacing the field-service product.',
  },
]

export default function Work() {
  return (
    <>
      <SiteHead
        title="Work — Botworks"
        description="Three Botworks case studies showing how a promising AI hunch became working proof in commercial landscaping, transportation finance, and HVAC rebate processing."
        path="/work"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="mx-auto max-w-6xl px-6 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">Work</p>
            <h1 className="font-display mt-4 max-w-4xl text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">A hunch becomes real when the company can use it.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968]">These companies did not begin with an AI transformation plan. They began with important work that seemed harder than it should be—and a sense AI might help. The case studies show what that hunch became, where testing mattered, and what remains unresolved.</p>
          </header>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto max-w-6xl divide-y divide-[#cfc5b5] px-6 sm:px-8">
              {studies.map((study, index) => (
                <Link key={study.href} href={study.href} className="group grid gap-4 py-8 sm:py-10 lg:grid-cols-[70px_1fr_1fr] lg:gap-8">
                  <span className="font-mono text-xs text-[#1f7a57]">0{index + 1}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#626b7a]">{study.industry}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1f7a57]">{study.status}</p>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold leading-tight text-[#12131a] transition-colors group-hover:text-[#1f7a57]">{study.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#596474]">{study.body}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#1f7a57]">Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">From possibility to proof</p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">The thing we make changes. The way we prove it does not.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ['Choose consequential work', 'Open the files, trace the workflow, and find where a better answer would genuinely matter.'],
                ['Make the hunch visible', 'A concrete output lets the company judge AI against its own work instead of an abstract promise.'],
                ['Test the real failure modes', 'Weak cell service, renamed lists, missing divisions, portal changes, and misleading empty states are part of the product.'],
                ['Leave the work legible', 'Definitions, decisions, source data, code, tests, and documentation should survive the person who created them.'],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-[#cfc5b5] pt-4">
                  <h3 className="font-display text-xl font-bold text-[#12131a]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#626b7a]">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
