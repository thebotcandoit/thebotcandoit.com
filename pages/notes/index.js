import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SiteHead from '../../components/SiteHead'
import HomepageEditor from '../../components/HomepageEditor'
import { publishedNotes } from '../../data/notes'
import sitePages from '../../data/site-pages.json'

const pageId = 'notes'
const page = sitePages.pages[pageId]
const content = page.published

export default function NotesIndex() {
  return (
    <>
      <SiteHead
        title={content.meta.title}
        description={content.meta.description}
        path={page.path}
      />
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
            <div className="site-shell site-section-compact">
              {publishedNotes.map((note) => (
                <Link key={note.slug} href={`/notes/${note.slug}`} className="group grid gap-5 border-b border-line py-8 first:border-t sm:grid-cols-[0.4fr_1.6fr] sm:gap-10">
                  <div>
                    <p className="site-label">{note.type}</p>
                    <p className="site-meta mt-2 font-normal">{note.date} · {note.readingTime}</p>
                  </div>
                  <div>
                    <h2 className="site-section-title">{note.title}</h2>
                    <p className="site-supporting mt-3">{note.description}</p>
                    <span data-site-editable="articleCta" className="site-link mt-5 inline-block">{content.articleCta} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="site-shell site-section grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <h2 data-site-editable="agent.heading" className="site-section-title">{content.agent.heading}</h2>
            <p data-site-editable="agent.body" className="site-body">{content.agent.body}</p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
