import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'
import HomepageEditor from '../components/HomepageEditor'
import sitePages from '../data/site-pages.json'

const pageId = 'work'
const page = sitePages.pages[pageId]
const content = page.published

export default function Work() {
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
              {content.studies.map((study, index) => (
                <Link key={study.href} href={study.href} className="group grid gap-4 py-8 lg:grid-cols-[70px_1fr_1fr] lg:gap-8">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <div>
                    <p data-site-editable={`studies.${index}.industry`} className="site-meta">{study.industry}</p>
                    <p data-site-editable={`studies.${index}.status`} className="site-meta mt-2 text-accent">{study.status}</p>
                  </div>
                  <div>
                    <h2 data-site-editable={`studies.${index}.title`} className="site-item-title">{study.title}</h2>
                    <p data-site-editable={`studies.${index}.body`} className="site-supporting mt-3">{study.body}</p>
                    <span data-site-editable={`studies.${index}.cta`} className="site-link mt-5 inline-block">{study.cta} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="site-shell site-section grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p data-site-editable="repeats.eyebrow" className="site-label">{content.repeats.eyebrow}</p>
              <h2 data-site-editable="repeats.heading" className="site-section-title mt-3">{content.repeats.heading}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {content.repeats.items.map((item, index) => (
                <div key={item.heading} className="border-t border-line pt-4">
                  <h3 data-site-editable={`repeats.items.${index}.heading`} className="font-display text-xl font-bold leading-snug text-ink">{item.heading}</h3>
                  <p data-site-editable={`repeats.items.${index}.body`} className="site-supporting mt-2">{item.body}</p>
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
