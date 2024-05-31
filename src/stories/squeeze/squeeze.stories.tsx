import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

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
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Squeeze {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Squeeze>
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
      <Squeeze {...args}>
        <input className={css.fancyInput} placeholder='Write Something!' type='text' />
      </Squeeze>
    </div>
  ),
}
