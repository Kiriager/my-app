import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CategoryIcon } from "../features/notes/components/CategoryIcon"
import { Category, categoriesList } from "../features/notes/Note";

export default {
  title: "Category-icon",
  component: CategoryIcon
} as ComponentMeta<typeof CategoryIcon>

const Template: ComponentStory<typeof CategoryIcon> = (args: Category) => {
  return <CategoryIcon categoryIcon={args.categoryIcon} categoryName={args.categoryName}/>
}

export const TaskIcon = Template.bind({})
TaskIcon.args = categoriesList[0]

export const IdeaIcon = Template.bind({})
IdeaIcon.args = categoriesList[1]

export const RandomThoughtIcon = Template.bind({})
RandomThoughtIcon.args = categoriesList[2]
 