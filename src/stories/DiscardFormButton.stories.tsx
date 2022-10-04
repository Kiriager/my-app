import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoteButton, ButtonProps } from "../features/notes/components/buttons/NoteButton"
import { iconTitles } from "../features/notes/components/buttons/ButtonIcon";
import { Provider, useDispatch } from 'react-redux';
import {
  switchArchiveStatus, remove, initiateEditNote,
} from '../features/notes/notesSlice';
import { store } from "../app/store";
import React from "react";
import { DiscardFormButton, DiscardFormButtonProps } from "../features/notes/components/buttons/DiscardFormButton";

export default {
  title: "Discard-form-button",
  component: DiscardFormButton,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as ComponentMeta<typeof DiscardFormButton>

const Template: ComponentStory<typeof DiscardFormButton> = (args: DiscardFormButtonProps) => {
  return <DiscardFormButton {...args} />
}

export const DiscardEditFormButton = Template.bind({})
DiscardEditFormButton.args = {
  noteId: 6
}

export const DiscardCreateFormButton = Template.bind({})
DiscardEditFormButton.args = {}