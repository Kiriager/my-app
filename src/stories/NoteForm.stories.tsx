import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { NoteForm, FormProps } from "../features/notes/components/forms/NoteForm";
import { NoteTableRow } from "../features/notes/components/tables/NoteTableRow";
import { initialNotesList, Note } from "../features/notes/Note";


export default {
  title: "Note-form-table-row",
  component: NoteForm,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof NoteForm>

const Template: ComponentStory<typeof NoteForm> = (args: FormProps) => {
  return <NoteForm {...args} />
}

export const EditForm = Template.bind({})
EditForm.args = { note: initialNotesList[0] }

export const CreateForm = Template.bind({})
CreateForm.args = { }
