import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { NotesTable } from "../features/notes/components/tables/NotesTable";


export default {
  title: "Notes-table",
  component: NotesTable,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof NotesTable>

const Template: ComponentStory<typeof NotesTable> = () => {
  return <NotesTable />
}

export const InitialNotesTable = Template.bind({})

