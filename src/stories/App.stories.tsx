import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from 'react-redux';
import App from "../App";
import { store } from "../app/store";


export default {
  title: "App",
  component: App,
  decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		)
	]
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => {
  return <App />
}

export const InitialApp = Template.bind({})

