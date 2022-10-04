import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoteButton, ButtonProps } from "../features/notes/components/buttons/NoteButton"
import { iconTitles } from "../features/notes/components/buttons/ButtonIcon";
import { Provider, useDispatch } from 'react-redux';
import {
  switchArchiveStatus, remove, initiateEditNote,
} from '../features/notes/notesSlice';
import { store } from "../app/store";
import React from "react";

export default {
  title: "Note-button",
  component: NoteButton,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof NoteButton>

const Template: ComponentStory<typeof NoteButton> = (args: ButtonProps) => {
  const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(args.action(args.noteId))
    })
  return <NoteButton {...args} />
}

export const EditButton = Template.bind({})
EditButton.args = {
  title: "Edit Note",
  noteId: 5,
  icon: iconTitles.edit,
  action: initiateEditNote
}

export const DeleteButton = Template.bind({})
DeleteButton.args = {
  title: "Delete Note",
  noteId: 5,
  icon: iconTitles.delete,
  action: remove
}

export const ArchiveButton = Template.bind({})
ArchiveButton.args = {
  title: "Archive/Unarchive Note",
  noteId: 5,
  icon: iconTitles.archive,
  action: switchArchiveStatus
}