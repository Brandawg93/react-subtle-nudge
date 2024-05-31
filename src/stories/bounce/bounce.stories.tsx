import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Bounce from '../../components/bounce'

const meta: Meta<typeof Bounce> = {
  component: Bounce,
  title: 'Components/Bounce',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Bounce>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Bounce {...args}>
      <button>Click Me!</button>
    </Bounce>
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
    <Bounce {...args}>
      <input placeholder='Write Something!' type='text' />
    </Bounce>
  ),
}
