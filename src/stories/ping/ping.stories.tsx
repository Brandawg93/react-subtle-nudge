import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Ping from '../../components/ping'

const meta: Meta<typeof Ping> = {
  component: Ping,
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
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
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
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Ping {...args}>
      <input placeholder='Write Something!' type='text' />
    </Ping>
  ),
}
