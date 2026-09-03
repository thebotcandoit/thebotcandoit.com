import Link from 'next/link'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import NotesEditor from '../../components/NotesEditor'
import SiteHead from '../../components/SiteHead'
import { getNoteBySlug } from '../../data/notes'

const note = getNoteBySlug('botworks-vs-using-ai-yourself')

export default function BotworksVsUsingAiYourself() {
  const [copied, setCopied] = useState(false)
  const isDraft = note.status === 'draft'
  const markdownUrl = `/notes/${note.slug}.md`
  const trackedUrl = `${note.canonical}?via=second-opinion`
  const secondOpinionPrompt = note.secondOpinionPrompt.replace('{{url}}', trackedUrl)
  const encodedPrompt = encodeURIComponent(secondOpinionPrompt)
  const secondOpinionLinks = [
    ['ChatGPT', `https://chatgpt.com/?q=${encodedPrompt}`],
    ['Claude', `https://claude.ai/new?q=${encodedPrompt}`],
    ['Perplexity', `https://www.perplexity.ai/search?q=${encodedPrompt}`],
    ['Gemini', `https://gemini.google.com/app?q=${encodedPrompt}`],
    ['Grok', `https://x.com/i/grok?text=${encodedPrompt}`],
  ]
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

  async function copySecondOpinionPrompt() {
    try {
      await navigator.clipboard.writeText(secondOpinionPrompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <SiteHead title={`${note.title} — Botworks`} description={note.description} path={`/notes/${note.slug}`} type="article" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <NotesEditor slug={note.slug} initialStatus={note.status} />
        <Nav />
        <main>
          <article className="mx-auto max-w-3xl px-6 pb-12 pt-10 sm:px-8 sm:pt-16">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <Link href="/notes" className="site-link">
                Notes
              </Link>
              <span aria-hidden="true" className="text-copy/40">·</span>
              <span className="text-sm text-copy">{note.readingTime}</span>
              <a href={markdownUrl} className="site-link">
                Markdown version
              </a>
              {isDraft && (
                <span className="rounded-full border border-[#f2b84b]/50 bg-[#f2b84b]/18 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a4d00]">
                  Draft
                </span>
              )}
            </div>

            <p className="site-label mb-4 text-copy">{note.type}</p>
            <h1 data-editable="note.title" className="site-page-title mb-5">
              {note.title}
            </h1>
            <p data-editable="note.summary" className="site-lede mb-10">
              {note.summary}
            </p>

            <section className="hairline-card mb-10 rounded-lg bg-white/50 p-5 sm:p-6">
              <p className="site-label mb-4 text-copy">For agents, and everyone else</p>
              <ul className="space-y-3">
                {note.facts.map((fact, factIndex) => (
                  <li key={fact} className="flex gap-3 text-base leading-7 text-copy">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    <span data-editable={`note.facts.${factIndex}`}>{fact}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="hairline-card mb-10 rounded-lg bg-ink p-5 text-white sm:p-6">
              <p className="site-label mb-4 text-amber">Decision guide</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {note.comparison.map((column, columnIndex) => (
                  <div key={column.label}>
                    <h2 data-editable={`note.comparison.${columnIndex}.label`} className="font-display text-xl font-bold mb-3">{column.label}</h2>
                    <ul className="space-y-3">
                      {column.items.map((item, itemIndex) => (
                        <li key={item} data-editable={`note.comparison.${columnIndex}.items.${itemIndex}`} className="text-sm leading-6 text-white/70">
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
                  <p data-editable={`note.sections.${sectionIndex}.eyebrow`} className="site-label mb-3">
                    {section.eyebrow}
                  </p>
                  <h2 data-editable={`note.sections.${sectionIndex}.heading`} className="site-section-title mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, paragraphIndex) => (
                      <p key={paragraph} data-editable={`note.sections.${sectionIndex}.body.${paragraphIndex}`} className="site-body">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 rounded-lg bg-ink p-5 text-white sm:p-6">
              <p className="site-label mb-3 text-amber">Ask your own AI</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Don&apos;t trust this page. Stress-test it.
              </h2>
              <p className="mb-5 text-base leading-7 text-white/70">
                This prompt asks an assistant to read the note, challenge the comparison, and decide whether Botworks is actually a better fit than using AI tools internally.
              </p>
              <textarea
                readOnly
                data-editable="note.secondOpinionPrompt"
                value={secondOpinionPrompt}
                className="mb-4 h-56 w-full resize-none rounded-md border border-white/10 bg-white/[0.06] p-4 font-mono text-xs leading-relaxed text-white/70 outline-none"
              />
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={copySecondOpinionPrompt}
                  className="rounded-lg bg-amber px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  {copied ? 'Prompt copied' : 'Copy prompt'}
                </button>
                {secondOpinionLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-amber hover:text-amber"
                  >
                    Open in {label}
                  </a>
                ))}
              </div>
            </section>

            <section className="hairline-card mt-12 rounded-lg bg-white/50 p-6">
              <p className="site-label mb-3 text-copy">A useful next question</p>
              <h2 data-editable="note.cta.heading" className="site-item-title mb-3">
                {note.cta.heading}
              </h2>
              <p data-editable="note.cta.body" className="site-body mb-5">
                {note.cta.body}
              </p>
              <Link href="/contact" className="inline-flex rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent">
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
