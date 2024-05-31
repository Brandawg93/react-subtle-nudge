import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

import Circle from '../../components/circle'

const meta: Meta<typeof Circle> = {
  component: Circle,
  decorators: [
    (Story) => (
      <div style={{ borderRadius: '5px' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Components/Circle',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Circle>

export const Button: Story = {
  args: {
    thickness: 2,
    color: '#ff0000',
    iterations: 0,
    duration: '2s',
    iterationDelay: '1s',
    reverse: false,
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Circle {...args}>
      <button className={css.fancyBtn}>Click Me!</button>
    </Circle>
  ),
}

export const Input: Story = {
  args: {
    thickness: 2,
    color: '#ff0000',
    iterations: 0,
    duration: '2s',
    iterationDelay: '1s',
    reverse: false,
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Circle {...args}>
      <input className={css.fancyInput} placeholder='Write Something!' type='text' />
    </Circle>
  ),
}
