import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-6 border-t border-gray-100 mt-8">
      <Link href="/" className="text-sm font-bold tracking-tight text-gray-900">
        the<span className="text-indigo-600">bot</span>candoit
      </Link>
      <p className="text-xs text-gray-400">
        🤖 <strong className="text-gray-500">One person + Claude.</strong> This is what that looks like.
      </p>
    </footer>
  )
}
