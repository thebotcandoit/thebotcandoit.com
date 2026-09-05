import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import SiteHead from './SiteHead'
import HomepageEditor from './HomepageEditor'

function DeliveredSummary({ delivered, eyebrow, heading, intro }) {
  return (
    <section className="rounded-lg bg-ink p-6 text-white sm:p-8">
      {eyebrow && <p data-site-editable="deliveredEyebrow" className="site-label text-amber">{eyebrow}</p>}
      <h2 data-site-editable="deliveredHeading" className={`site-section-title text-white ${eyebrow ? 'mt-3' : ''}`}>{heading}</h2>
      {intro && <p data-site-editable="deliveredIntro" className="mt-3 text-sm leading-6 text-white/70">{intro}</p>}
      {typeof delivered[0] === 'string' ? (
        <ul className="mt-5 space-y-3">
          {delivered.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/70"><span className="text-amber">•</span><span data-site-editable={`delivered.${index}`}>{item}</span></li>)}
        </ul>
      ) : (
        <div className={`mt-6 grid gap-x-8 gap-y-6 ${delivered.length === 3 ? 'lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {delivered.map((item, index) => (
            <section key={item.heading} className="border-t border-white/15 pt-4">
              <h3 data-site-editable={`delivered.${index}.heading`} className="text-base font-semibold text-white">{item.heading}</h3>
              <p data-site-editable={`delivered.${index}.body`} className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
            </section>
          ))}
        </div>
      )}
    </section>
  )
}

function EvidenceSection({ evidence, fullWidth = false }) {
  const wideClass = fullWidth ? '' : 'lg:-ml-[284px] lg:w-[calc(100%+284px)]'
  const imageLayout = evidence.layout === 'stacked'
    ? `mt-7 grid items-start gap-6 ${wideClass}`
    : `mt-7 grid items-start gap-6 ${evidence.items?.length > 1 ? 'sm:grid-cols-2' : wideClass}`

  return (
    <section>
      <p data-site-editable="evidence.eyebrow" className="site-label mb-2">{evidence.eyebrow}</p>
      <h2 data-site-editable="evidence.heading" className="site-section-title">{evidence.heading}</h2>
      {evidence.intro && <p data-site-editable="evidence.intro" className="site-body mt-4">{evidence.intro}</p>}
      {evidence.video && (
        <figure className={`mt-7 overflow-hidden rounded-lg border border-line bg-white/70 ${wideClass}`}>
          <div className="bg-ink">
            <video
              controls
              playsInline
              preload="metadata"
              poster={evidence.video.poster}
              aria-label={evidence.video.label}
              className="aspect-video h-auto w-full bg-ink text-white"
            >
              <source src={evidence.video.src} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
          <figcaption data-site-editable="evidence.video.caption" className="border-t border-line px-4 py-3 text-sm leading-6 text-copy">
            {evidence.video.caption}
          </figcaption>
        </figure>
      )}
      {(evidence.items || []).length > 0 && (
        <div className={imageLayout}>
          {evidence.items.map((item, index) => (
            <figure key={item.src} className="overflow-hidden rounded-lg border border-line bg-white/70">
              <div className="bg-white">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
              <figcaption data-site-editable={`evidence.items.${index}.caption`} className="border-t border-line px-4 py-3 text-sm leading-6 text-copy">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

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
  deliveredEyebrow = 'In production',
  deliveredHeading = 'What exists now',
  deliveredIntro,
  deliveredPosition = 'bottom',
  evidencePosition = 'bottom',
  boundary,
  cta,
  editorId,
}) {
  const shareImage = evidence?.video?.poster || evidence?.items?.[0]?.src || '/og.jpg'
  const shareImageAlt = evidence?.video?.label || evidence?.items?.[0]?.alt || `${title} case study from Botworks`
  const shareImageWidth = evidence?.items?.[0]?.width || (shareImage === '/og.jpg' ? 1200 : 1280)
  const shareImageHeight = evidence?.items?.[0]?.height || (shareImage === '/og.jpg' ? 630 : 720)
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
      <SiteHead
        title={`${title} | Botworks`}
        description={description}
        path={path}
        type="article"
        image={shareImage}
        imageAlt={shareImageAlt}
        imageWidth={shareImageWidth}
        imageHeight={shareImageHeight}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        {editorId && (
          <HomepageEditor
            label="Case study"
            endpoint={`/api/editor/pages/${editorId}`}
            editableAttribute="data-site-editable"
            previewPath={path}
          />
        )}
        <Nav />
        <main>
          <header className="site-shell max-w-5xl pb-16 pt-12 sm:pt-20">
            <Link href="/work" className="site-link">← Work</Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span data-site-editable="eyebrow" className="site-meta">{eyebrow}</span>
              <span data-site-editable="status" className="site-meta text-accent">{status}</span>
            </div>
            <h1 data-site-editable="title" className="site-page-title mt-4">{title}</h1>
            <p data-site-editable="intro" className="site-lede mt-6">{intro}</p>
          </header>

          {deliveredPosition === 'top' && (
            <section className="site-shell max-w-5xl pb-14 sm:pb-16">
              <DeliveredSummary
                delivered={delivered}
                eyebrow={deliveredEyebrow}
                heading={deliveredHeading}
                intro={deliveredIntro}
              />
            </section>
          )}

          {evidence && evidencePosition === 'top' && (
            <section className="site-shell max-w-5xl pb-14 sm:pb-16">
              <EvidenceSection evidence={evidence} fullWidth />
            </section>
          )}

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
              <p data-site-editable="journey.eyebrow" className="site-label">{journey.eyebrow}</p>
              <h2 data-site-editable="journey.heading" className="site-section-title mt-3 max-w-3xl">{journey.heading}</h2>
              {journey.intro && <p data-site-editable="journey.intro" className="site-body mt-4 max-w-3xl">{journey.intro}</p>}
              <ol className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                {journey.steps.map((step, index) => (
                  <li key={step.heading} className="border-t border-line pt-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
                      <h3 data-site-editable={`journey.steps.${index}.heading`} className="site-item-title">{step.heading}</h3>
                    </div>
                    <p data-site-editable={`journey.steps.${index}.body`} className="site-supporting mt-2 pl-8">{step.body}</p>
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
              {sections.map((section, sectionIndex) => (
                <section key={section.heading}>
                  {section.eyebrow && <p data-site-editable={`sections.${sectionIndex}.eyebrow`} className="site-label mb-2">{section.eyebrow}</p>}
                  <h2 data-site-editable={`sections.${sectionIndex}.heading`} className="site-section-title">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph} data-site-editable={`sections.${sectionIndex}.paragraphs.${paragraphIndex}`} className="site-body">{paragraph}</p>)}
                  </div>
                  {section.callout && <blockquote data-site-editable={`sections.${sectionIndex}.callout`} className="site-body mt-6 font-semibold text-ink">{section.callout}</blockquote>}
                </section>
              ))}

              {evidence && evidencePosition === 'bottom' && <EvidenceSection evidence={evidence} />}

              {deliveredPosition === 'bottom' && (
                <DeliveredSummary
                  delivered={delivered}
                  eyebrow={deliveredEyebrow}
                  heading={deliveredHeading}
                  intro={deliveredIntro}
                />
              )}

              <section className="border-y border-line py-7">
                <p className="site-label text-copy">Boundary</p>
                <p data-site-editable="boundary" className="site-body mt-3">{boundary}</p>
              </section>
            </div>
          </article>

          <section className="site-shell max-w-5xl pb-20">
            <div className="rounded-lg bg-white/50 p-7 ring-1 ring-line sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <h2 data-site-editable="cta.heading" className="site-item-title">{cta?.heading || 'Does this resemble work inside your company?'}</h2>
                <p data-site-editable="cta.body" className="site-supporting mt-2">{cta?.body || 'Send Matt the rough version. The first conversation can begin before the problem has a clean name.'}</p>
              </div>
              <a href="mailto:matt@botworksagency.com" data-site-editable="cta.label" className="mt-5 inline-flex shrink-0 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-accent sm:mt-0">{cta?.label || 'matt@botworksagency.com'}</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
