import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { InputProps, NoteFormInput } from "../features/notes/components/forms/NoteFormInput";


export default {
  title: "Form-text-input",
  component: NoteFormInput,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof NoteFormInput>

const Template: ComponentStory<typeof NoteFormInput> = (args: InputProps) => {
  return <NoteFormInput {...args} />
}

export const NameInput = Template.bind({})
NameInput.args = {
  name: "name",
  callback: () => {},
  value: "Note Name"
}

export const ContentInput = Template.bind({})
ContentInput.args = {
  name: "content",
  callback: () => {},
  value: "Note Content"
}
