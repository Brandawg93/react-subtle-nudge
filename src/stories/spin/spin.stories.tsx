import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Spin from '../../components/spin'

const meta: Meta<typeof Spin> = {
  component: Spin,
  title: 'Components/Spin',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Spin>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Spin {...args}>
      <button>Click Me!</button>
    </Spin>
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
    <Spin {...args}>
      <input placeholder='Write Something!' type='text' />
    </Spin>
  ),
}
