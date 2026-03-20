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
          <section className="px-8 pt-16 pb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              🤖 One person + Claude built everything here
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
              Small tools that get <span className="text-indigo-600">the job</span> done.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
              Free, downloadable AI skills for people who want to work smarter — no coding required. Each one solves a real problem.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-xs text-gray-500 font-medium">
              🤖 One person made all of this. You can too.
            </div>
          </section>
          <section className="px-8 pb-16">
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
          <section className="mx-8 mb-16 bg-indigo-50 border border-indigo-100 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Have a task that's eating your time?</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                Every skill here started as someone's annoying problem. If you have a workflow you wish AI could just handle — tell us. We'll see if we can build it, and show you how.
              </p>
            </div>
            <a href="mailto:hello@thebotcandoit.com" className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap hover:bg-gray-700 transition-colors">
              Tell us what's eating your time →
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
