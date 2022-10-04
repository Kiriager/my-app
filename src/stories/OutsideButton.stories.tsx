import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import {
  showCreateForm, switchTableArchiveStatus,
} from '../features/notes/notesSlice';
import { store } from "../app/store";
import { OutsideButton, OutsideButtonProps } from "../features/notes/components/buttons/OutsideButton";

export default {
  title: "Full-width-button",
  component: OutsideButton,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof OutsideButton>

const Template: ComponentStory<typeof OutsideButton> = (args: OutsideButtonProps) => {
  return <OutsideButton {...args} />
}

export const ShowCreateFormButton = Template.bind({})
ShowCreateFormButton.args = {
  title: "Create New Note",
  action: showCreateForm,
  insideTable: true
}

export const SwithTableArchiveStatusButton = Template.bind({})
SwithTableArchiveStatusButton.args = {
  title: "Create New Note",
  action: switchTableArchiveStatus,
  insideTable: false
}