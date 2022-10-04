export interface CellProps {
  content: string,
  heading: boolean
}

export function Cell(props: CellProps) {
  return (
    props.heading ? <th className="p-[8px] text-start box-border">{props.content}</th> :
      <td className="p-[8px] box-border">{props.content}</td>
  )
}