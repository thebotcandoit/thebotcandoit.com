import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function WorkflowWorkbench() {
  const runs = [
    ['Owner hunch', 'AI useful here?', 'reviewing'],
    ['Bad portal', 'Job #52065 packet', 'ready'],
    ['Field visit', 'Spanish crew task', 'queued'],
  ]

  return (
    <div className="animate-rise animate-delay-1 hairline-card min-w-0 w-full max-w-[20rem] sm:max-w-full overflow-hidden rounded-lg bg-[#12131a] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-sm font-semibold">Botworks workbench</p>
          <p className="text-xs text-white/45">messy workflow → useful fix</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/65">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2f9e73]" />
          live
        </div>
      </div>

      <div className="space-y-2.5">
        {runs.map(([from, to, status]) => (
          <div key={from} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-2 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-white/38">
              <span className="truncate">{from}</span>
              <span className="hidden shrink-0 text-[#f2b84b] sm:inline">{status}</span>
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#5145f5]" />
              <div className="handoff-line h-px min-w-0 flex-1 bg-white/15" />
              <div className="max-w-[44%] truncate rounded-md bg-[#f7f3ea] px-2.5 py-1 font-display text-xs font-semibold text-[#12131a]">
                {to}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
        <div className="rounded-md bg-white/[0.06] px-2 py-2">
          <p className="font-display text-[#2f9e73]">AI fits</p>
          <p className="mt-0.5 text-white/38">teach/use</p>
        </div>
        <div className="rounded-md bg-white/[0.06] px-2 py-2">
          <p className="font-display text-[#f2b84b]">Automate</p>
          <p className="mt-0.5 text-white/38">connect</p>
        </div>
        <div className="rounded-md bg-white/[0.06] px-2 py-2">
          <p className="font-display text-white">Build</p>
          <p className="mt-0.5 text-white/38">own it</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Botworks Agency &mdash; Practical AI and workflow systems for SMBs</title>
        <meta name="description" content="Practical AI and custom workflow systems for SMB owners. No slide decks, no long onboarding, and no hostage software." />
        <meta property="og:title" content="Botworks Agency — Practical AI and workflow systems for SMBs" />
        <meta property="og:description" content="AI when it helps. Custom software when it matters. Operational judgment either way." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen paper-grid">
        <Nav />
        <main>

          {/* HERO */}
          <section className="max-w-6xl overflow-hidden px-6 sm:px-8 pt-16 pb-14">
            <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1.02fr)_420px] gap-10 lg:gap-14 items-center">
              <div className="animate-rise min-w-0 max-w-[20rem] sm:max-w-none">
                <p className="mb-5 inline-flex max-w-full rounded-full border border-[#ded6c7] bg-[#fffaf0]/70 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#626b7a]">
                  Built from the mess, not the pitch deck
                </p>
                <h1 className="font-display max-w-[20rem] sm:max-w-none text-[2rem] sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#12131a] leading-[1.03] sm:leading-[0.94] mb-6">
                  Practical AI and custom workflow systems for SMBs{' '}
                  <span className="text-[#5145f5]">with messy operations.</span>
                </h1>
                <p className="font-display max-w-[20rem] sm:max-w-2xl text-[1.2rem] sm:text-2xl text-[#12131a] leading-snug mb-5">
                  AI when it helps. Custom software when it matters. Operational judgment either way.
                </p>
                <p className="max-w-[20rem] sm:max-w-xl text-base text-[#626b7a] leading-relaxed mb-8">
                  I help owners figure out where AI is actually useful: the work Claude or Codex can improve today, the handoffs that can be automated, and the workflows specific enough to deserve custom software the company owns.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact" className="bg-[#12131a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#5145f5] transition-colors">
                    Let&apos;s talk
                  </Link>
                  <a href="#case-studies" className="border border-[#ded6c7] bg-[#fffaf0]/70 text-[#12131a] px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[#5145f5] hover:text-[#5145f5] transition-colors">
                    See a case study &rarr;
                  </a>
                </div>
                <p className="text-sm text-[#8a8171] mt-6 max-w-lg">
                  No slide decks. No long onboarding. Usually one real conversation and we&apos;re off to the races.
                </p>
              </div>
              <WorkflowWorkbench />
            </div>
          </section>

          {/* POINT OF VIEW */}
          <section className="px-6 sm:px-8 pb-14 max-w-5xl">
            <div className="hairline-card rounded-lg p-6 md:p-8 paper-noise">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">The starting point</p>
                <h2 className="font-display text-3xl font-bold text-[#12131a] mb-3">Usually an owner has a hunch that something should be done with AI.</h2>
                <p className="text-base text-[#626b7a] leading-relaxed mb-4">
                  That is a good starting point. The useful question is not &ldquo;can tech do this?&rdquo; It is &ldquo;is this the biggest win right now?&rdquo;
                </p>
                <p className="text-base text-[#626b7a] leading-relaxed">
                  The answer might be teaching the team to use existing AI tools better, connecting two systems, or building a small internal app around the work still living in spreadsheets, portals, inboxes, texts, and one person&apos;s memory.
                </p>
              </div>
            </div>
          </section>

          {/* CAPABILITY STRIP */}
          <section className="px-6 sm:px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">How we help</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="lift hairline-card rounded-lg bg-[#fffaf0] p-6 md:translate-y-4">
                <p className="text-xs font-semibold text-[#5145f5] uppercase tracking-[0.18em] mb-3">AI workflow review</p>
                <h3 className="font-display text-lg font-bold text-[#12131a] mb-2">Find where AI belongs.</h3>
                <p className="text-sm text-[#626b7a] leading-snug">
                  Help employees use Claude, Codex, or the tools they already have better. Just as important: call out the places AI should not touch.
                </p>
              </div>
              <div className="lift hairline-card rounded-lg bg-[#12131a] p-6 text-white">
                <p className="text-xs font-semibold text-[#f2b84b] uppercase tracking-[0.18em] mb-3">Automations between systems</p>
                <h3 className="font-display text-lg font-bold text-white mb-2">Stop paying people to copy and chase.</h3>
                <p className="text-sm text-white/58 leading-snug">
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
          <section className="px-6 sm:px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-4">Who this is for</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/for-searchers"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#5145f5] mb-2">Searchers and acquisition-backed SMBs</p>
                <h2 className="font-display text-xl font-bold text-[#12131a] mb-2">A practical AI pass for the 100-day plan.</h2>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  Find the workflows where AI is useful now, where the team just needs better habits, and where custom software is worth building.
                </p>
                <span className="text-sm font-semibold text-[#5145f5]">See how it works &rarr;</span>
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
                <span className="text-sm font-semibold text-[#5145f5]">See examples &rarr;</span>
              </Link>
            </div>
          </section>

          {/* WORKFLOW EXAMPLES */}
          <section className="px-6 sm:px-8 pb-14 max-w-5xl">
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
          <section id="case-studies" className="px-6 sm:px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">Case studies</p>
            <h2 className="font-display text-3xl font-bold text-[#12131a] mb-6">Real work, in production</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/case-studies/hvac-rebate-automation"
                className="lift hairline-card rounded-lg p-6 bg-[#fffaf0] cursor-pointer block"
              >
                <p className="text-sm font-semibold text-[#5145f5] mb-2">HVAC contractor</p>
                <h3 className="font-display text-xl font-bold text-[#12131a] mb-2">Rebate program filings: 8 hours a week reclaimed.</h3>
                <p className="text-sm text-[#626b7a] leading-snug mb-4">
                  The office manager used to spend hours moving rebate data between bad systems. Now she pastes a job number and gets a mail-ready packet.
                </p>
                <span className="text-sm font-semibold text-[#5145f5]">
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
                <span className="text-sm font-semibold text-[#5145f5]">
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
                <span className="text-sm font-semibold text-[#5145f5]">
                  Read the case study &rarr;
                </span>
              </Link>
            </div>
          </section>

          {/* WHAT'S NEXT */}
          <section className="px-6 sm:px-8 pb-14 max-w-5xl">
            <p className="text-xs font-semibold text-[#8a8171] uppercase tracking-[0.18em] mb-2">What&apos;s next</p>
            <h2 className="font-display text-3xl font-bold text-[#12131a] mb-6">In the pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="hairline-card rounded-lg p-6 bg-[#fffaf0] block">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm font-semibold text-[#5145f5]">Chicago HVAC contractor</p>
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
          <section className="px-6 sm:px-8 pb-14 max-w-4xl">
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
          <section className="mx-6 sm:mx-8 mb-16 bg-[#12131a] rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Have a workflow that should be easier?</h2>
              <p className="text-white/58 text-sm leading-relaxed max-w-lg">
                Tell me where the work gets copied, chased, retyped, or remembered by one person. I&apos;ll help sort whether the answer is AI, automation, custom software, or nothing at all. First few months of this, so pricing is gentle.
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
