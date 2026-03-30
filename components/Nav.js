import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="px-6 sm:px-8 py-4 sm:py-5 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
          the<span className="text-indigo-600">bot</span>candoit
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium">
            Work
          </Link>
          <Link href="/whats-new" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium">
            What&apos;s new
          </Link>
          <Link
            href="/contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4">
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="text-base text-gray-600 hover:text-indigo-600 transition-colors font-medium py-2"
          >
            Work
          </Link>
          <Link
            href="/whats-new"
            onClick={() => setOpen(false)}
            className="text-base text-gray-600 hover:text-indigo-600 transition-colors font-medium py-2"
          >
            What&apos;s new
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white px-4 py-3 rounded-lg text-base font-semibold hover:bg-indigo-700 transition-colors text-center"
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  )
}
