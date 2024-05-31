import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

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
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Bounce {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Bounce>
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
      <Bounce {...args}>
        <input className={css.fancyInput} placeholder='Write Something!' type='text' />
      </Bounce>
    </div>
  ),
}

export const Div: Story = {
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
      <Bounce {...args}>
        <div className={css.fancyDiv}>test</div>
      </Bounce>
    </div>
  ),
}
