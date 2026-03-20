import Link from 'next/link'

const categoryIcons = {
  'Real Estate': '🏠',
  'Business': '📁',
  'Research': '🔍',
  'Productivity': '⚡',
  'Finance': '💰',
}

export default function SkillCard({ skill }) {
  const isComingSoon = skill.status === 'coming-soon'

  return (
    <div className={`relative border rounded-2xl p-6 bg-white transition-all ${
      isComingSoon
        ? 'opacity-50 bg-gray-50 border-gray-200'
        : 'border-gray-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 cursor-pointer'
    }`}>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-400 rounded-t-2xl" />
      {isComingSoon && (
        <span className="absolute top-4 right-4 bg-gray-100 text-gray-400 text-xs font-semibold px-2 py-1 rounded-full border border-gray-200">
          Coming soon
        </span>
      )}
      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl mb-4">
        {categoryIcons[skill.category] || '🤖'}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{skill.name}</h3>
      <p className="text-sm text-gray-500 leading-snug mb-4">{skill.tagline}</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {skill.tags.map(tag => (
          <span key={tag} className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded-md font-medium border border-gray-100">
            {tag}
          </span>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        {isComingSoon ? (
          <>
            <button disabled className="bg-indigo-600 opacity-40 text-white px-4 py-2 rounded-lg text-xs font-semibold cursor-not-allowed">
              ↓ Download skill
            </button>
            <span className="text-xs text-gray-400 underline cursor-pointer">Notify me</span>
          </>
        ) : (
          <>
            <Link href={`/skills/${skill.slug}`}>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors">
                ↓ Download skill
              </button>
            </Link>
            <a href="mailto:hello@thebotcandoit.com" className="text-xs text-gray-400 underline hover:text-gray-600 transition-colors">
              Need help installing?
            </a>
          </>
        )}
      </div>
    </div>
  )
}
