import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HomepageEditor from '../components/HomepageEditor'
import homepageFile from '../data/homepage.json'

const homepage = homepageFile.published

function AskAiSection({ content }) {
  const [copied, setCopied] = useState(false)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(content.prompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
      <div className="grid min-w-0 overflow-hidden grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5 rounded-lg bg-[#12131a] p-6 md:p-8 text-white">
        <div className="min-w-0">
          <div>
            <p data-home-editable="askAi.eyebrow" className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-4">{content.eyebrow}</p>
            <h2 className="font-display text-2xl sm:text-3xl leading-tight font-bold text-white mb-3">
              <span data-home-editable="askAi.heading">{content.heading}</span>
            </h2>
            <p data-home-editable="askAi.body" className="text-sm sm:text-base text-white/62 leading-relaxed mb-5">{content.body}</p>
            <button
              type="button"
              onClick={copyPrompt}
              className="rounded-lg bg-[#f2b84b] px-5 py-2.5 text-sm font-semibold text-[#12131a] transition-colors hover:bg-white"
            >
              {copied ? 'Prompt copied' : <span data-home-editable="askAi.button">{content.button}</span>}
            </button>
          </div>
        </div>
        <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.05] p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p data-home-editable="askAi.panelTitle" className="font-display text-sm font-semibold text-white">{content.panelTitle}</p>
            <span data-home-editable="askAi.panelLabel" className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/50">{content.panelLabel}</span>
          </div>
          <textarea
            readOnly
            data-home-editable="askAi.prompt"
            value={content.prompt}
            className="h-80 w-full resize-none rounded-md border-0 bg-[#0d0e13] p-4 font-mono text-xs leading-relaxed text-white/58 outline-none"
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{homepage.meta.title}</title>
        <meta name="description" content={homepage.meta.description} />
        <meta property="og:title" content={homepage.meta.ogTitle} />
        <meta property="og:description" content={homepage.meta.ogDescription} />
        <meta property="og:url" content="https://botworksagency.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://botworksagency.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <HomepageEditor />
        <Nav />
        <main>

          {/* HERO */}
          <section className="mx-auto max-w-5xl overflow-hidden px-6 sm:px-8 pt-8 sm:pt-16 pb-14 sm:pb-18">
            <div className="animate-rise min-w-0">
              <p className="mb-4 sm:mb-5 inline-flex rounded-full border border-[#2f9e73]/25 bg-[#2f9e73]/12 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1f7a57]">
                <span data-home-editable="hero.eyebrow">{homepage.hero.eyebrow}</span>
              </p>
              <h1 className="font-display max-w-4xl text-[2.55rem] sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#12131a] leading-[0.97] mb-4 sm:mb-5">
                <span data-home-editable="hero.heading">{homepage.hero.heading}</span>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-[#4f5968] leading-relaxed mb-5 sm:mb-6">
                <span data-home-editable="hero.body">{homepage.hero.body}</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-6 max-w-4xl">
                <div className="hairline-card rounded-lg bg-[#fffaf0]/80 p-4 sm:p-5">
                  <h2 data-home-editable="hero.cards.0.heading" className="text-base font-bold text-[#12131a] mb-2">{homepage.hero.cards[0].heading}</h2>
                  <p data-home-editable="hero.cards.0.body" className="text-sm text-[#596474] leading-relaxed">{homepage.hero.cards[0].body}</p>
                </div>
                <div className="hairline-card rounded-lg bg-[#fffaf0]/80 p-4 sm:p-5">
                  <h2 data-home-editable="hero.cards.1.heading" className="text-base font-bold text-[#12131a] mb-2">{homepage.hero.cards[1].heading}</h2>
                  <p data-home-editable="hero.cards.1.body" className="text-sm text-[#596474] leading-relaxed">{homepage.hero.cards[1].body}</p>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="bg-[#12131a] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#2f9e73] transition-colors">
                  <span data-home-editable="hero.primaryCta">{homepage.hero.primaryCta}</span>
                </Link>
                <a href="#case-studies" className="border border-[#ded6c7] bg-[#fffaf0]/70 text-[#12131a] px-5 py-3 rounded-lg text-sm font-semibold hover:border-[#2f9e73] hover:text-[#2f9e73] transition-colors">
                  <span data-home-editable="hero.secondaryCta">{homepage.hero.secondaryCta}</span>
                </a>
              </div>
            </div>
          </section>

          {/* POINT OF VIEW */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <div className="hairline-card rounded-lg p-6 md:p-8 paper-noise">
              <div className="max-w-3xl">
                <p data-home-editable="startingPoint.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">{homepage.startingPoint.eyebrow}</p>
                <h2 data-home-editable="startingPoint.heading" className="font-display text-3xl font-bold text-[#12131a] mb-3">{homepage.startingPoint.heading}</h2>
                <p data-home-editable="startingPoint.paragraphs.0" className="text-base text-[#626b7a] leading-relaxed mb-4">{homepage.startingPoint.paragraphs[0]}</p>
                <p data-home-editable="startingPoint.paragraphs.1" className="text-base text-[#626b7a] leading-relaxed">{homepage.startingPoint.paragraphs[1]}</p>
              </div>
            </div>
          </section>

          <AskAiSection content={homepage.askAi} />

          {/* PRODUCTION STANDARD */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <div className="mb-6 max-w-3xl">
              <p data-home-editable="shipping.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-3">{homepage.shipping.eyebrow}</p>
              <h2 data-home-editable="shipping.heading" className="font-display text-3xl font-bold text-[#12131a] mb-3">{homepage.shipping.heading}</h2>
              <p data-home-editable="shipping.body" className="text-base text-[#626b7a] leading-relaxed">{homepage.shipping.body}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {homepage.shipping.cards.map((card, index) => (
                <div key={card.heading} className="hairline-card rounded-lg bg-[#fffaf0] p-5">
                  <h3 data-home-editable={`shipping.cards.${index}.heading`} className="font-display text-lg font-bold text-[#12131a] mb-2">{card.heading}</h3>
                  <p data-home-editable={`shipping.cards.${index}.body`} className="text-sm text-[#626b7a] leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* REAL SYSTEM FLOWS */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p data-home-editable="flows.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">{homepage.flows.eyebrow}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Link href="/case-studies/hvac-rebate-automation" className="lift rounded-lg bg-[#12131a] p-6 text-white block">
                <p data-home-editable="flows.items.0.eyebrow" className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-3">{homepage.flows.items[0].eyebrow}</p>
                <h2 data-home-editable="flows.items.0.heading" className="font-display text-2xl font-bold mb-4">{homepage.flows.items[0].heading}</h2>
                <p data-home-editable="flows.items.0.body" className="text-sm text-white/64 leading-relaxed mb-5">{homepage.flows.items[0].body}</p>
                <span data-home-editable="flows.items.0.cta" className="text-sm font-semibold text-[#f2b84b]">{homepage.flows.items[0].cta}</span>
              </Link>
              <Link href="/case-studies/field-visit-capture" className="lift rounded-lg bg-[#12131a] p-6 text-white block">
                <p data-home-editable="flows.items.1.eyebrow" className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-3">{homepage.flows.items[1].eyebrow}</p>
                <h2 data-home-editable="flows.items.1.heading" className="font-display text-2xl font-bold mb-4">{homepage.flows.items[1].heading}</h2>
                <p data-home-editable="flows.items.1.body" className="text-sm text-white/64 leading-relaxed mb-5">{homepage.flows.items[1].body}</p>
                <span data-home-editable="flows.items.1.cta" className="text-sm font-semibold text-[#f2b84b]">{homepage.flows.items[1].cta}</span>
              </Link>
            </div>
          </section>

          {/* NOTES */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <div className="hairline-card rounded-lg bg-[#fffaf0] p-6 md:p-8">
              <p data-home-editable="notes.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-3">{homepage.notes.eyebrow}</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                <div className="max-w-2xl">
                  <h2 data-home-editable="notes.heading" className="font-display text-3xl font-bold text-[#12131a] mb-3">{homepage.notes.heading}</h2>
                  <p data-home-editable="notes.body" className="text-base text-[#626b7a] leading-relaxed">{homepage.notes.body}</p>
                </div>
                <Link href="/notes" className="inline-flex rounded-lg bg-[#12131a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f9e73]">
                  <span data-home-editable="notes.cta">{homepage.notes.cta}</span>
                </Link>
              </div>
            </div>
          </section>

          {/* CAPABILITY STRIP */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p data-home-editable="capabilities.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">{homepage.capabilities.eyebrow}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6 md:translate-y-4">
                <p data-home-editable="capabilities.items.0.eyebrow" className="text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em] mb-3">{homepage.capabilities.items[0].eyebrow}</p>
                <h3 data-home-editable="capabilities.items.0.heading" className="font-display text-lg font-bold text-[#12131a] mb-2">{homepage.capabilities.items[0].heading}</h3>
                <p data-home-editable="capabilities.items.0.body" className="text-sm text-[#626b7a] leading-snug">{homepage.capabilities.items[0].body}</p>
              </div>
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6">
                <p data-home-editable="capabilities.items.1.eyebrow" className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-3">{homepage.capabilities.items[1].eyebrow}</p>
                <h3 data-home-editable="capabilities.items.1.heading" className="font-display text-lg font-bold text-[#12131a] mb-2">{homepage.capabilities.items[1].heading}</h3>
                <p data-home-editable="capabilities.items.1.body" className="text-sm text-[#626b7a] leading-snug">{homepage.capabilities.items[1].body}</p>
              </div>
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6 md:translate-y-8">
                <p data-home-editable="capabilities.items.2.eyebrow" className="text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em] mb-3">{homepage.capabilities.items[2].eyebrow}</p>
                <h3 data-home-editable="capabilities.items.2.heading" className="font-display text-lg font-bold text-[#12131a] mb-2">{homepage.capabilities.items[2].heading}</h3>
                <p data-home-editable="capabilities.items.2.body" className="text-sm text-[#626b7a] leading-snug">{homepage.capabilities.items[2].body}</p>
              </div>
            </div>
          </section>

          {/* AUDIENCES */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p data-home-editable="audiences.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">{homepage.audiences.eyebrow}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/for-searchers"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p data-home-editable="audiences.items.0.eyebrow" className="text-sm font-semibold text-[#2f9e73] mb-2">{homepage.audiences.items[0].eyebrow}</p>
                <h2 data-home-editable="audiences.items.0.heading" className="font-display text-xl font-bold text-[#12131a] mb-2">{homepage.audiences.items[0].heading}</h2>
                <p data-home-editable="audiences.items.0.body" className="text-sm text-[#626b7a] leading-snug mb-4">{homepage.audiences.items[0].body}</p>
                <span data-home-editable="audiences.items.0.cta" className="text-sm font-semibold text-[#2f9e73]">{homepage.audiences.items[0].cta}</span>
              </Link>
              <Link
                href="/for-service-businesses"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p data-home-editable="audiences.items.1.eyebrow" className="text-sm font-semibold text-[#2f9e73] mb-2">{homepage.audiences.items[1].eyebrow}</p>
                <h2 data-home-editable="audiences.items.1.heading" className="font-display text-xl font-bold text-[#12131a] mb-2">{homepage.audiences.items[1].heading}</h2>
                <p data-home-editable="audiences.items.1.body" className="text-sm text-[#626b7a] leading-snug mb-4">{homepage.audiences.items[1].body}</p>
                <span data-home-editable="audiences.items.1.cta" className="text-sm font-semibold text-[#2f9e73]">{homepage.audiences.items[1].cta}</span>
              </Link>
            </div>
          </section>

          {/* WORKFLOW EXAMPLES */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p data-home-editable="workflowExamples.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">{homepage.workflowExamples.eyebrow}</p>
            <div className="rounded-lg p-6 md:p-8 bg-[#12131a] text-white">
              <div className="max-w-3xl">
                <h2 data-home-editable="workflowExamples.heading" className="font-display text-3xl font-bold text-white mb-3">{homepage.workflowExamples.heading}</h2>
                <p data-home-editable="workflowExamples.body" className="text-base text-white/62 leading-relaxed mb-6">{homepage.workflowExamples.body}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {homepage.workflowExamples.tags.map((item, index) => (
                    <span key={item} data-home-editable={`workflowExamples.tags.${index}`} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/72">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/workflow-examples" className="text-sm font-semibold text-[#f2b84b] hover:text-white transition-colors">
                  <span data-home-editable="workflowExamples.cta">{homepage.workflowExamples.cta}</span>
                </Link>
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section id="case-studies" className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p data-home-editable="caseStudies.eyebrow" className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">{homepage.caseStudies.eyebrow}</p>
            <h2 data-home-editable="caseStudies.heading" className="font-display text-3xl font-bold text-[#12131a] mb-6">{homepage.caseStudies.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/case-studies/hvac-rebate-automation"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p data-home-editable="caseStudies.items.0.eyebrow" className="text-sm font-semibold text-[#2f9e73] mb-2">{homepage.caseStudies.items[0].eyebrow}</p>
                <h3 data-home-editable="caseStudies.items.0.heading" className="font-display text-xl font-bold text-[#12131a] mb-2">{homepage.caseStudies.items[0].heading}</h3>
                <p data-home-editable="caseStudies.items.0.body" className="text-sm text-[#626b7a] leading-snug mb-4">{homepage.caseStudies.items[0].body}</p>
                <span data-home-editable="caseStudies.items.0.cta" className="text-sm font-semibold text-[#2f9e73]">{homepage.caseStudies.items[0].cta}</span>
              </Link>
              <Link
                href="/case-studies/field-visit-capture"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block md:translate-y-5"
              >
                <p data-home-editable="caseStudies.items.1.eyebrow" className="text-sm font-semibold text-[#2f9e73] mb-2">{homepage.caseStudies.items[1].eyebrow}</p>
                <h3 data-home-editable="caseStudies.items.1.heading" className="font-display text-xl font-bold text-[#12131a] mb-2">{homepage.caseStudies.items[1].heading}</h3>
                <p data-home-editable="caseStudies.items.1.body" className="text-sm text-[#626b7a] leading-snug mb-4">{homepage.caseStudies.items[1].body}</p>
                <span data-home-editable="caseStudies.items.1.cta" className="text-sm font-semibold text-[#2f9e73]">{homepage.caseStudies.items[1].cta}</span>
              </Link>
              <Link
                href="/case-studies/interior-design-research-toolkit"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p data-home-editable="caseStudies.items.2.eyebrow" className="text-sm font-semibold text-[#f2b84b] mb-2">{homepage.caseStudies.items[2].eyebrow}</p>
                <h3 data-home-editable="caseStudies.items.2.heading" className="font-display text-xl font-bold text-[#12131a] mb-2">{homepage.caseStudies.items[2].heading}</h3>
                <p data-home-editable="caseStudies.items.2.body" className="text-sm text-[#626b7a] leading-snug mb-4">{homepage.caseStudies.items[2].body}</p>
                <span data-home-editable="caseStudies.items.2.cta" className="text-sm font-semibold text-[#2f9e73]">{homepage.caseStudies.items[2].cta}</span>
              </Link>
            </div>
          </section>

          {/* ABOUT */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/profil_pic_thebotcandoit_2_march30.jpg"
                alt="Matt Livingston"
                className="w-28 h-28 rounded-lg object-cover flex-shrink-0 bg-[#ebe3d4] hairline-card"
              />
              <div>
                <h2 data-home-editable="about.heading" className="font-display text-2xl font-bold text-[#12131a] mb-2">{homepage.about.heading}</h2>
                <p data-home-editable="about.paragraphs.0" className="text-base text-[#626b7a] leading-relaxed mb-2">{homepage.about.paragraphs[0]}</p>
                <p data-home-editable="about.paragraphs.1" className="text-base text-[#626b7a] leading-relaxed">{homepage.about.paragraphs[1]}</p>
                <p data-home-editable="about.paragraphs.2" className="text-base text-[#626b7a] leading-relaxed mt-2">{homepage.about.paragraphs[2]}</p>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] max-w-5xl mb-16 bg-[#12131a] rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 data-home-editable="bottomCta.heading" className="font-display text-3xl font-bold tracking-tight text-white mb-2">{homepage.bottomCta.heading}</h2>
              <p data-home-editable="bottomCta.body" className="text-white/70 text-sm leading-relaxed max-w-lg">{homepage.bottomCta.body}</p>
            </div>
            <Link href="/contact" className="bg-[#f2b84b] text-[#12131a] px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap hover:bg-white transition-colors">
              <span data-home-editable="bottomCta.cta">{homepage.bottomCta.cta}</span>
            </Link>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
