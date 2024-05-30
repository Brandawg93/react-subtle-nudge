import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../common.module.css'

import Spin from '../../components/spin'

const meta: Meta<typeof Spin> = {
  component: Spin,
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
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Spin {...args}>
        <button className={css.fancy_btn}>test</button>
      </Spin>
    </div>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Spin {...args}>
        <input type='text' />
      </Spin>
    </div>
  ),
}