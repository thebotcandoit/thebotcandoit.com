import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function InteriorDesignResearchToolkit() {
  return (
    <>
      <Head>
        <title>Interior design AI research workflow &mdash; Botworks Agency</title>
        <meta name="description" content="An interior design studio compressed repetitive pre-pitch research with practical AI habits and lightweight tools for photos, valuation context, and neighborhood comps." />
        <meta property="og:title" content="Interior design AI research workflow — Botworks Agency" />
        <meta property="og:description" content="A repetitive research workflow became practical AI guidance plus lightweight tools for an interior design studio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen paper-grid">
        <Nav />
        <main className="max-w-3xl px-8 py-12">

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            <Link href="/work" className="hover:text-indigo-600 transition-colors">&larr; Work</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span>Case study</span>
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-3">
            How an interior design studio compressed repetitive pre-pitch research with practical AI.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Before every project, the same research had to happen again: collect reference photos, sanity-check listing context, and understand the neighborhood before the client conversation. The answer was not a big custom app; it was better AI-assisted research behavior plus a few lightweight tools.
          </p>

          {/* FRAMING */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">The problem</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Designers spent real time researching the homes they were about to walk into. The work was not hard once; it was hard because it repeated. Someone had to pull photos, compare listing context, and build enough market understanding to walk into the first conversation prepared. The real question was not just &ldquo;what should we build?&rdquo; It was &ldquo;how can the team use existing AI tools and smarter habits to do this better?&rdquo;
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">What shipped first</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Botworks shaped the work into a practical AI-assisted research workflow, then added small tools around the repeated steps that still needed structure. The studio did not need a full platform. It needed a better way for existing employees to prepare faster and more consistently.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why off-the-shelf software did not solve it</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The work crossed public listing sites, market context, visual reference gathering, and the studio&apos;s own client-prep habits. Generic design software did not own the research step, and real-estate tools were not built for a designer walking into a budget conversation. The gap was small but persistent, which made lightweight custom tools a better fit than a new platform.
            </p>
          </section>

          {/* THREE TOOLS */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6">AI habits plus lightweight tools</h2>

            <div className="space-y-8">
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">Tool 1</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Listing photo scraper</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  Pulls every photo from a real-estate listing across the major US sites in one shot &mdash; for reference boards, before-and-afters, or briefing files.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-700">Designer use:</span> assemble a visual brief on a property before the client meeting without manually saving 40 photos.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">Tool 2</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Estimate accuracy checker (active listings)</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  For a home currently for sale, walks the AVM&apos;s own estimate history and recent comps to score how trustworthy that estimate is.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-700">Designer use:</span> before pitching scope, know whether the price the client is anchored to is defensible.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-2">Tool 3</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Estimate checker (sold homes)</h3>
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
            <h2 className="text-xl font-bold text-gray-900 mb-3">What became possible next</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The tools are small, but the operating pattern is the same as the <Link href="/case-studies/hvac-rebate-automation" className="text-indigo-600 underline hover:text-indigo-800">HVAC case study</Link>: find the recurring manual step, decide whether AI behavior or software should help, and let the business decide whether the next bottleneck is worth building around. Different industry, same motion.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8 mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">What the client owns</p>
            <p className="text-base text-gray-600 leading-relaxed">
              The workflow pattern, the AI-use guidance, the tool instructions, and the outputs created for client prep. This was an early lightweight engagement, but it follows the same principle as larger Botworks systems: the business should be able to use the work without being trapped inside an agency black box.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Want better AI workflows for your team?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Tell me what your team researches before every project &mdash; the patterns, the time sinks, and the places where AI might help. I&apos;ll help sort what to teach, automate, or build.
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
