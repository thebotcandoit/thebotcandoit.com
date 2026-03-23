import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Get in touch — thebotcandoit</title>
        <meta name="description" content="Tell us what task is eating your time. We build custom AI automations fast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white flex flex-col">
        <Nav />
        <main className="flex-1 px-8 py-16 max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
            Let&apos;s talk.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Describe the task that&apos;s eating your time. If it&apos;s repetitive, we can probably automate it — fast.
          </p>

          {status === 'success' ? (
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
              <p className="text-2xl mb-2">✅</p>
              <h2 className="text-gray-900 font-bold text-lg mb-1">Got it — thanks!</h2>
              <p className="text-gray-500 text-sm">I&apos;ll get back to you at {form.email || 'your email'} within a day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  What task is eating your time?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Every week I have to manually download photos from 10 listing pages and rename them..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong — please try again or email matt@thebotcandoit.com directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 disabled:opacity-50 transition-colors"
              >
                {status === 'submitting' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}
