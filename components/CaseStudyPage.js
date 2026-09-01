import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import SiteHead from './SiteHead'

export default function CaseStudyPage({
  path,
  title,
  description,
  eyebrow,
  intro,
  status,
  facts,
  sections,
  delivered,
  boundary,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: title,
    description,
    url: `https://botworksagency.com${path}`,
    author: { '@type': 'Person', name: 'Matt Livingston' },
    publisher: { '@type': 'Organization', name: 'Botworks Agency' },
  }

  return (
    <>
      <SiteHead title={`${title} — Botworks`} description={description} path={path} type="article" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="mx-auto max-w-5xl px-6 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-20">
            <Link href="/work" className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f7a57] hover:text-[#12131a]">← Work</Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em]">
              <span className="text-[#626b7a]">{eyebrow}</span>
              <span className="h-1 w-1 rounded-full bg-[#f2b84b]" />
              <span className="text-[#1f7a57]">{status}</span>
            </div>
            <h1 className="font-display mt-4 max-w-4xl text-[2.6rem] font-bold leading-[0.98] tracking-tight text-[#12131a] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968]">{intro}</p>
          </header>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/70">
            <dl className="mx-auto grid max-w-5xl divide-y divide-[#cfc5b5] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
              {facts.map(([label, value]) => (
                <div key={label} className="py-5 sm:px-6 sm:first:pl-0">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a8171]">{label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#12131a]">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <article className="mx-auto grid max-w-5xl gap-12 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[220px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-l-2 border-[#f2b84b] pl-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a8171]">Case note</p>
                <p className="mt-2 text-sm leading-relaxed text-[#626b7a]">Client details are anonymized. Status and limitations are stated directly.</p>
              </div>
            </aside>
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.heading}>
                  {section.eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1f7a57]">{section.eyebrow}</p>}
                  <h2 className="font-display text-3xl font-bold leading-tight text-[#12131a]">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-[#4f5968]">{paragraph}</p>)}
                  </div>
                  {section.callout && <blockquote className="mt-6 border-l-2 border-[#2f9e73] pl-5 font-display text-xl font-bold leading-snug text-[#12131a]">{section.callout}</blockquote>}
                </section>
              ))}

              <section className="rounded-lg bg-[#12131a] p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f2b84b]">What exists now</p>
                <ul className="mt-5 space-y-3">
                  {delivered.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/72"><span className="text-[#f2b84b]">—</span><span>{item}</span></li>)}
                </ul>
              </section>

              <section className="border-y border-[#cfc5b5] py-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a8171]">Boundary</p>
                <p className="mt-3 text-base leading-relaxed text-[#4f5968]">{boundary}</p>
              </section>
            </div>
          </article>

          <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-8">
            <div className="rounded-lg bg-[#fffaf0] p-7 ring-1 ring-[#ded6c7] sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#12131a]">Does this resemble work inside your company?</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#626b7a]">Send Matt the rough version. The first conversation can begin before the problem has a clean name.</p>
              </div>
              <a href="mailto:matt@botworksagency.com" className="mt-5 inline-flex shrink-0 rounded-md bg-[#12131a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2f9e73] sm:mt-0">Email Matt</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
