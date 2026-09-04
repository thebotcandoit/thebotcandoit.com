import notesData from './notes.json'

export const notes = notesData.map((note) => ({ ...note, ...note.published }))

export const publishedNotes = notes.filter((note) => note.status === 'published')

export function getNoteBySlug(slug) {
  return notes.find((note) => note.slug === slug)
}
