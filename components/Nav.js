import Link from 'next/link'
import { useState } from 'react'

export default function Nav({ tone = 'light' }) {
  const [open, setOpen] = useState(false)
  const dark = tone === 'dark'

  return (
    <nav className={`px-6 sm:px-8 py-4 sm:py-5 border-b backdrop-blur ${dark ? 'border-white/10 bg-[#12131a]' : 'border-[#ded6c7]/80 bg-[#f7f3ea]/90'}`}>
      <div className="flex items-center justify-between">
        <Link href="/" className={`font-display text-lg font-bold tracking-tight hover:opacity-80 transition-opacity ${dark ? 'text-[#fffaf0]' : 'text-[#12131a]'}`}>
          Bot<span className="text-[#2f9e73]">works</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/how-we-work" className={`text-sm hover:text-[#2f9e73] transition-colors font-medium ${dark ? 'text-white/64' : 'text-[#626b7a]'}`}>
            How we work
          </Link>
          <Link href="/workflow-examples" className={`text-sm hover:text-[#2f9e73] transition-colors font-medium ${dark ? 'text-white/64' : 'text-[#626b7a]'}`}>
            Examples
          </Link>
          <Link href="/work" className={`text-sm hover:text-[#2f9e73] transition-colors font-medium ${dark ? 'text-white/64' : 'text-[#626b7a]'}`}>
            Work
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${dark ? 'bg-[#2f9e73] text-white hover:bg-[#f2b84b] hover:text-[#12131a]' : 'bg-[#12131a] text-white hover:bg-[#2f9e73]'}`}
          >
            Get in touch
          </Link>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors ${dark ? 'hover:bg-white/10' : 'hover:bg-[#ebe3d4]'}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-all duration-200 ${dark ? 'bg-white' : 'bg-[#12131a]'} ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-0.5 mt-1 transition-all duration-200 ${dark ? 'bg-white' : 'bg-[#12131a]'} ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4">
          <Link
            href="/how-we-work"
            onClick={() => setOpen(false)}
            className={`text-base hover:text-[#2f9e73] transition-colors font-medium py-2 ${dark ? 'text-white/70' : 'text-[#626b7a]'}`}
          >
            How we work
          </Link>
          <Link
            href="/workflow-examples"
            onClick={() => setOpen(false)}
            className={`text-base hover:text-[#2f9e73] transition-colors font-medium py-2 ${dark ? 'text-white/70' : 'text-[#626b7a]'}`}
          >
            Examples
          </Link>
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className={`text-base hover:text-[#2f9e73] transition-colors font-medium py-2 ${dark ? 'text-white/70' : 'text-[#626b7a]'}`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors text-center ${dark ? 'bg-[#2f9e73] text-white hover:bg-[#f2b84b] hover:text-[#12131a]' : 'bg-[#12131a] text-white hover:bg-[#2f9e73]'}`}
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  )
}
