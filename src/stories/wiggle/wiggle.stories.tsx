import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Wiggle from '../../components/wiggle'

const meta: Meta<typeof Wiggle> = {
  component: Wiggle,
  title: 'Components/Wiggle',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Wiggle>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Wiggle {...args}>
      <button>Click Me!</button>
    </Wiggle>
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
    <Wiggle {...args}>
      <input placeholder='Write Something!' type='text' />
    </Wiggle>
  ),
}
