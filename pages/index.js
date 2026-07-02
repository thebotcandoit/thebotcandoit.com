import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const aiSecondOpinionPrompt = `I run or help operate this business:

[Describe the company, team size, customers, and the operational workflow that feels messy.]

I am looking at Botworks Agency: https://botworksagency.com

Botworks says it helps SMB operators figure out where AI is actually useful, where existing tools or better employee workflows are enough, where automations between systems can remove copy/paste work, and where custom owned software is worth building. They emphasize no slide decks, fast working prototypes, operational judgment, monitoring/documentation, and client ownership of code, data, infrastructure, and docs.

Please act as an operator-advisor, not a vendor or generic AI strategist. Keep the answer practical and under 900 words. Do not write a broad "AI transformation" memo. Do not include citations unless you actually browsed current sources.

Based on my business context:

1. What are the 3-5 workflows Botworks should inspect first?
2. For each workflow, is the likely answer existing AI tools, automation between systems, custom software, or "do not build yet"?
3. Which one workflow is the best small first project, and why?
4. What would make this a bad fit?`

function AskAiSection() {
  const [copied, setCopied] = useState(false)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(aiSecondOpinionPrompt)
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
            <p className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-4">Ask your own AI</p>
            <h2 className="font-display text-2xl sm:text-3xl leading-tight font-bold text-white mb-3">
              Don&apos;t trust the pitch. <span className="block">Test the fit.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/62 leading-relaxed mb-5">
              Copy this into ChatGPT, Claude, Gemini, or whatever you already use. Add a few details about your business and turn the vague &ldquo;should we do something with AI?&rdquo; hunch into a concrete first-call brief.
            </p>
            <button
              type="button"
              onClick={copyPrompt}
              className="rounded-lg bg-[#f2b84b] px-5 py-2.5 text-sm font-semibold text-[#12131a] transition-colors hover:bg-white"
            >
              {copied ? 'Prompt copied' : 'Copy the AI prompt'}
            </button>
          </div>
        </div>
        <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.05] p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-display text-sm font-semibold text-white">Second-opinion prompt</p>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/50">paste into any LLM</span>
          </div>
          <textarea
            readOnly
            value={aiSecondOpinionPrompt}
            className="h-52 sm:h-80 w-full resize-none rounded-md border-0 bg-[#0d0e13] p-4 font-mono text-xs leading-relaxed text-white/58 outline-none"
          />
        </div>
      </div>
    </section>
  )
}

