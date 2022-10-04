import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { useAppDispatch } from "../../../../app/hooks"

export interface OutsideButtonProps {
  insideTable: boolean,
  action: ActionCreatorWithoutPayload<string>,
  title: string
}

export function OutsideButton(props: OutsideButtonProps) {
  const dispatch = useAppDispatch()
  let btn = (
    <button className="bg-gray-600 h-[35px] text-white w-[100%]"
      onClick={() => dispatch(props.action())}>
      {props.title}
    </button>
  )
  return props.insideTable ? (
    <tr><td colSpan={9} className="bg-white pl-0 pr-0">
      {btn}
    </td></tr>
  ) : btn
}