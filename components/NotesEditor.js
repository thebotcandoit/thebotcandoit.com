import HomepageEditor from './HomepageEditor'

export default function NotesEditor({ slug }) {
  return (
    <HomepageEditor
      label="Note"
      endpoint={`/api/editor/notes/${slug}`}
      editableAttribute="data-editable"
      previewPath={`/notes/${slug}`}
    />
  )
}
