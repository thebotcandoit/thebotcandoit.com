import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-8 border-t border-[#ded6c7]/80 mt-8 bg-[#f7f3ea]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <Link href="/" className="font-display text-sm font-bold tracking-tight text-[#12131a]">
          Bot<span className="text-[#2f9e73]">works</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Link href="/how-we-work" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            How we work
          </Link>
          <Link href="/workflow-examples" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            Examples
          </Link>
          <Link href="/for-searchers" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            Searchers
          </Link>
          <Link href="/for-service-businesses" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            Service businesses
          </Link>
          <Link href="/work" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            Work
          </Link>
          <Link href="/notes" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            Notes
          </Link>
          <Link href="/contact" className="text-sm text-[#626b7a] hover:text-[#2f9e73] transition-colors py-1">
            Contact
          </Link>
        </div>
      </div>
      <p className="text-xs text-[#626b7a] mt-6">
        AI when it helps. Custom software when it matters. Operational judgment either way.
      </p>
    </footer>
  )
}
