import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
      <Link href="/" className="text-lg font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
        the<span className="text-indigo-600">bot</span>candoit
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/whats-new" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium">
          What&apos;s new
        </Link>
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
        >
          Work with us
        </Link>
      </div>
    </nav>
  )
}
