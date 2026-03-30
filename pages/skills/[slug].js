import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function SkillPage({ skill }) {
  const downloadFilename = skill.downloadFilename || skill.slug.replace(/-/g, '_') + '.md'

  return (
    <>
      <Head>
        <title>{skill.name} &mdash; thebotcandoit</title>
        <meta name="description" content={skill.tagline} />
        <meta property="og:title" content={`${skill.name} — thebotcandoit`} />
        <meta property="og:description" content={skill.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="max-w-2xl mx-auto px-8 py-12">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700">{skill.name}</span>
          </div>

          {/* HEADER */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {skill.category}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3 leading-tight">{skill.name}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{skill.tagline}</p>
          </div>

          {/* PROBLEM > SOLUTION > RESULT */}
          {skill.problem && (
            <div className="mb-8 space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">The problem</p>
                <p className="text-base text-gray-700 leading-relaxed">{skill.problem}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">What I built</p>
                <p className="text-base text-gray-700 leading-relaxed">{skill.solution}</p>
              </div>
              {skill.result && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">The result</p>
                  <p className="text-base text-gray-700 leading-relaxed">{skill.result}</p>
                </div>
              )}
            </div>
          )}

          {/* DEMO VIDEO */}
          {skill.demoVideo && (
            <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <video
                src={skill.demoVideo}
                controls
                playsInline
                muted
                className="w-full block"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* TWO-PATH: TRY IT + GET HELP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="border border-gray-200 rounded-2xl p-5">
              <p className="text-base font-bold text-gray-900 mb-1">Try it yourself</p>
              <p className="text-sm text-gray-600 mb-4">This is a free tool you can use right now with the Claude desktop app.</p>
              <a
                href={`/skills/${skill.slug}/SKILL.md`}
                download={downloadFilename}
                className="block text-center bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors mb-2"
              >
                Download tool
              </a>
              <p className="text-xs text-gray-400 text-center">Requires the Claude desktop app</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 flex flex-col">
              <p className="text-base font-bold text-white mb-1">Want something like this?</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
                I can build a custom version for your workflow, set this up for you, or create something entirely new.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-gray-900 px-4 py-2.5 rounded-xl text-base font-bold hover:bg-gray-100 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <hr className="border-gray-100 mb-8" />

          {/* WHAT IT DOES */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">What it does</h2>
            <p className="text-base text-gray-700 leading-relaxed">{skill.description}</p>
          </section>

          {/* WHO IT'S FOR */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Who it&apos;s for</h2>
            <p className="text-base text-gray-700 leading-relaxed">{skill.whoFor}</p>
          </section>

          {/* HOW TO USE */}
          {skill.useCommand && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">How to use it</h2>
              <p className="text-base text-gray-600 mb-3">{skill.useCommandHint}</p>
              <div className="bg-gray-900 text-green-400 text-base font-mono px-4 py-3 rounded-xl">
                &ldquo;{skill.useCommand}&rdquo;
              </div>
            </section>
          )}

          {/* TAGS */}
          <div className="flex gap-2 flex-wrap">
            {skill.tags.map(tag => (
              <span key={tag} className="bg-gray-50 text-gray-600 text-sm px-3 py-1 rounded-full border border-gray-200 font-medium">{tag}</span>
            ))}
          </div>

        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const skillsDir = path.join(process.cwd(), 'data/skills')
  const files = fs.readdirSync(skillsDir).filter(f => f.endsWith('.json'))
  const paths = files.map(file => ({ params: { slug: file.replace('.json', '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const skillPath = path.join(process.cwd(), 'data/skills', `${params.slug}.json`)
  const skill = JSON.parse(fs.readFileSync(skillPath, 'utf8'))
  return { props: { skill } }
}
