import { useAppSelector } from '../../../../app/hooks';

export interface CategorySelectProps {
  value: string,
  callback: React.ChangeEventHandler<HTMLSelectElement>
}

export function CategorySelect(props: CategorySelectProps) {
  return (
    <td className="p-[8px] h-[60px]">
      <select name="category" value={props.value}
        className="h-[100%] w-[100%] border-2 border-white focus:border-neutral-500 transition duration-1000 outline-0"
        onChange={props.callback}>
        <CategoryOptions />
      </select>
    </td>
  )
}

function CategoryOptions() {
  let categories = useAppSelector(state => state.notes.categoriesList)
  return (
    <>
      {categories.map((category, index) => {
        return (
          <option key={"cat" + index} value={category.categoryName}>
            {category.categoryName}
          </option>
        )
      })}
    </>
  )
}
