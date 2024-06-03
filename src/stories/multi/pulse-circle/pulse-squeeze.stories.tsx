import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Pulse from '../../../components/pulse'
import Squeeze from '../../../components/squeeze'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combinations/Pulse&Squeeze',
  subcomponents: { Squeeze: Squeeze as React.ComponentType<unknown> },
  decorators: [
    (Story) => (
      <div style={{ borderRadius: '5px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Pulse>

export const Button: Story = {
  render: (args) => (
    <Squeeze {...args}>
      <Pulse {...args}>
        <button>Click Me!</button>
      </Pulse>
    </Squeeze>
  ),
}

export const Input: Story = {
  render: (args) => (
    <Pulse {...args}>
      <Squeeze {...args}>
        <input placeholder='Write Something!' type='text' />
      </Squeeze>
    </Pulse>
  ),
}
