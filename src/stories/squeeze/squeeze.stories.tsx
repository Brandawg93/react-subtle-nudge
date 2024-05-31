import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Squeeze from '../../components/squeeze'

const meta: Meta<typeof Squeeze> = {
  component: Squeeze,
  title: 'Components/Squeeze',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Squeeze>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Squeeze {...args}>
      <button>Click Me!</button>
    </Squeeze>
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
    <Squeeze {...args}>
      <input placeholder='Write Something!' type='text' />
    </Squeeze>
  ),
}
