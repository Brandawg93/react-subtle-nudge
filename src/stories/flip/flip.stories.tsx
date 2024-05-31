import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Flip from '../../components/flip'

const meta: Meta<typeof Flip> = {
  component: Flip,
  title: 'Components/Flip',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Flip>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Flip {...args}>
      <button>Click Me!</button>
    </Flip>
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
    <Flip {...args}>
      <input placeholder='Write Something!' type='text' />
    </Flip>
  ),
}
