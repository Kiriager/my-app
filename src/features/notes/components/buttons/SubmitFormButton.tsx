import { useAppDispatch } from "../../../../app/hooks"
import { NoteFormData } from "../../Note"
import { add, edit } from "../../notesSlice"
import { ButtonIcon } from "./ButtonIcon"

export interface SubmitFormButtonProps {
  noteId?: number,
  data: NoteFormData
}

export function SubmitFormButton(props: SubmitFormButtonProps) {
  const dispatch = useAppDispatch()
  return (
    <td className="p-[8px]">
      <button title="Save Note" onClick={() => {
        return props.noteId
          ? dispatch(edit({ data: props.data, noteId: props.noteId }))
          : dispatch(add(props.data))
      }}>
        <ButtonIcon iconTitle="fa-solid fa-check" light={false} />
      </button>
    </td>
  )
}