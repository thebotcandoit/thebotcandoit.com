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
    <nav className="sticky top-0 z-40 border-b border-[#ded6c7]/90 bg-[#f7f3ea]/95 px-5 py-4 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href="/" className="group flex min-w-0 items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-[#12131a]">Bot<span className="text-[#2f9e73]">works</span></span>
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a8171] sm:inline">AI transformation partner</span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-[#626b7a] transition-colors hover:text-[#12131a]">{label}</Link>)}
          <a href="mailto:matt@botworksagency.com" className="rounded-md bg-[#12131a] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2f9e73]">matt@botworksagency.com</a>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#ded6c7] lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-[#12131a] transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-[#12131a] transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="mx-auto mt-4 max-w-6xl border-t border-[#ded6c7] pt-3 lg:hidden">
          <div className="flex flex-col">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-[#12131a]">{label}</Link>)}
            <a href="mailto:matt@botworksagency.com" className="mt-2 rounded-md bg-[#12131a] px-4 py-3 text-center text-base font-semibold text-white">matt@botworksagency.com</a>
          </div>
        </div>
      )}
    </nav>
  )
}
