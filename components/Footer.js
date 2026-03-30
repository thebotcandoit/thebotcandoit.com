import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-6 border-t border-gray-100 mt-8">
      <Link href="/" className="text-sm font-bold tracking-tight text-gray-900">
        the<span className="text-indigo-600">bot</span>candoit
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/work" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">
          Work
        </Link>
        <Link href="/whats-new" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">
          What&apos;s new
        </Link>
        <Link href="/contact" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">
          Contact
        </Link>
        <p className="text-xs text-gray-400">
          Built and tested by a human. Powered by Claude.
        </p>
      </div>
    </footer>
  )
}
