import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Pulse from '../../../components/pulse'
import Wiggle from '../../../components/wiggle'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combination/Pulse&Wiggle',
  subcomponents: { Wiggle: Wiggle as React.ComponentType<unknown> },
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
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Pulse {...args}>
      <Wiggle {...args}>
        <button>Click Me!</button>
      </Wiggle>
    </Pulse>
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
    <Pulse {...args}>
      <Wiggle {...args}>
        <input placeholder='Write Something!' type='text' />
      </Wiggle>
    </Pulse>
  ),
}
