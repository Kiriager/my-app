import { Category } from "../../Note";

export function CategoryIcon(category: Category) {
  return (
    <td className="p-[8px]">
      <div className="text-xl text-neutral-200 bg-neutral-900 w-[36px] h-[36px] flex rounded-full">
        <i className={category.categoryIcon + " m-auto"}></i>
      </div>
    </td>
  )
}