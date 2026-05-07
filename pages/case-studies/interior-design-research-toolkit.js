import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function InteriorDesignResearchToolkit() {
  return (
    <>
      <Head>
        <title>Interior design research toolkit &mdash; Botworks Agency</title>
        <meta name="description" content="Three tools that turn public real-estate data into a designer's pre-pitch homework: reference photos, listing-price sanity checks, and neighborhood comps." />
        <meta property="og:title" content="Interior design research toolkit — Botworks Agency" />
        <meta property="og:description" content="Three tools, one workflow, for an interior design studio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-3xl px-8 py-12">

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            <Link href="/work" className="hover:text-indigo-600 transition-colors">&larr; Work</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span>Case study</span>
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-3">
            A research toolkit for an interior design studio.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Three tools that turn public real-estate data into a designer&apos;s pre-pitch homework.
          </p>

          {/* FRAMING */}
          <section className="mb-10">
            <p className="text-base text-gray-600 leading-relaxed">
              Designers spend real time researching the homes they&apos;re about to walk into &mdash; pulling reference photos, sanity-checking listing prices, understanding what the market thinks a home is worth before the budget conversation starts. We built three tools, end-to-end, that compress that research into minutes. They&apos;re free to download and use; they doubled as proof we can ship working software in the corners of a workflow most agencies won&apos;t touch.
            </p>
          </section>

          {/* THREE TOOLS */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Three tools, one workflow</h2>

            <div className="space-y-8">
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">Tool 1</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <Link href="/skills/real-estate-photo-scraper" className="hover:text-indigo-600 transition-colors">
                    Listing photo scraper
                  </Link>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  Pulls every photo from a real-estate listing across the major US sites in one shot &mdash; for reference boards, before-and-afters, or briefing files.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-700">Designer use:</span> assemble a visual brief on a property before the client meeting without manually saving 40 photos.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">Tool 2</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <Link href="/skills/redfin-estimate-accuracy" className="hover:text-indigo-600 transition-colors">
                    Estimate accuracy checker (active listings)
                  </Link>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  For a home currently for sale, walks the AVM&apos;s own estimate history and recent comps to score how trustworthy that estimate is.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-700">Designer use:</span> before pitching scope, know whether the price the client is anchored to is defensible.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">Tool 3</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <Link href="/skills/redfin-estimate-checker" className="hover:text-indigo-600 transition-colors">
                    Estimate checker (sold homes)
                  </Link>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  For a home that already sold, back-calculates what the AVM thought the day it went under contract and compares it to the actual sale.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-700">Designer use:</span> sanity-check what comparable homes in the neighborhood actually closed at &mdash; useful when the client is benchmarking budget.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT THIS PROVES */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What this proves we can do</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The same four layers from the <Link href="/case-studies/hvac-rebate-automation" className="text-indigo-600 underline hover:text-indigo-800">HVAC case study</Link> show up here at smaller scale: an <span className="font-semibold text-gray-700">application</span> surface (a Claude in Chrome workflow), <span className="font-semibold text-gray-700">classification</span> (which comp to trust), <span className="font-semibold text-gray-700">automation</span> (driving the listing site to extract the right data), and <span className="font-semibold text-gray-700">generation</span> (a clean output the designer can show a client). Different workflow, same toolkit.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Want a research toolkit shaped for your studio?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me what your team researches before every project &mdash; the patterns, the time sinks, the things that should be one click. I&apos;ll tell you what&apos;s buildable.
              </p>
            </div>
            <Link href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors">
              Let&apos;s talk
            </Link>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}
