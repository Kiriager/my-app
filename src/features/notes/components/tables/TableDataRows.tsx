import { useAppSelector } from "../../../../app/hooks"
import { NoteForm } from "../forms/NoteForm"
import { NoteTableRow } from "./NoteTableRow"

export function TableDataRows() {
  const notes = useAppSelector(state => state.notes.notesList)
  const tableArchiveStatus = useAppSelector(state => state.notes.showArchiveNotes)
  return (
    <tbody>
      {notes.filter((note) => { return note.archivedStatus === tableArchiveStatus }).map((note) => {
        return note.editStatus ? (<NoteForm note={note} key={"note" + note.id} />)
          : (<NoteTableRow {...note} key={"note" + note.id} />)
      })}
    </tbody>
  )
}