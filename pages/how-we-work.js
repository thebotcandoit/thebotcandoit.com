import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'
import HomepageEditor from '../components/HomepageEditor'
import sitePages from '../data/site-pages.json'

const pageId = 'how-we-work'
const page = sitePages.pages[pageId]
const content = page.published

export default function HowWeWork() {
  return (
    <>
      <SiteHead title={content.meta.title} description={content.meta.description} path={page.path} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <HomepageEditor label={page.label} endpoint={`/api/editor/pages/${pageId}`} editableAttribute="data-site-editable" previewPath={page.path} />
        <Nav />
        <main>
          <header className="site-shell pb-16 pt-12 sm:pb-20 sm:pt-20">
            <p data-site-editable="hero.eyebrow" className="site-label">{content.hero.eyebrow}</p>
            <h1 data-site-editable="hero.heading" className="site-page-title mt-4">{content.hero.heading}</h1>
            <p data-site-editable="hero.body" className="site-lede mt-6">{content.hero.body}</p>
          </header>

          <section className="border-y border-line bg-paper-deep/65">
            <div className="site-shell divide-y divide-line">
              {content.stages.map((stage, index) => (
                <div key={stage.number} className="grid gap-4 py-8 sm:grid-cols-[70px_0.8fr_1.2fr] sm:gap-8">
                  <span className="font-mono text-sm text-accent">{stage.number}</span>
                  <h2 data-site-editable={`stages.${index}.title`} className="site-item-title">{stage.title}</h2>
                  <p data-site-editable={`stages.${index}.body`} className="site-supporting">{stage.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="site-shell site-section grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p data-site-editable="why.eyebrow" className="site-label">{content.why.eyebrow}</p>
              <h2 data-site-editable="why.heading" className="site-section-title mt-3">{content.why.heading}</h2>
            </div>
            <div className="space-y-4">
              {content.why.paragraphs.map((paragraph, index) => <p key={paragraph} data-site-editable={`why.paragraphs.${index}`} className="site-body">{paragraph}</p>)}
              <blockquote data-site-editable="why.callout" className="site-item-title border-y border-line py-6">{content.why.callout}</blockquote>
            </div>
          </section>

          <section className="border-t border-line bg-white/40">
            <div className="site-shell site-section grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p data-site-editable="relationship.eyebrow" className="site-label">{content.relationship.eyebrow}</p>
                <h2 data-site-editable="relationship.heading" className="site-section-title mt-3">{content.relationship.heading}</h2>
                {content.relationship.paragraphs.map((paragraph, index) => <p key={paragraph} data-site-editable={`relationship.paragraphs.${index}`} className="site-body mt-4">{paragraph}</p>)}
              </div>
              <div className="rounded-lg bg-ink p-7 text-white sm:p-9">
                <p data-site-editable="relationship.responsibilityEyebrow" className="site-label text-amber">{content.relationship.responsibilityEyebrow}</p>
                <ul className="mt-6 space-y-4">
                  {content.relationship.responsibilities.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/70"><span className="text-amber">•</span><span data-site-editable={`relationship.responsibilities.${index}`}>{item}</span></li>)}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-y border-line bg-white/50">
            <div className="site-shell site-section grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p data-site-editable="built.eyebrow" className="site-label">{content.built.eyebrow}</p>
                <h2 data-site-editable="built.heading" className="site-section-title mt-3">{content.built.heading}</h2>
              </div>
              <div>
                <p data-site-editable="built.body" className="site-body">{content.built.body}</p>
                <p data-site-editable="built.callout" className="site-item-title mt-5">{content.built.callout}</p>
              </div>
            </div>
          </section>

          <section className="site-shell site-section">
            <div className="rounded-lg bg-ink p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
              <div>
                <h2 data-site-editable="cta.heading" className="font-display text-3xl font-bold">{content.cta.heading}</h2>
                <p data-site-editable="cta.body" className="mt-3 max-w-2xl text-sm leading-6 text-white/70">{content.cta.body}</p>
              </div>
              <a href="mailto:matt@botworksagency.com" data-site-editable="cta.label" className="mt-6 inline-flex shrink-0 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink hover:bg-white sm:mt-0">{content.cta.label}</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
