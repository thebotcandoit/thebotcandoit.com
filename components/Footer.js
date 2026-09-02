import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#ded6c7] bg-[#f7f3ea] px-6 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1.3fr_1fr] sm:items-end">
        <div>
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-[#12131a]">Bot<span className="text-[#2f9e73]">works</span></Link>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#626b7a]">Botworks is Matt Livingston, working with the people who know a business to put AI to work on important jobs. Client-specific code, data, infrastructure, and documentation stay with the client.</p>
          <a href="mailto:matt@botworksagency.com" className="mt-3 inline-block text-sm font-semibold text-[#1f7a57] hover:text-[#12131a]">matt@botworksagency.com</a>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end" aria-label="Footer">
          <Link href="/work" className="text-sm text-[#626b7a] hover:text-[#12131a]">Work</Link>
          <Link href="/how-we-work" className="text-sm text-[#626b7a] hover:text-[#12131a]">How we work</Link>
          <Link href="/notes" className="text-sm text-[#626b7a] hover:text-[#12131a]">Notes</Link>
          <Link href="/about" className="text-sm text-[#626b7a] hover:text-[#12131a]">About</Link>
          <Link href="/contact" className="text-sm text-[#626b7a] hover:text-[#12131a]">Contact</Link>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-[#ded6c7]/70 pt-5 text-xs text-[#8a8171]">Written for people. Structured so their agents can understand it too.</div>
    </footer>
  )
}
