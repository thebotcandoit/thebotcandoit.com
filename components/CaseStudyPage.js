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
  facts = [],
  journey,
  sections,
  evidence,
  delivered,
  deliveredHeading = 'What exists now',
  deliveredIntro,
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
    ...(facts.length ? {
      additionalProperty: facts.map(([name, value]) => ({
        '@type': 'PropertyValue',
        name,
        value,
      })),
    } : {}),
    ...(journey ? {
      hasPart: journey.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.heading,
        text: step.body,
      })),
    } : {}),
  }

  return (
    <>
      <SiteHead title={`${title} | Botworks`} description={description} path={path} type="article" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <header className="site-shell max-w-5xl pb-16 pt-12 sm:pt-20">
            <Link href="/work" className="site-link">← Work</Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="site-meta">{eyebrow}</span>
              <span aria-hidden="true" className="text-copy/40">·</span>
              <span className="site-meta text-accent">{status}</span>
            </div>
            <h1 className="site-page-title mt-4">{title}</h1>
            <p className="site-lede mt-6">{intro}</p>
          </header>

          {facts.length > 0 && (
            <section className="border-y border-line bg-paper-deep/70">
              <dl className={`site-shell grid max-w-5xl divide-y divide-line sm:gap-8 sm:divide-y-0 ${facts.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}>
                {facts.map(([label, value]) => (
                  <div key={label} className="py-5">
                    <dt className="site-label text-copy">{label}</dt>
                    <dd className="mt-2 text-sm leading-6 text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {journey && (
            <section className="site-shell max-w-5xl py-14 sm:py-18">
              <p className="site-label">{journey.eyebrow}</p>
              <h2 className="site-section-title mt-3 max-w-3xl">{journey.heading}</h2>
              {journey.intro && <p className="site-body mt-4 max-w-3xl">{journey.intro}</p>}
              <ol className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                {journey.steps.map((step, index) => (
                  <li key={step.heading} className="border-t border-line pt-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="site-item-title">{step.heading}</h3>
                    </div>
                    <p className="site-supporting mt-2 pl-8">{step.body}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <article className="site-shell site-section grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="site-label text-copy">Case note</p>
                <p className="site-supporting mt-2">Client details are anonymized. Status and limitations are stated directly.</p>
              </div>
            </aside>
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.heading}>
                  {section.eyebrow && <p className="site-label mb-2">{section.eyebrow}</p>}
                  <h2 className="site-section-title">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="site-body">{paragraph}</p>)}
                  </div>
                  {section.callout && <blockquote className="site-item-title mt-6">{section.callout}</blockquote>}
                </section>
              ))}

              {evidence && (
                <section>
                  <p className="site-label mb-2">{evidence.eyebrow}</p>
                  <h2 className="site-section-title">{evidence.heading}</h2>
                  {evidence.intro && <p className="site-body mt-4">{evidence.intro}</p>}
                  <div className="mt-7 grid items-start gap-6 sm:grid-cols-2">
                    {evidence.items.map((item) => (
                      <figure key={item.src} className="overflow-hidden rounded-lg border border-line bg-white/70">
                        <div className="bg-white">
                          <img
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            decoding="async"
                            className="h-auto w-full"
                          />
                        </div>
                        <figcaption className="border-t border-line px-4 py-3 text-sm leading-6 text-copy">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              <section className="rounded-lg bg-ink p-6 text-white sm:p-8">
                <p className="site-label text-amber">In production</p>
                <h2 className="site-section-title mt-3 text-white">{deliveredHeading}</h2>
                {deliveredIntro && <p className="mt-3 text-sm leading-6 text-white/70">{deliveredIntro}</p>}
                {typeof delivered[0] === 'string' ? (
                  <ul className="mt-5 space-y-3">
                    {delivered.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/70"><span className="text-amber">•</span><span>{item}</span></li>)}
                  </ul>
                ) : (
                  <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {delivered.map((item) => (
                      <section key={item.heading} className="border-t border-white/15 pt-4">
                        <h3 className="text-base font-semibold text-white">{item.heading}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
                      </section>
                    ))}
                  </div>
                )}
              </section>

              <section className="border-y border-line py-7">
                <p className="site-label text-copy">Boundary</p>
                <p className="site-body mt-3">{boundary}</p>
              </section>
            </div>
          </article>

          <section className="site-shell max-w-5xl pb-20">
            <div className="rounded-lg bg-white/50 p-7 ring-1 ring-line sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <h2 className="site-item-title">Does this resemble work inside your company?</h2>
                <p className="site-supporting mt-2">Send Matt the rough version. The first conversation can begin before the problem has a clean name.</p>
              </div>
              <a href="mailto:matt@botworksagency.com" className="mt-5 inline-flex shrink-0 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-accent sm:mt-0">matt@botworksagency.com</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
