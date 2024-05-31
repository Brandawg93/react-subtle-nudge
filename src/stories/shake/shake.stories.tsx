import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Shake from '../../components/shake'

const meta: Meta<typeof Shake> = {
  component: Shake,
  title: 'Components/Shake',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Shake>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Shake {...args}>
      <button>Click Me!</button>
    </Shake>
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
    <Shake {...args}>
      <input placeholder='Write Something!' type='text' />
    </Shake>
  ),
}
