export interface InputProps {
  callback: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
  name: string
}

export function NoteFormInput(props: InputProps) {
  return (
    <td className="p-[8px] h-[60px] box-border">
      <input type="text" name={props.name} autoComplete="off"
        value={props.value}
        className="h-[100%] w-[100%] border-2 border-white focus:border-neutral-500 transition duration-1000 outline-0"
        onChange={props.callback} />
    </td>
  )
}