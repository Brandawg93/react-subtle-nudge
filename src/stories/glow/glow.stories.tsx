import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Glow from '../../components/glow'

const meta: Meta<typeof Glow> = {
  component: Glow,
  decorators: [
    (Story) => (
      <div style={{ borderRadius: '5px' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Components/Glow',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Glow>

export const Button: Story = {
  args: {
    duration: '4s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    thickness: 5,
    color: '#ff0000',
    initialDelay: '0s',
    disabled: false,
  },

  render: (args) => (
    <Glow {...args}>
      <button>Click Me!</button>
    </Glow>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Glow {...args}>
      <input placeholder='Write Something!' type='text' />
    </Glow>
  ),
}
