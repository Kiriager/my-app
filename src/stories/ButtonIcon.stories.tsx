import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonIcon, IconProps, iconTitles } from "../features/notes/components/buttons/ButtonIcon"

export default {
  title: "Button-icon",
  component: ButtonIcon
} as ComponentMeta<typeof ButtonIcon>

const Template: ComponentStory<typeof ButtonIcon> = (args: IconProps) => {
  return <ButtonIcon iconTitle={args.iconTitle} light={args.light}/>
} 

export const EditNoteButtonIcon = Template.bind({})
EditNoteButtonIcon.args = {
  iconTitle: iconTitles.edit,
  light: false
}

export const DeleteNoteButtonIcon = Template.bind({})
DeleteNoteButtonIcon.args = {
  iconTitle: iconTitles.delete,
  light: false
}

export const DeleteAllNotesButtonIcon = Template.bind({})
DeleteAllNotesButtonIcon.args = {
  iconTitle: iconTitles.delete,
  light: true
}

export const ArchiveNoteButtonIcon = Template.bind({})
ArchiveNoteButtonIcon.args = {
  iconTitle: iconTitles.archive,
  light: false
}

export const ArchiveAllNotesButtonIcon = Template.bind({})
ArchiveAllNotesButtonIcon.args = {
  iconTitle: iconTitles.archive,
  light: true
}

