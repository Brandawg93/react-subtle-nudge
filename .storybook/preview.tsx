import React from 'react'
import type { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls } from '@storybook/blocks'
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
    docs: {
      controls: { exclude: ['children'] },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },
}

export default preview
