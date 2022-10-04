import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../app/hooks';
import { ButtonIcon } from './ButtonIcon';


export interface ButtonProps {
  noteId: number,
  action: ActionCreatorWithPayload<number, string>,
  icon: string
  title: string
}

export function NoteButton(props: ButtonProps) {
  const dispatch = useAppDispatch()
  return (
    <td className="p-[8px]">
      <button title={props.title}
        onClick={() => dispatch(props.action(props.noteId))}>
        <ButtonIcon iconTitle={props.icon} light={false} />
      </button>
    </td>
  )
}
