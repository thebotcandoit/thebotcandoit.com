import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function SkillPage({ skill }) {
  const downloadFilename = skill.slug.replace(/-/g, '_') + '.md'

  return (
    <>
      <Head>
        <title>{skill.name} — thebotcandoit</title>
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

          {/* WHAT IS A SKILL */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 flex gap-3 items-start">
            <span className="text-xl mt-0.5">💡</span>
            <div>
              <p className="text-base font-semibold text-gray-900 mb-1">What&apos;s a skill?</p>
              <p className="text-base text-gray-600 leading-relaxed">
                A skill is a small instruction file you add to your Claude Cowork app. Once added, Claude knows how to do something new — like automatically downloading every photo from a listing. Think of it like installing a shortcut that does a job for you.
              </p>
            </div>
          </div>

          {/* TWO-PATH: DIY vs CUSTOM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="border border-gray-200 rounded-2xl p-5">
              <p className="text-base font-bold text-gray-900 mb-1">⬇️ Do it yourself</p>
              <p className="text-sm text-gray-600 mb-4">Download the skill file and add it to Cowork in under 2 minutes.</p>
              <a
                href={`/skills/${skill.slug}/SKILL.md`}
                download={downloadFilename}
                className="block text-center bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors mb-2"
              >
                ↓ Download skill
              </a>
              <p className="text-sm text-gray-500 text-center">Saves as <span className="font-mono bg-gray-100 px-1 rounded">{downloadFilename}</span></p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 flex flex-col">
              <p className="text-base font-bold text-white mb-1">🛠️ Need help — or something custom?</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
                Don&apos;t want to set it up yourself, or need something built specifically for your workflow?
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-gray-900 px-4 py-2.5 rounded-xl text-base font-bold hover:bg-gray-100 transition-colors mb-4"
              >
                Get in touch
              </Link>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-300 border-t border-gray-800 pt-2">
                  <span className="text-gray-500 flex-shrink-0">→</span>
                  I&apos;ll install and set it up for you
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300 border-t border-gray-800 pt-2">
                  <span className="text-gray-500 flex-shrink-0">→</span>
                  We can modify this skill for your specific needs
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300 border-t border-gray-800 pt-2">
                  <span className="text-gray-500 flex-shrink-0">→</span>
                  Or build something completely custom from scratch
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100 mb-10" />

          {/* STEP BY STEP */}
          <section className="mb-10">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">How to set it up</h2>

            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">One-time setup</p>
            <div className="space-y-5 mb-8">
              {[
                { n: 1, title: 'Get the Claude desktop app', body: 'Download it free at claude.ai — install it and open it.' },
                { n: 2, title: 'Enable Cowork mode', body: 'Inside Claude, look for Cowork in the left sidebar and turn it on.' },
                { n: 3, title: 'Install Claude in Chrome', body: 'Search "Claude for Chrome" in the Chrome Web Store and install the extension.' },
                { n: 4, title: 'Sign in with the same account', body: 'Log into both the desktop app and the Chrome extension using the same Claude account.' },
              ].map(step => (
                <div key={step.n} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step.n}</div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 mb-0.5">{step.title}</p>
                    <p className="text-base text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Install this skill</p>
            <div className="flex gap-4 items-start mb-8">
              <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
              <div>
                <p className="text-base font-semibold text-gray-900 mb-0.5">Download and add the skill file</p>
                <p className="text-base text-gray-600 leading-relaxed">Click &ldquo;Download skill&rdquo; above. The file saves as <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm">{downloadFilename}</span> to your Downloads folder. In Claude Cowork, open the Skills or Plugins panel and add the downloaded file. Not sure how? <Link href="/contact" className="text-indigo-600 underline hover:text-indigo-800">Get in touch</Link> and we&apos;ll walk you through it.</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Use it</p>
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-full bg-green-50 text-green-600 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">6</div>
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 mb-2">{skill.useCommandHint}</p>
                <div className="bg-gray-900 text-green-400 text-base font-mono px-4 py-3 rounded-xl">
                  &ldquo;{skill.useCommand}&rdquo;
                </div>
              </div>
            </div>
          </section>

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
