import type { Preview } from '@storybook/react'
import ReactGA from 'react-ga4'

ReactGA.initialize('G-7P3LB8SWYT')

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
