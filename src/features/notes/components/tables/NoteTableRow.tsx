import { Note, noteService } from "../../Note";
import { initiateEditNote, remove, switchArchiveStatus } from "../../notesSlice";
import { iconTitles } from "../buttons/ButtonIcon";
import { CategoryIcon } from "../buttons/CategoryIcon";
import { Cell } from "./Cell";
import { NoteButton } from "../buttons/NoteButton";


export function NoteTableRow(note: Note) {
  return (
    <tr className="bg-neutral-300 border-y-[10px] border-white">
      <CategoryIcon {...note.category} />
      <Cell heading={false} content={note.name} />
      <Cell heading={false} content={noteService.printMyDate(note.createDate)} />
      <Cell heading={false} content={note.category.categoryName} />
      <Cell heading={false} content={note.content} />
      <Cell heading={false} content={noteService.extractDates(note)} />
      <NoteButton title="Edit Note" noteId={note.id}
        action={initiateEditNote} icon={iconTitles.edit} />
      <NoteButton title="Archive/Unarchive" noteId={note.id}
        action={switchArchiveStatus} icon={iconTitles.archive} />
      <NoteButton title="Delete Note" noteId={note.id}
        action={remove} icon={iconTitles.delete} />
    </tr>
  )
}