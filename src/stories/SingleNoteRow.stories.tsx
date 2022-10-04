import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { NoteTableRow } from "../features/notes/components/tables/NoteTableRow";
import { initialNotesList, Note } from "../features/notes/Note";


export default {
  title: "Single-note-table-row",
  component: NoteTableRow,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof NoteTableRow>

const Template: ComponentStory<typeof NoteTableRow> = (args: Note) => {
  return <NoteTableRow {...args} />
}

export const FirstNoteRow = Template.bind({})
FirstNoteRow.args = initialNotesList[0]
