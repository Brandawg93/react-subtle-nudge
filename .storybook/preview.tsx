import React from 'react'
import type { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls } from '@storybook/blocks'
import ReactGA from 'react-ga4'
import '../src/stories/common.module.css'

if (process.env.NODE_ENV !== 'development') ReactGA.initialize('G-7P3LB8SWYT')

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: 'inline-block' }}>
        <Story />
      </div>
    ),
  ],
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
