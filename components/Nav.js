import Link from 'next/link'
import { useState } from 'react'

const links = [
  ['Work', '/work'],
  ['How we work', '/how-we-work'],
  ['Notes', '/notes'],
  ['About', '/about'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 border-b border-line/90 bg-paper/95 py-4 backdrop-blur">
      <div className="site-shell flex items-center justify-between gap-6">
        <Link href="/" className="group flex min-w-0 items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-ink">Bot<span className="text-accent">works</span></span>
          <span className="hidden text-sm font-semibold text-copy sm:inline">AI transformation partner</span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-copy transition-colors hover:text-ink">{label}</Link>)}
          <a href="mailto:matt@botworksagency.com" className="rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent">matt@botworksagency.com</a>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-ink transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-ink transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="site-shell mt-4 border-t border-line pt-3 lg:hidden">
          <div className="flex flex-col">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-ink">{label}</Link>)}
            <a href="mailto:matt@botworksagency.com" className="mt-2 rounded-md bg-ink px-4 py-3 text-center text-base font-semibold text-white">matt@botworksagency.com</a>
          </div>
        </div>
      )}
    </nav>
  )
}
