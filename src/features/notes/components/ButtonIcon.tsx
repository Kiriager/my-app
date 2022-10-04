export interface IconProps {
  iconTitle: string,
  light: boolean
}

export function ButtonIcon(props: IconProps) {
  let style = props.light ? "text-neutral-100 hover:text-neutral-400 text-xl "
    : "text-gray-800 hover:text-gray-400 text-xl "
  return (
    <i className={style + props.iconTitle}></i>
  )
}

export const iconTitles = {
  archive: "fa-solid fa-box-archive",
  edit: "fa-solid fa-pen-to-square",
  delete: "fa-solid fa-trash"
}