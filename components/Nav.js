import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="px-6 sm:px-8 py-4 sm:py-5 border-b border-[#ded6c7]/80 bg-[#f7f3ea]/90 backdrop-blur">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-[#12131a] hover:opacity-80 transition-opacity">
          Bot<span className="text-[#2f9e73]">works</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/how-we-work" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors font-medium">
            How we work
          </Link>
          <Link href="/workflow-examples" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors font-medium">
            Examples
          </Link>
          <Link href="/work" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors font-medium">
            Work
          </Link>
          <Link
            href="/contact"
            className="bg-[#12131a] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#2f9e73] transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[#ebe3d4] transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#12131a] transition-all duration-200 ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#12131a] mt-1 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4">
          <Link
            href="/how-we-work"
            onClick={() => setOpen(false)}
            className="text-base text-[#626b7a] hover:text-[#2f9e73] transition-colors font-medium py-2"
          >
            How we work
          </Link>
          <Link
            href="/workflow-examples"
            onClick={() => setOpen(false)}
            className="text-base text-[#626b7a] hover:text-[#2f9e73] transition-colors font-medium py-2"
          >
            Examples
          </Link>
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="text-base text-[#626b7a] hover:text-[#2f9e73] transition-colors font-medium py-2"
          >
            Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#12131a] text-white px-4 py-3 rounded-lg text-base font-semibold hover:bg-[#2f9e73] transition-colors text-center"
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  )
}
