import { useAppSelector } from "../../../../app/hooks"
import { removeAll, setAllNotesArchiveStatus, showCreateForm } from "../../notesSlice"
import { HeadButton } from "../buttons/HeadButton"
import { OutsideButton } from "../buttons/OutsideButton"
import { NoteForm } from "../forms/NoteForm"
import { Cell } from "./Cell"
import { TableDataRows } from "./TableDataRows"

export function NotesTable() {
  const formStatus = useAppSelector(state => state.notes.showCreateForm)
  const tableArchiveStatus = useAppSelector(state => state.notes.showArchiveNotes)
  return (
    <table className="border-spacing-0 mt-14 w-full">
      <thead>
        <tr className="text-white bg-gray-800 h-[70px]">
          <Cell heading={true} content="" />
          <Cell heading={true} content="Name" />
          <Cell heading={true} content="Created" />
          <Cell heading={true} content="Category" />
          <Cell heading={true} content="Content" />
          <Cell heading={true} content="Dates" />
          <Cell heading={true} content="" />
          <HeadButton status={tableArchiveStatus} title="Archive/Unarchive All"
            action={setAllNotesArchiveStatus} icon="fa-solid fa-box-archive" />
          <HeadButton status={tableArchiveStatus} title="Delete All"
            action={removeAll} icon="fa-solid fa-trash" />
        </tr>
      </thead>
      <TableDataRows />
      <tfoot>{formStatus ? <NoteForm /> : !tableArchiveStatus
        ? <OutsideButton title="Create Note" insideTable={true} action={showCreateForm} /> : <></>}</tfoot>
    </table>
  )
}