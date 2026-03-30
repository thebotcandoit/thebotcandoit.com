import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-8 border-t border-gray-100 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <Link href="/" className="text-sm font-bold tracking-tight text-gray-900">
          the<span className="text-indigo-600">bot</span>candoit
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Link href="/work" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Work
          </Link>
          <Link href="/whats-new" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            What&apos;s new
          </Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors py-1">
            Contact
          </Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-6">
        Built and tested by a human. Powered by Claude.
      </p>
    </footer>
  )
}
