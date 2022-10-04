import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/hooks"
import { ButtonIcon } from "./ButtonIcon"

export interface HeadButtonProps {
  status: boolean,
  action: ActionCreatorWithPayload<boolean>,
  icon: string,
  title: string
}

export function HeadButton(props: HeadButtonProps) {
  const dispatch = useAppDispatch()
  return (
    <th className="p-[8px]">
      <button title={props.title}
        onClick={() => dispatch(props.action(props.status))}>
        <ButtonIcon iconTitle={props.icon} light={true} />
      </button>
    </th>
  )
}