function HeroWorkbench() {
  const rows = [
    ['Portal copy/paste', 'owned app', 'live'],
    ['Field photos', 'review queue', 'ready'],
    ['Office follow-up', 'crew tasks', 'sent'],
  ]

  return (
    <div className="relative mx-auto w-full max-w-md rounded-lg border border-white/10 bg-[#181a22] p-4 shadow-2xl shadow-black/30">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2b84b]">Botworks surface</p>
          <p className="mt-1 text-sm font-semibold text-white">Operations handoff</p>
        </div>
        <span className="rounded-md border border-[#2f9e73]/40 bg-[#2f9e73]/15 px-2.5 py-1 text-[11px] font-semibold text-[#74d2aa]">owned</span>
      </div>
      <div className="space-y-2">
        {rows.map(([from, to, state]) => (
          <div key={from} className="grid grid-cols-[1fr_auto] gap-3 rounded-md border border-white/8 bg-white/[0.045] p-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-white">{from}</p>
              <div className="my-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="handoff-line h-full w-full rounded-full bg-[#2f9e73]/45" />
              </div>
              <p className="truncate text-xs text-white/52">{to}</p>
            </div>
            <div className="flex items-center">
              <span className="rounded-md bg-[#f2b84b] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#12131a]">{state}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['code', 'data', 'docs'].map(item => (
          <div key={item} className="rounded-md border border-white/8 bg-[#0d0e13] px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Botworks Agency &mdash; Custom workflow software SMBs own</title>
        <meta name="description" content="Custom workflow software and practical AI for SMB operators. Built around the messy work your team already does, with ownership of code, data, infrastructure, and docs." />
        <meta property="og:title" content="Botworks Agency — Custom workflow software SMBs own" />
        <meta property="og:description" content="Practical AI when it helps. Owned workflow software when it matters. Operational judgment either way." />
        <meta property="og:url" content="https://botworksagency.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://botworksagency.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen overflow-x-hidden bg-[#f7f3ea]">
        <Nav tone="dark" />
        <main>

          {/* HERO */}
          <section className="relative overflow-hidden bg-[#12131a] text-white">
            <div className="absolute inset-0 opacity-[0.08] paper-grid" />
            <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-12 pt-9 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
              <div className="animate-rise min-w-0 lg:order-2">
                <HeroWorkbench />
              </div>
              <div className="animate-rise animate-delay-1 min-w-0 lg:order-1">
                <p className="mb-4 inline-flex rounded-md border border-[#2f9e73]/40 bg-[#2f9e73]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#74d2aa]">
                  Custom software you keep
                </p>
                <h1 className="font-display max-w-xl text-4xl font-bold leading-[0.98] tracking-tight text-[#fffaf0] sm:text-6xl lg:text-7xl">
                  Workflow software your business owns.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/68 sm:text-lg">
                  Turn the work trapped in portals, spreadsheets, inboxes, and memory into practical systems built around how your business actually runs.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/54">
                  <span className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1.5">AI when useful</span>
                  <span className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1.5">No lock-in</span>
                  <span className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1.5">Code + data + docs</span>
                </div>
                <div className="mt-7 flex gap-3">
                  <Link href="/contact" className="bg-[#2f9e73] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#f2b84b] hover:text-[#12131a] transition-colors">
                    Start a conversation
                  </Link>
                  <a href="#case-studies" className="border border-white/14 bg-white/[0.04] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:border-[#2f9e73] hover:text-[#74d2aa] transition-colors">
                    See work
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* POINT OF VIEW */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] py-14 max-w-5xl">
            <div className="hairline-card rounded-lg p-6 md:p-8 paper-noise">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">The starting point</p>
                <h2 className="font-display text-3xl font-bold text-[#12131a] mb-3">Most owners already know the annoying part.</h2>
                <p className="text-base text-[#626b7a] leading-relaxed mb-4">
                  It is the thing that lives in texts, memory, screenshots, bad portals, duplicate spreadsheets, and the office manager&apos;s head.
                </p>
                <p className="text-base text-[#626b7a] leading-relaxed">
                  The useful question is not &ldquo;can AI do this?&rdquo; It is &ldquo;what should we fix first, should we build or buy, and what will the business own when we are done?&rdquo;
                </p>
              </div>
            </div>
          </section>

          <AskAiSection />

          {/* CAPABILITY STRIP */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">How we help</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6 md:translate-y-4">
                <p className="text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em] mb-3">AI workflow review</p>
                <h3 className="font-display text-lg font-bold text-[#12131a] mb-2">Find where AI belongs.</h3>
                <p className="text-sm text-[#626b7a] leading-snug">
                  Help employees use Claude, Codex, or the tools they already have better. Just as important: call out the places AI should not touch.
                </p>
              </div>
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6">
                <p className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-3">Automations between systems</p>
                <h3 className="font-display text-lg font-bold text-[#12131a] mb-2">Stop paying people to copy and chase.</h3>
                <p className="text-sm text-[#626b7a] leading-snug">
                  Move data, documents, updates, and decisions between tools without copy-paste.
                </p>
              </div>
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6 md:translate-y-8">
                <p className="text-xs font-semibold text-[#2f9e73] uppercase tracking-[0.18em] mb-3">Custom owned software</p>
                <h3 className="font-display text-lg font-bold text-[#12131a] mb-2">Build what is too specific to rent.</h3>
                <p className="text-sm text-[#626b7a] leading-snug">
                  Build the workflows that are too specific or too important to leave in spreadsheets, bad portals, inboxes, or memory.
                </p>
              </div>
            </div>
          </section>

          {/* AUDIENCES */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">Who this is for</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/for-searchers"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#2f9e73] mb-2">Searchers and acquisition-backed SMBs</p>
                <h2 className="font-display text-xl font-bold text-[#12131a] mb-2">A practical AI pass for the 100-day plan.</h2>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  Find the workflows where AI is useful now, where the team just needs better habits, and where custom software is worth building.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">See how it works &rarr;</span>
              </Link>
              <Link
                href="/for-service-businesses"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#2f9e73] mb-2">Service businesses</p>
                <h2 className="font-display text-xl font-bold text-[#12131a] mb-2">Office and field workflows that still run on handoffs.</h2>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  HVAC, landscaping, cleaning, trades, and field-service teams where work gets copied, chased, retyped, and remembered by the person who cannot go on vacation.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">See examples &rarr;</span>
              </Link>
            </div>
          </section>

          {/* WORKFLOW EXAMPLES */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">Where this fits</p>
            <div className="rounded-lg p-6 md:p-8 bg-[#12131a] text-white">
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-bold text-white mb-3">The best first projects are weirdly ordinary.</h2>
                <p className="text-base text-white/62 leading-relaxed mb-6">
                  Rebate paperwork, field handoffs, customer intake, spreadsheet reconciliation, estimate follow-up, permits, warranty packets, status chasing, exception queues, manager-only memory. The first question is not &ldquo;what should we build?&rdquo; It is &ldquo;where is the work leaking time?&rdquo;
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {['rebates', 'permits', 'bad portals', 'inbox handoffs', 'one-person memory'].map(item => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/72">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/workflow-examples" className="text-sm font-semibold text-[#f2b84b] hover:text-white transition-colors">
                  See workflow examples &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section id="case-studies" className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">Case studies</p>
            <h2 className="font-display text-3xl font-bold text-[#12131a] mb-6">Real work, in production</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/case-studies/hvac-rebate-automation"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#2f9e73] mb-2">HVAC contractor</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">Rebate program filings: 8 hours a week reclaimed.</h3>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  The office manager used to spend hours moving rebate data between bad systems. Now she pastes a job number and gets a mail-ready packet.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">
                  Read the case study &rarr;
                </span>
              </Link>
              <Link
                href="/case-studies/field-visit-capture"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block md:translate-y-5"
              >
                <p className="text-sm font-semibold text-[#2f9e73] mb-2">Commercial landscaping</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">Field-visit capture: a structured record for every property visit.</h3>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  Account managers needed one clean place to capture what they saw in the field, then turn it into office review, translation, follow-up, and crew tasks.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">
                  Read the case study &rarr;
                </span>
              </Link>
              <Link
                href="/case-studies/interior-design-research-toolkit"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#f2b84b] mb-2">Interior design studio</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">AI-assisted research: better prep without a big custom app.</h3>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  Practical AI habits and lightweight tools that compress a designer&apos;s pre-pitch homework &mdash; reference photos, listing-price sanity checks, neighborhood comps &mdash; from hours to minutes.
                </p>
                <span className="text-sm font-semibold text-[#2f9e73]">
                  Read the case study &rarr;
                </span>
              </Link>
            </div>
          </section>

          {/* WHAT'S NEXT */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">What&apos;s next</p>
            <h2 className="font-display text-3xl font-bold text-[#12131a] mb-6">In the pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="hairline-card rounded-lg p-6 bg-[#fffaf0] block">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-semibold text-[#2f9e73]">Chicago HVAC contractor</p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a4d00] bg-[#f2b84b]/20 border border-[#f2b84b]/50 rounded-full px-2 py-0.5">Upcoming</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">Front-office automation: one view of the day&apos;s work.</h3>
                <p className="text-sm text-[#626b7a] leading-snug">
                  Technicians ping Slack to grab their next job; Housecall Pro APIs feed a single source of truth for upcoming work; office and field see the same view in real time. Foundation for agent-driven inventory and scheduling decisions later.
                </p>
              </div>
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
                <h2 className="font-display text-2xl font-bold text-[#12131a] mb-2">Hi, I&apos;m Matt.</h2>
                <p className="text-base text-[#626b7a] leading-relaxed mb-2">
                  15 years as a technical product manager in software, most recently VP of Product Management. I shipped to engineering teams that ship every day; now I bring that bar to small businesses that don&apos;t have engineering teams of their own.
                </p>
                <p className="text-base text-[#626b7a] leading-relaxed">
                  I was searching in Miami and realized my skills were probably a better fit for an agency: sitting with owners, finding the operational mess, and turning the right piece of it into something that works.
                </p>
                <p className="text-base text-[#626b7a] leading-relaxed mt-2">
                  If it is custom software, the client owns all of it. I am also building the handoff so employees and LLM agents can keep running it if we ever part ways. No hidden fees. No hostage software.
                </p>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] max-w-5xl mb-16 bg-[#12131a] rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. I&apos;ll help sort whether the answer is AI, automations, or custom software.
              </p>
            </div>
            <Link href="/contact" className="bg-[#f2b84b] text-[#12131a] px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap hover:bg-white transition-colors">
              Let&apos;s talk
            </Link>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
