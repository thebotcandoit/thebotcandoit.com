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
      window.location.href = `mailto:matt@botworksagency.com?subject=${encodeURIComponent(`Botworks conversation — ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`
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
        title="Contact Matt — Botworks"
        description="Tell Matt Livingston about important work you suspect AI could change. A hunch is enough; no specification or technical vocabulary is required."
        path="/contact"
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <Nav />
        <main className="mx-auto grid max-w-6xl gap-12 px-6 py-12 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">Contact</p>
            <h1 className="font-display mt-4 text-[2.8rem] font-bold leading-[0.97] tracking-tight text-[#12131a] sm:text-6xl">Send me the rough version.</h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4f5968]">What is the work you suspect AI could change? You do not need to know whether the answer is software, analysis, automation, an existing product, or something else.</p>
            <div className="mt-8 border-l-2 border-[#f2b84b] pl-5">
              <p className="text-sm leading-relaxed text-[#626b7a]">A useful note usually includes the company, the people doing the work, what happens today, and what you think might now be possible. It can be incomplete.</p>
            </div>
            <a href="mailto:matt@botworksagency.com" className="mt-8 inline-block font-semibold text-[#1f7a57] hover:text-[#12131a]">matt@botworksagency.com</a>
          </section>

          <section className="rounded-lg bg-[#fffaf0] p-6 ring-1 ring-[#ded6c7] sm:p-8">
            {status === 'success' ? (
              <div className="py-10 text-center">
                <h2 className="font-display text-3xl font-bold text-[#12131a]">Got it. Thank you.</h2>
                <p className="mt-3 text-sm text-[#626b7a]">Matt will reply directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#12131a]">Your name</label>
                  <input id="name" name="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-md border border-[#cfc5b5] bg-white px-4 py-3 text-sm text-[#12131a] outline-none focus:border-[#2f9e73] focus:ring-2 focus:ring-[#2f9e73]/15" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#12131a]">Your email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-md border border-[#cfc5b5] bg-white px-4 py-3 text-sm text-[#12131a] outline-none focus:border-[#2f9e73] focus:ring-2 focus:ring-[#2f9e73]/15" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#12131a]">What do you think AI could change?</label>
                  <textarea id="message" name="message" required rows={8} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="We have this work that…" className="mt-2 w-full resize-y rounded-md border border-[#cfc5b5] bg-white px-4 py-3 text-sm leading-relaxed text-[#12131a] outline-none focus:border-[#2f9e73] focus:ring-2 focus:ring-[#2f9e73]/15" />
                </div>
                {status === 'error' && <p className="text-sm text-red-700">The form did not send. Please email matt@botworksagency.com directly.</p>}
                <button type="submit" disabled={status === 'submitting'} className="w-full rounded-md bg-[#12131a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2f9e73] disabled:opacity-50">{status === 'submitting' ? 'Sending…' : FORMSPREE_ID ? 'Send to Matt' : 'Open in email'}</button>
              </form>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
