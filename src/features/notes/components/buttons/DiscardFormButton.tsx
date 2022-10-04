import { useAppDispatch } from "../../../../app/hooks"
import { discardEditForm, hideCreateForm } from "../../notesSlice"
import { ButtonIcon } from "./ButtonIcon"

export interface DiscardFormButtonProps {
  noteId?: number
}

export function DiscardFormButton(props: DiscardFormButtonProps) {
  const dispatch = useAppDispatch()
  return (
    <td className="p-[8px]">
      <button title="Discard" onClick={() => {
        return props.noteId ? dispatch(discardEditForm(props.noteId)) : dispatch(hideCreateForm())
      }}>
        <ButtonIcon iconTitle="fa-solid fa-xmark" light={false} />
      </button>
    </td>
  )
}