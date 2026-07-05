import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getNoteBySlug } from '../../data/notes'

const note = getNoteBySlug('botworks-vs-using-ai-yourself')

export default function BotworksVsUsingAiYourself() {
  const isDraft = note.status === 'draft'
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    dateModified: note.date,
    author: {
      '@type': 'Person',
      name: 'Matt Livingston',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Botworks Agency',
      url: 'https://botworksagency.com',
    },
    mainEntityOfPage: note.canonical,
  }

  return (
    <>
      <Head>
        <title>{`${note.title} - Botworks Agency`}</title>
        <meta name="description" content={note.description} />
        {isDraft && <meta name="robots" content="noindex,nofollow" />}
        <meta property="og:title" content={`${note.title} — Botworks Agency`} />
        <meta property="og:description" content={note.description} />
        <meta property="og:url" content={note.canonical} />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={note.canonical} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </Head>
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main>
          <article className="mx-auto max-w-3xl px-6 sm:px-8 pt-10 sm:pt-16 pb-12">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <Link href="/notes" className="text-sm font-semibold text-[#2f9e73] hover:text-[#12131a] transition-colors">
                Notes
              </Link>
              <span className="h-1 w-1 rounded-full bg-[#8a8171]" />
              <span className="text-sm text-[#626b7a]">{note.readingTime}</span>
              {isDraft && (
                <span className="rounded-full border border-[#f2b84b]/50 bg-[#f2b84b]/18 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a4d00]">
                  Draft
                </span>
              )}
            </div>

            <p className="mb-4 text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em]">{note.type}</p>
            <h1 data-editable="note.title" className="font-display text-[2.45rem] sm:text-6xl font-bold tracking-tight text-[#12131a] leading-[0.98] mb-5">
              {note.title}
            </h1>
            <p data-editable="note.summary" className="text-lg sm:text-xl text-[#4f5968] leading-relaxed mb-10">
              {note.summary}
            </p>

            <div className="hairline-card rounded-lg bg-[#12131a] p-5 sm:p-6 text-white mb-10">
              <p className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-4">Decision guide</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {note.comparison.map((column, columnIndex) => (
                  <div key={column.label}>
                    <h2 data-editable={`note.comparison.${columnIndex}.label`} className="font-display text-xl font-bold mb-3">{column.label}</h2>
                    <ul className="space-y-3">
                      {column.items.map((item, itemIndex) => (
                        <li key={item} data-editable={`note.comparison.${columnIndex}.items.${itemIndex}`} className="text-sm leading-relaxed text-white/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {note.sections.map((section, sectionIndex) => (
                <section key={section.heading}>
                  <p data-editable={`note.sections.${sectionIndex}.eyebrow`} className="mb-3 text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em]">
                    {section.eyebrow}
                  </p>
                  <h2 data-editable={`note.sections.${sectionIndex}.heading`} className="font-display text-3xl font-bold text-[#12131a] leading-tight mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, paragraphIndex) => (
                      <p key={paragraph} data-editable={`note.sections.${sectionIndex}.body.${paragraphIndex}`} className="text-base text-[#626b7a] leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 rounded-lg bg-[#fffaf0] hairline-card p-6">
              <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-3">A useful next question</p>
              <h2 data-editable="note.cta.heading" className="font-display text-2xl font-bold text-[#12131a] mb-3">
                Which workflow has outgrown prompting?
              </h2>
              <p data-editable="note.cta.body" className="text-base text-[#626b7a] leading-relaxed mb-5">
                If one part of the business depends on copying, chasing, retyping, or remembering, that is the place to inspect first.
              </p>
              <Link href="/contact" className="inline-flex rounded-lg bg-[#12131a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f9e73]">
                Talk through a workflow
              </Link>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
