import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Wiggle from '../../components/wiggle'

const meta: Meta<typeof Wiggle> = {
  component: Wiggle,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Wiggle>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Wiggle {...args}>
        <button className={css.fancy_btn}>test</button>
      </Wiggle>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Wiggle {...args}>
        <input type='text' />
      </Wiggle>
    </div>
  ),
}
