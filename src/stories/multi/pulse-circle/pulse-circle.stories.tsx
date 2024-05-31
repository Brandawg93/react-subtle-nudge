import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../../common.module.css'

import Pulse from '../../../components/pulse'
import Circle from '../../../components/circle'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combination/Pulse&Circle',
  subcomponents: { Circle: Circle as React.ComponentType<unknown> },
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
    <div className={css.wrapper}>
      <Pulse {...args}>
        <Circle {...args}>
          <button className={css.fancyBtn}>Click Me!</button>
        </Circle>
      </Pulse>
    </div>
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
    <div className={css.wrapper}>
      <Pulse {...args}>
        <Circle {...args}>
          <input className={css.fancyInput} placeholder='Write Something!' type='text' />
        </Circle>
      </Pulse>
    </div>
  ),
}
