import { useEffect, useMemo, useState } from 'react'

const DEFAULT_EDITOR_ORIGIN = 'https://status.botworksagency.com'

function editorOrigin() {
  return process.env.NEXT_PUBLIC_NOTES_EDITOR_URL || DEFAULT_EDITOR_ORIGIN
}

async function responseBody(response) {
  try {
    return await response.json()
  } catch {
    return { error: `Request failed (${response.status})` }
  }
}

function signedOutError(message) {
  const error = new Error(message)
  error.code = 'SIGNED_OUT'
  return error
}

export default function NotesEditor({ slug, initialStatus }) {
  const [active, setActive] = useState(false)
  const [phase, setPhase] = useState('idle')
  const [message, setMessage] = useState('')
  const [sha, setSha] = useState(null)
  const [noteStatus, setNoteStatus] = useState(initialStatus)
  const [dirty, setDirty] = useState(false)
  const baseUrl = useMemo(editorOrigin, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('edit') !== '1') return undefined

    setActive(true)
    setPhase('checking')
    document.body.classList.add('notes-editor-open')

    let cancelled = false
    const editableElements = Array.from(document.querySelectorAll('[data-editable]'))
    const onInput = () => setDirty(true)

    async function initialize() {
      try {
        const response = await fetch(`${baseUrl}/api/editor/notes/${encodeURIComponent(slug)}`, {
          credentials: 'include',
          headers: { Accept: 'application/json' },
        })
        const body = await responseBody(response)
        if (cancelled) return

        if (response.status === 401) {
          setPhase('signed-out')
          setMessage('Sign in to the Botworks admin, then return here to edit.')
          return
        }
        if (!response.ok) throw new Error(body.error || 'The editor could not open this Note.')

        setSha(body.sha)
        setNoteStatus(body.note.status)
        setPhase('ready')
        setMessage(`Editing as ${body.user}`)

        editableElements.forEach((element) => {
          element.setAttribute('data-notes-editor-active', 'true')
          element.addEventListener('input', onInput)
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            element.readOnly = false
          } else {
            element.contentEditable = 'true'
            element.spellcheck = true
            element.setAttribute('role', 'textbox')
          }
        })
      } catch (error) {
        if (cancelled) return
        setPhase('error')
        setMessage(
          error instanceof TypeError
            ? 'The editor service is unavailable or has not been deployed yet.'
            : error instanceof Error
              ? error.message
              : String(error)
        )
      }
    }

    initialize()
    return () => {
      cancelled = true
      document.body.classList.remove('notes-editor-open')
      editableElements.forEach((element) => {
        element.removeEventListener('input', onInput)
        element.removeAttribute('data-notes-editor-active')
        element.removeAttribute('role')
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
          element.readOnly = true
        } else {
          element.contentEditable = 'false'
        }
      })
    }
  }, [baseUrl, slug])

  function collectUpdates() {
    const updates = {}
    document.querySelectorAll('[data-editable]').forEach((element) => {
      const editableKey = element.getAttribute('data-editable')
      if (!editableKey) return
      const path = editableKey.startsWith('note.') ? editableKey.slice(5) : editableKey
      const value = element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement
        ? element.value
        : element.innerText
      updates[path] = value.replace(/\u00a0/g, ' ').trim()
    })
    return updates
  }

  async function saveDraft() {
    if (!sha) throw new Error('The editor does not have a current GitHub version. Reload and try again.')
    setPhase('saving')
    setMessage('Saving your edits to GitHub…')

    const response = await fetch(`${baseUrl}/api/editor/notes/${encodeURIComponent(slug)}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sha, updates: collectUpdates() }),
    })
    const body = await responseBody(response)
    if (response.status === 401) {
      setPhase('signed-out')
      setMessage('Your editor session expired. Sign in again, then return to this page.')
      throw signedOutError('Your editor session expired.')
    }
    if (response.status === 409) {
      throw new Error('This Note changed in GitHub after you opened it. Reload before saving so no work is overwritten.')
    }
    if (!response.ok) throw new Error(body.error || 'GitHub did not accept the edit.')

    const nextSha = body.sha || sha
    setSha(nextSha)
    setDirty(false)
    setPhase('ready')
    setMessage(body.unchanged ? 'No text changed.' : 'Draft saved. The site is rebuilding now.')
    return nextSha
  }

  async function handleSave() {
    try {
      await saveDraft()
    } catch (error) {
      if (error?.code !== 'SIGNED_OUT') {
        setPhase('error')
        setMessage(error instanceof Error ? error.message : String(error))
      }
    }
  }

  async function handlePublish() {
    try {
      const savedSha = await saveDraft()
      setPhase('publishing')
      setMessage('Publishing the Note…')
      const response = await fetch(`${baseUrl}/api/editor/notes/${encodeURIComponent(slug)}/publish`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sha: savedSha }),
      })
      const body = await responseBody(response)
      if (response.status === 409) {
        throw new Error('The Note changed while publishing. Reload and review the newest version.')
      }
      if (!response.ok) throw new Error(body.error || 'The Note could not be published.')

      setSha(body.sha || savedSha)
      setNoteStatus('published')
      setPhase('ready')
      setMessage('Published. The Notes index and search assets will update when the deployment finishes.')
    } catch (error) {
      if (error?.code !== 'SIGNED_OUT') {
        setPhase('error')
        setMessage(error instanceof Error ? error.message : String(error))
      }
    }
  }

  function exitEditor() {
    const url = new URL(window.location.href)
    url.searchParams.delete('edit')
    window.location.href = url.toString()
  }

  if (!active) return null

  const busy = phase === 'saving' || phase === 'publishing'
  const loginUrl = `${baseUrl}/login?next=${encodeURIComponent(window.location.href)}`

  return (
    <aside className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#12131a] px-4 py-3 text-white shadow-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-[#f2b84b] px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#12131a]">
              Live editor
            </span>
            <span className="text-xs text-white/55">{noteStatus}</span>
            {dirty && <span className="text-xs text-[#f2b84b]">Unsaved changes</span>}
          </div>
          <p className={`mt-1 truncate text-xs ${phase === 'error' ? 'text-red-300' : 'text-white/65'}`}>
            {message || 'Connecting to the editor…'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {phase === 'signed-out' ? (
            <a href={loginUrl} className="rounded bg-[#f2b84b] px-4 py-2 text-sm font-semibold text-[#12131a] hover:bg-white">
              Sign in to edit
            </a>
          ) : (
            <>
              <button
                type="button"
                onClick={handleSave}
                disabled={busy || phase === 'checking' || !sha}
                className="rounded border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {phase === 'saving' ? 'Saving…' : 'Save draft'}
              </button>
              {noteStatus !== 'published' && (
                <button
                  type="button"
                  onClick={handlePublish}
                  disabled={busy || phase === 'checking' || !sha}
                  className="rounded bg-[#f2b84b] px-4 py-2 text-sm font-semibold text-[#12131a] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {phase === 'publishing' ? 'Publishing…' : 'Publish'}
                </button>
              )}
            </>
          )}
          <button type="button" onClick={exitEditor} className="px-2 py-2 text-sm text-white/55 hover:text-white">
            Exit
          </button>
        </div>
      </div>
    </aside>
  )
}
