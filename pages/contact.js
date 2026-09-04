import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'
import HomepageEditor from '../components/HomepageEditor'
import sitePages from '../data/site-pages.json'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID
const pageId = 'contact'
const page = sitePages.pages[pageId]
const content = page.published

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
        title={content.meta.title}
        description={content.meta.description}
        path={page.path}
      />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <HomepageEditor label={page.label} endpoint={`/api/editor/pages/${pageId}`} editableAttribute="data-site-editable" previewPath={page.path} />
        <Nav />
        <main className="site-shell site-section grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <section>
            <p data-site-editable="hero.eyebrow" className="site-label">{content.hero.eyebrow}</p>
            <h1 data-site-editable="hero.heading" className="site-page-title mt-4">{content.hero.heading}</h1>
            <p data-site-editable="hero.body" className="site-lede mt-6">{content.hero.body}</p>
            <div className="mt-8">
              <p data-site-editable="hero.note" className="site-supporting">{content.hero.note}</p>
            </div>
            <a href="mailto:matt@botworksagency.com" data-site-editable="hero.email" className="site-link mt-8 inline-block">{content.hero.email}</a>
          </section>

          <section className="rounded-lg bg-white/50 p-6 ring-1 ring-line sm:p-8">
            {status === 'success' ? (
              <div className="py-10 text-center">
                <h2 data-site-editable="form.successHeading" className="site-section-title">{content.form.successHeading}</h2>
                <p data-site-editable="form.successBody" className="site-supporting mt-3">{content.form.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" data-site-editable="form.nameLabel" className="block text-sm font-semibold text-ink">{content.form.nameLabel}</label>
                  <input id="name" name="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="email" data-site-editable="form.emailLabel" className="block text-sm font-semibold text-ink">{content.form.emailLabel}</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                <div>
                  <label htmlFor="message" data-site-editable="form.messageLabel" className="block text-sm font-semibold text-ink">{content.form.messageLabel}</label>
                  <textarea id="message" name="message" required rows={8} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder={content.form.messagePlaceholder} className="mt-2 w-full resize-y rounded-md border border-line bg-white px-4 py-3 text-sm leading-6 text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                </div>
                {status === 'error' && <p data-site-editable="form.error" className="text-sm text-red-700">{content.form.error}</p>}
                <button type="submit" disabled={status === 'submitting'} className="w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-accent disabled:opacity-50">{status === 'submitting' ? content.form.submitting : FORMSPREE_ID ? content.form.submit : content.form.emailSubmit}</button>
              </form>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
