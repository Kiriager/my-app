import { useState } from "react"
import { useAppSelector } from "../../../../app/hooks"
import { Note, noteService } from "../../Note"
import { CategoryIcon } from "../buttons/CategoryIcon"
import { DiscardFormButton } from "../buttons/DiscardFormButton"
import { SubmitFormButton } from "../buttons/SubmitFormButton"
import { Cell } from "../tables/Cell"
import { CategorySelect } from "./CategorySelect"
import { NoteFormInput } from "./NoteFormInput"

export interface FormProps {
  note?: Note
}

export function NoteForm(props: FormProps) {
  let defaultCategory = useAppSelector(state => {
    return state.notes.categoriesList[0].categoryName
  })
  const [name, setName] = useState(props.note ? props.note.name : "")
  const [categoryName, setCategoryName] = useState(props.note
    ? props.note.category.categoryName : defaultCategory)
  const [content, setContent] = useState(props.note ? props.note.content : "")

  return (
    <tr className="bg-neutral-300 border-y-[10px] border-white h-[70px]">
      {props.note === undefined
        ? <Cell heading={false} content="" />
        : <CategoryIcon {...props.note.category} />}

      <NoteFormInput name="name" callback={(e) => { setName(e.target.value) }} value={name} />
      <Cell heading={false} content={props.note ? noteService.printMyDate(props.note.createDate) : ""} />
      <CategorySelect callback={(e) => { setCategoryName(e.target.value) }} value={categoryName} />
      <NoteFormInput name="content" callback={(e) => { setContent(e.target.value) }} value={content} />
      <Cell heading={false} content={props.note ? noteService.extractDates(props.note) : ""} />

      {props.note === undefined
        ? <SubmitFormButton data={{ name: name, categoryName: categoryName, content: content }} />
        : <SubmitFormButton noteId={props.note.id}
          data={{ name: name, categoryName: categoryName, content: content }} />}

      {props.note === undefined
        ? <DiscardFormButton />
        : <DiscardFormButton noteId={props.note.id} />}

      <Cell heading={false} content="" />
    </tr>
  )
}