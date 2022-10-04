import { useAppSelector } from "../../../../app/hooks"
import { noteService, CategoryStats } from "../../Note"
import { CategoryIcon } from "../buttons/CategoryIcon"
import { Cell } from "./Cell"

export function StatsTable() {
  const notes = useAppSelector(state => state.notes.notesList)
  const categories = useAppSelector(state => state.notes.categoriesList)

  return (
    <table className="border-spacing-0 mt-14 w-full">
      <thead><tr className="text-white bg-gray-800 h-[70px]">
        <Cell heading={true} content="" />
        <Cell heading={true} content="Note Category" />
        <Cell heading={true} content="Active" />
        <Cell heading={true} content="Archived" />
      </tr></thead>
      <tbody>
        {categories.map((category, index) => {
          return (<CategoryStatsRow
            {...noteService.getCategoryStats(notes, category)} key={"stats" + index} />)
        })}
      </tbody>
    </table>
  )
}

function CategoryStatsRow(categoryStats: CategoryStats) {
  return (
    <tr className="bg-neutral-300 border-y-[10px] border-white h-[70px]">
      <CategoryIcon {...categoryStats.category} />
      <Cell heading={false} content={categoryStats.category.categoryName} />
      <Cell heading={false} content={categoryStats.active.toString()} />
      <Cell heading={false} content={categoryStats.archived.toString()} />
    </tr>
  )
}