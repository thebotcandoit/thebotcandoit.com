import Link from 'next/link'
import { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import NotesEditor from '../../components/NotesEditor'
import SiteHead from '../../components/SiteHead'
import { getNoteBySlug, notes } from '../../data/notes'

function DecisionNote({ note }) {
  const [copied, setCopied] = useState(false)
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
      <section className="hairline-card mb-10 rounded-lg bg-white/50 p-5 sm:p-6">
        <p className="site-label mb-4 text-copy">For agents, and everyone else</p>
        <ul className="space-y-3">
          {note.facts.map((fact, factIndex) => (
            <li key={factIndex} className="flex gap-3 text-base leading-7 text-copy">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span data-editable={`facts.${factIndex}`}>{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline-card mb-10 rounded-lg bg-ink p-5 text-white sm:p-6">
        <p className="site-label mb-4 text-amber">Decision guide</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {note.comparison.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h2 data-editable={`comparison.${columnIndex}.label`} className="font-display mb-3 text-xl font-bold">{column.label}</h2>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} data-editable={`comparison.${columnIndex}.items.${itemIndex}`} className="text-sm leading-6 text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ArticleSections note={note} />

      <section className="mt-12 rounded-lg bg-ink p-5 text-white sm:p-6">
        <p className="site-label mb-3 text-amber">Ask your own AI</p>
        <h2 className="font-display mb-3 text-2xl font-bold text-white sm:text-3xl">
          Don&apos;t trust this page. Stress-test it.
        </h2>
        <p className="mb-5 text-base leading-7 text-white/70">
          This prompt asks an assistant to read the note, challenge the comparison, and decide whether Botworks is actually a better fit than using AI tools internally.
        </p>
        <textarea
          readOnly
          data-editable="secondOpinionPrompt"
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
    </>
  )
}

function ArticleSections({ note }) {
  const sections = note.sections
    .map((section, originalIndex) => ({ section, originalIndex }))
    .filter(({ section }) => (
      note.status === 'draft'
      || section.heading.trim()
      || section.body.some((paragraph) => paragraph.trim())
    ))

  return (
    <div className="space-y-10">
      {sections.map(({ section, originalIndex }) => (
        <section key={originalIndex} className="note-section">
          <p
            data-editable={`sections.${originalIndex}.eyebrow`}
            data-placeholder="Optional label"
            className="site-label mb-3 min-h-[1em]"
          >
            {section.eyebrow}
          </p>
          <h2
            data-editable={`sections.${originalIndex}.heading`}
            data-placeholder="Section heading"
            className="site-section-title mb-4 min-h-[1em]"
          >
            {section.heading}
          </h2>
          <div className="space-y-4">
            {section.body.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                data-editable={`sections.${originalIndex}.body.${paragraphIndex}`}
                data-placeholder="Write a paragraph, or leave this blank"
                className="site-body min-h-[1em]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default function NotePage({ slug }) {
  const note = getNoteBySlug(slug)
  const isDraft = note.status === 'draft'
  const markdownUrl = `/notes/${note.slug}.md`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    dateModified: note.date,
    author: { '@type': 'Person', name: 'Matt Livingston' },
    publisher: {
      '@type': 'Organization',
      name: 'Botworks Agency',
      url: 'https://botworksagency.com',
    },
    mainEntityOfPage: note.canonical,
  }

  return (
    <>
      <SiteHead
        title={`${note.title} | Botworks`}
        description={note.description}
        path={`/notes/${note.slug}`}
        type="article"
        noindex={isDraft}
      />
      {!isDraft && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <NotesEditor slug={note.slug} />
        <Nav />
        <main>
          <article className="mx-auto max-w-3xl px-6 pb-12 pt-10 sm:px-8 sm:pt-16">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <Link href="/notes" className="site-link">Notes</Link>
              <span aria-hidden="true" className="text-copy/40">·</span>
              <span className="text-sm text-copy">{note.readingTime}</span>
              {!isDraft && <a href={markdownUrl} className="site-link">Markdown version</a>}
              {isDraft && (
                <span className="rounded-full border border-[#f2b84b]/50 bg-[#f2b84b]/18 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a4d00]">
                  Unpublished draft
                </span>
              )}
            </div>

            <p className="site-label mb-4 text-copy">{note.type}</p>
            <h1 data-editable="title" data-placeholder="Note title" className="site-page-title mb-5 min-h-[1em]">
              {note.title}
            </h1>
            <div className="note-editor-only mb-5 rounded-lg border border-line bg-white/70 p-4">
              <p className="site-label mb-2 text-copy">Search and sharing description</p>
              <p data-editable="description" data-placeholder="One sentence used in search results and shared links" className="site-supporting min-h-[1em]">
                {note.description}
              </p>
            </div>
            <p data-editable="summary" data-placeholder="Opening summary" className="site-lede mb-10 min-h-[1em]">
              {note.summary}
            </p>

            {note.layout === 'standard' ? <ArticleSections note={note} /> : <DecisionNote note={note} />}

            <section className="hairline-card mt-12 rounded-lg bg-white/50 p-6">
              <p className="site-label mb-3 text-copy">A useful next question</p>
              <h2 data-editable="cta.heading" data-placeholder="Closing heading" className="site-item-title mb-3 min-h-[1em]">
                {note.cta.heading}
              </h2>
              <p data-editable="cta.body" data-placeholder="Closing thought" className="site-body mb-5 min-h-[1em]">
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

export function getStaticPaths() {
  return {
    paths: notes.map((note) => ({ params: { slug: note.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}
