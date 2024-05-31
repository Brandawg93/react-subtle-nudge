import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

import Circle from '../../components/circle'

const meta: Meta<typeof Circle> = {
  component: Circle,
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
    <div className={css.wrapper}>
      <Circle {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Circle>
    </div>
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
    <div className={css.wrapper}>
      <Circle {...args}>
        <input className={css.fancyInput} placeholder='Write Something!' type='text' />
      </Circle>
    </div>
  ),
}
