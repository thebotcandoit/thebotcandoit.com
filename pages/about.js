import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'
import HomepageEditor from '../components/HomepageEditor'
import sitePages from '../data/site-pages.json'

const pageId = 'about'
const page = sitePages.pages[pageId]
const content = page.published

export default function About() {
  return (
    <>
      <SiteHead title={content.meta.title} description={content.meta.description} path={page.path} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <HomepageEditor label={page.label} endpoint={`/api/editor/pages/${pageId}`} editableAttribute="data-site-editable" previewPath={page.path} />
        <Nav />
        <main>
          <header className="site-shell grid max-w-5xl gap-10 pb-16 pt-12 sm:pb-20 sm:pt-20 lg:grid-cols-[220px_1fr] lg:items-start">
            <img src="/profil_pic_thebotcandoit_2_march30.jpg" alt="Matt Livingston" width="604" height="598" decoding="async" className="h-48 w-48 rounded-lg object-cover shadow-[0_18px_60px_rgba(45,36,18,0.16)]" />
            <div>
              <p data-site-editable="hero.eyebrow" className="site-label">{content.hero.eyebrow}</p>
              <h1 data-site-editable="hero.heading" className="site-page-title mt-4">{content.hero.heading}</h1>
              <p data-site-editable="hero.body" className="site-lede mt-6">{content.hero.body}</p>
            </div>
          </header>

          <section className="border-y border-line bg-paper-deep/65">
            <div className="site-shell site-section grid max-w-5xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <h2 data-site-editable="why.heading" className="site-section-title">{content.why.heading}</h2>
              <div className="site-body space-y-4">
                {content.why.paragraphs.map((paragraph, index) => <p key={paragraph} data-site-editable={`why.paragraphs.${index}`}>{paragraph}</p>)}
              </div>
            </div>
          </section>

          <section className="site-shell site-section grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p data-site-editable="care.eyebrow" className="site-label">{content.care.eyebrow}</p>
              <h2 data-site-editable="care.heading" className="site-section-title mt-3">{content.care.heading}</h2>
              <p data-site-editable="care.body" className="site-body mt-4">{content.care.body}</p>
            </div>
            <div>
              <p data-site-editable="notBuilding.eyebrow" className="site-label">{content.notBuilding.eyebrow}</p>
              <h2 data-site-editable="notBuilding.heading" className="site-section-title mt-3">{content.notBuilding.heading}</h2>
              <p data-site-editable="notBuilding.body" className="site-body mt-4">{content.notBuilding.body}</p>
            </div>
          </section>

          <section className="site-shell max-w-5xl pb-20">
            <div className="rounded-lg bg-ink p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
              <div>
                <h2 data-site-editable="cta.heading" className="font-display text-3xl font-bold">{content.cta.heading}</h2>
                <p data-site-editable="cta.body" className="mt-3 text-sm leading-6 text-white/70">{content.cta.body}</p>
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
