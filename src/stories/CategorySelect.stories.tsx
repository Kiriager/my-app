import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { CategorySelect, CategorySelectProps } from "../features/notes/components/forms/CategorySelect";

export default {
  title: "Form-category-select",
  component: CategorySelect,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof CategorySelect>

const Template: ComponentStory<typeof CategorySelect> = (args: CategorySelectProps) => {
  return <CategorySelect {...args} />
}

export const FirstNoteRow = Template.bind({})
FirstNoteRow.args = {
  value: "Task",
  callback: () => {}
}
