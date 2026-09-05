import { useEffect, useState } from 'react'

const DEFAULT_EDITOR_ORIGIN = 'https://status.botworksagency.com'
const EDITOR_SESSION_KEY = 'botworks-content-editor-active'

function editorOrigin() {
  return process.env.NEXT_PUBLIC_CONTENT_EDITOR_URL
    || process.env.NEXT_PUBLIC_NOTES_EDITOR_URL
    || DEFAULT_EDITOR_ORIGIN
}

function asBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('The image could not be read.'))
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '')
    reader.readAsDataURL(file)
  })
}

export default function NoteImageUploader({ slug }) {
  const [file, setFile] = useState(null)
  const [alt, setAlt] = useState('')
  const [caption, setCaption] = useState('')
  const [phase, setPhase] = useState('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const active = params.get('edit') === '1' || window.sessionStorage.getItem(EDITOR_SESSION_KEY) === '1'
    if (!active) return

    fetch(`${editorOrigin()}/api/editor/notes/${slug}`, {
      credentials: 'include',
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.ok ? response.json() : null)
      .then((body) => {
        if (!body?.content?.image) return
        setAlt(body.content.image.alt || '')
        setCaption(body.content.image.caption || '')
      })
      .catch(() => {})
  }, [slug])

  async function uploadImage(event) {
    event.preventDefault()
    if (!file || !alt.trim()) return
    setPhase('saving')
    setMessage('Uploading the image…')
    try {
      const current = await fetch(`${editorOrigin()}/api/editor/notes/${slug}`, {
        credentials: 'include',
        headers: { Accept: 'application/json' },
      })
      const currentBody = await current.json()
      if (!current.ok) throw new Error(currentBody.error || 'The current Note could not be loaded.')

      const response = await fetch(`${editorOrigin()}/api/editor/notes/${slug}/image`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sha: currentBody.sha,
          name: file.name,
          mediaType: file.type,
          base64: await asBase64(file),
          alt: alt.trim(),
          caption: caption.trim(),
        }),
      })
      const body = await response.json()
      if (!response.ok) throw new Error(body.error || 'The image could not be uploaded.')

      const image = document.querySelector('[data-note-image-src]')
      if (image) {
        image.src = URL.createObjectURL(file)
        image.alt = alt.trim()
        image.closest('[data-note-image-frame]')?.classList.remove('note-media-empty')
      }
      const captionElement = document.querySelector('[data-editable="image.caption"]')
      if (captionElement) captionElement.innerText = caption.trim()
      window.dispatchEvent(new CustomEvent('BOTWORKS_CONTENT_VERSION_CHANGED', { detail: { sha: body.sha } }))
      setPhase('done')
      setMessage('Image saved. It will appear from the live address after the site rebuild finishes.')
    } catch (error) {
      setPhase('error')
      setMessage(error instanceof Error ? error.message : String(error))
    }
  }

  return (
    <form onSubmit={uploadImage} className="note-editor-only mb-10 rounded-lg border border-line bg-white/70 p-4 sm:p-5">
      <p className="site-label text-copy">Lead image</p>
      <p className="site-supporting mt-2">Upload a JPG, PNG, or WebP image up to 3 MB. Add a plain description for people who cannot see it.</p>
      <div className="mt-4 grid gap-4">
        <label className="site-supporting font-semibold text-ink">
          Image file
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => setFile(event.target.files?.[0] || null)}
            className="mt-1.5 block w-full rounded border border-line bg-white px-3 py-2 text-sm font-normal"
            disabled={phase === 'saving'}
          />
        </label>
        <label className="site-supporting font-semibold text-ink">
          Image description
          <input
            type="text"
            value={alt}
            onChange={(event) => setAlt(event.target.value)}
            placeholder="Describe what is visible in the image"
            className="mt-1.5 block w-full rounded border border-line bg-white px-3 py-2 text-sm font-normal"
            disabled={phase === 'saving'}
          />
        </label>
        <label className="site-supporting font-semibold text-ink">
          Caption <span className="font-normal text-copy">(optional)</span>
          <input
            type="text"
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            placeholder="What should the reader notice?"
            className="mt-1.5 block w-full rounded border border-line bg-white px-3 py-2 text-sm font-normal"
            disabled={phase === 'saving'}
          />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!file || !alt.trim() || phase === 'saving'}
          className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent disabled:opacity-50"
        >
          {phase === 'saving' ? 'Uploading…' : 'Upload image'}
        </button>
        {message && <p className={`site-supporting ${phase === 'error' ? 'text-red-700' : ''}`}>{message}</p>}
      </div>
    </form>
  )
}
