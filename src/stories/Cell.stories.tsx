import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Cell, CellProps } from "../features/notes/components/tables/Cell"

export default {
  title: "Table-cell",
  component: Cell
} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = (args: CellProps) => {
  return <Cell content={args.content} heading={args.heading}/>
} 

export const DataCell = Template.bind({})
DataCell.args = {
  content: "Data cell content",
  heading: false
}

export const HeadingCell = Template.bind({})
HeadingCell.args = {
  content: "Heading cell content",
  heading: true
}
 