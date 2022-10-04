import "../src/input.css"
import "https://kit.fontawesome.com/89e8d497c2.js"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}