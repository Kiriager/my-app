import { ComponentMeta, ComponentStory } from "@storybook/react";
import { iconTitles } from "../features/notes/components/buttons/ButtonIcon";
import { Provider } from 'react-redux';
import { removeAll, setAllNotesArchiveStatus } from '../features/notes/notesSlice';
import { store } from "../app/store";
import { HeadButton, HeadButtonProps } from "../features/notes/components/buttons/HeadButton";

export default {
  title: "Table-heading-button",
  component: HeadButton,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof HeadButton>

const Template: ComponentStory<typeof HeadButton> = (args: HeadButtonProps) => {
  return <HeadButton {...args} />
}

export const DeleteAllButton = Template.bind({})
DeleteAllButton.args = {
  status: true,
  title: "Delete All Notes In Table",
  icon: iconTitles.delete,
  action: removeAll
}

export const ArchiveAllButton = Template.bind({})
ArchiveAllButton.args = {
  status: false,
  title: "Archive/Unarchive All",
  icon: iconTitles.archive,
  action: setAllNotesArchiveStatus
}