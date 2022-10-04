import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { StatsTable } from "../features/notes/components/tables/StatsTable";


export default {
  title: "Stats-table",
  component: StatsTable,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof StatsTable>

const Template: ComponentStory<typeof StatsTable> = () => {
  return <StatsTable />
}

export const InitialStatsTable = Template.bind({})

