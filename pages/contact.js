import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    if (!FORMSPREE_ID) {
      window.location.href = `mailto:matt@botworksagency.com?subject=${encodeURIComponent(`Botworks conversation: ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`
      return
    }
    setStatus('submitting')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error('Form failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SiteHead
        title="Contact Matt | Botworks"
        description="Tell Matt Livingston about important work you and your team suspect AI could change. A hunch is enough; no specification or technical vocabulary is required."
        path="/contact"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main className="site-shell site-section grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <section>
            <p className="site-label">Contact</p>
            <h1 className="site-page-title mt-4">Send me the rough version.</h1>
            <p className="site-lede mt-6">What is the work you and your team suspect AI could change? You do not need to know whether the answer is an agent, software, analysis, an existing product, or something else.</p>
            <div className="mt-8">
              <p className="site-supporting">A useful note usually includes the company, the people who know the work, what happens today, and what you think might now be possible. It can be incomplete.</p>
            </div>
            <a href="mailto:matt@botworksagency.com" className="site-link mt-8 inline-block">matt@botworksagency.com</a>
          </section>

          <section className="rounded-lg bg-white/50 p-6 ring-1 ring-line sm:p-8">
            {status === 'success' ? (
              <div className="py-10 text-center">
                <h2 className="site-section-title">Got it. Thank you.</h2>
                <p className="site-supporting mt-3">Matt will reply directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink">Your name</label>
                  <input id="name" name="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink">Your email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink">What do you think AI could change?</label>
                  <textarea id="message" name="message" required rows={8} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="We have this work that…" className="mt-2 w-full resize-y rounded-md border border-line bg-white px-4 py-3 text-sm leading-6 text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                {status === 'error' && <p className="text-sm text-red-700">The form did not send. Please email matt@botworksagency.com directly.</p>}
                <button type="submit" disabled={status === 'submitting'} className="w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-accent disabled:opacity-50">{status === 'submitting' ? 'Sending…' : FORMSPREE_ID ? 'Send to Matt' : 'Open in email'}</button>
              </form>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
