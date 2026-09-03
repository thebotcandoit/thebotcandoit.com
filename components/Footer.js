import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="site-shell grid gap-8 sm:grid-cols-[1.3fr_1fr] sm:items-end">
        <div>
          <Link href="/" className="font-brand text-xl font-bold tracking-tight text-ink">Bot<span className="text-accent">works</span></Link>
          <p className="site-supporting mt-3 max-w-xl">Botworks is Matt Livingston, working with the people who know a business to put AI to work on important jobs. The client owns the company-specific code, data, infrastructure, and documentation; Botworks operates it while engaged.</p>
          <a href="mailto:matt@botworksagency.com" className="site-link mt-3 inline-block">matt@botworksagency.com</a>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end" aria-label="Footer">
          <Link href="/work" className="text-sm text-copy hover:text-ink">Work</Link>
          <Link href="/how-we-work" className="text-sm text-copy hover:text-ink">How we work</Link>
          <Link href="/notes" className="text-sm text-copy hover:text-ink">Notes</Link>
          <Link href="/about" className="text-sm text-copy hover:text-ink">About</Link>
          <Link href="/contact" className="text-sm text-copy hover:text-ink">Contact</Link>
        </nav>
      </div>
      <div className="site-shell mt-8 border-t border-line/70 pt-5 text-sm text-copy">Written for people. Structured so the next responsible operator and their agents can understand it too.</div>
    </footer>
  )
}
