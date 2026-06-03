import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-8 border-t border-gray-100 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <Link href="/" className="text-sm font-bold tracking-tight text-gray-900">
          Bot<span className="text-indigo-600">works</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Link href="/how-we-work" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            How we work
          </Link>
          <Link href="/workflow-examples" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Examples
          </Link>
          <Link href="/for-searchers" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Searchers
          </Link>
          <Link href="/for-service-businesses" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Service businesses
          </Link>
          <Link href="/work" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Work
          </Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Contact
          </Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-6">
        AI when it helps. Custom software when it matters. Operational judgment either way.
      </p>
    </footer>
  )
}
