import { useState } from 'react'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SkillCard from '../components/SkillCard'

export default function Home({ skills }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', ...new Set(skills.map(s => s.category))]
  const filtered = activeFilter === 'All' ? skills : skills.filter(s => s.category === activeFilter)

  return (
    <>
      <Head>
        <title>thebotcandoit — AI skills for real people</title>
        <meta name="description" content="Free, downloadable AI skills for people who want to work smarter — no coding required. Each one solves a real problem." />
        <meta property="og:title" content="thebotcandoit — AI skills for real people" />
        <meta property="og:description" content="Free, downloadable AI skills for people who want to work smarter — no coding required." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Nav />
        <main>

          {/* HERO */}
          <section className="px-8 pt-16 pb-10 max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              AI tools that get <span className="text-indigo-600">the job done.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-3 max-w-xl">
              Free, downloadable AI skills for people who want to work smarter — no coding required. Each one solves a real problem.
            </p>
            <p className="text-sm text-gray-400 mb-8">🤖 One person made all of this. You can too.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="#skills" className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors">
                Browse Skills
              </a>
              <a href="mailto:matt@thebotcandoit.com" className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                Need something custom? Let&apos;s build it →
              </a>
            </div>
          </section>

          {/* CUSTOM BUILD BANNER */}
          <section className="px-8 pb-10 max-w-3xl">
            <div className="bg-indigo-600 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-white font-bold text-base mb-1">Don&apos;t see what you need? We build custom.</h2>
                <p className="text-indigo-200 text-sm leading-relaxed max-w-md">
                  Describe the task that&apos;s eating your time. If it&apos;s repetitive, we can probably automate it — for any industry.
                </p>
              </div>
              <a href="mailto:matt@thebotcandoit.com" className="bg-white text-indigo-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors whitespace-nowrap flex-shrink-0">
                Get in touch
              </a>
            </div>
          </section>

          {/* SKILLS GRID */}
          <section id="skills" className="px-8 pb-16">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Available Skills</p>
            <div className="flex gap-2 flex-wrap mb-7">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    activeFilter === cat
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(skill => (
                <SkillCard key={skill.slug} skill={skill} />
              ))}
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mx-8 mb-16 bg-gray-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Have a task that&apos;s eating your time?</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                I build custom automations for real estate, research, data processing, and more. If you can describe it, we can probably build it — fast.
              </p>
            </div>
            <a href="mailto:matt@thebotcandoit.com" className="bg-white text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors">
              Let&apos;s Talk
            </a>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const skillsDir = path.join(process.cwd(), 'data/skills')
  const files = fs.readdirSync(skillsDir).filter(f => f.endsWith('.json'))
  const skills = files.map(file => JSON.parse(fs.readFileSync(path.join(skillsDir, file), 'utf8')))
  return { props: { skills } }
}
