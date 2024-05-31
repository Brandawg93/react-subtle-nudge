import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

import Pulse from '../../components/pulse'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Pulse',
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
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Pulse {...args}>
      <button className={css.fancyBtn}>Click Me!</button>
    </Pulse>
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
    <Pulse {...args}>
      <input className={css.fancyInput} placeholder='Write Something!' type='text' />
    </Pulse>
  ),
}
