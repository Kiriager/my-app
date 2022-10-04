import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { SubmitFormButton, SubmitFormButtonProps } from "../features/notes/components/buttons/SubmitFormButton";

export default {
  title: "Submit-form-button",
  component: SubmitFormButton,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as ComponentMeta<typeof SubmitFormButton>

const Template: ComponentStory<typeof SubmitFormButton> = (args: SubmitFormButtonProps) => {
  return <SubmitFormButton {...args} />
}

export const SubmitEditFormButton = Template.bind({})
SubmitEditFormButton.args = {
  noteId: 6,
  data: {
    name: "New Name Of Note",
    categoryName: "Task",
    content: "New Content Of Note"
  }
}

export const SubmitCreateFormButton = Template.bind({})
SubmitCreateFormButton.args = {
  data: {
    name: "Name Of New Note",
    categoryName: "Task",
    content: "Content Of New Note"
  }
}