import { useAppSelector } from "../../../../app/hooks"
import { switchTableArchiveStatus } from "../../notesSlice"
import { OutsideButton } from "./OutsideButton"

export function TableArchiveStatusButton() {
  const tableArchiveStatus = useAppSelector(state => state.notes.showArchiveNotes)
  return <OutsideButton action={switchTableArchiveStatus} insideTable={false}
    title={tableArchiveStatus ? "Show Active Notes" : "Show Archived Notes"} />
}