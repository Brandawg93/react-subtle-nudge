import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Ping from '../../components/ping'

const meta: Meta<typeof Ping> = {
  component: Ping,
  decorators: [
    (Story) => (
      <div style={{ borderRadius: '5px' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Components/Ping',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Ping>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    color: '#e9e9e9',
    scale: 1.5,
  },

  render: (args) => (
    <Ping {...args}>
      <button>Click Me!</button>
    </Ping>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    color: '#e9e9e9',
    scale: 1.5,
  },

  render: (args) => (
    <Ping {...args}>
      <input placeholder='Write Something!' type='text' />
    </Ping>
  ),
}
