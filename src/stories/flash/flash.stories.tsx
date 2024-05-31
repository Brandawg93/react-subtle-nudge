import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

import Flash from '../../components/flash'

const meta: Meta<typeof Flash> = {
  component: Flash,
  title: 'Components/Flash',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Flash>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Flash {...args}>
      <button className={css.fancyBtn}>Click Me!</button>
    </Flash>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Flash {...args}>
      <input className={css.fancyInput} placeholder='Write Something!' type='text' />
    </Flash>
  ),
}
