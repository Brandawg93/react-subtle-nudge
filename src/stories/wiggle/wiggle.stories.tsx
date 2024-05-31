import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Wiggle from '../../components/wiggle'

const meta: Meta<typeof Wiggle> = {
  component: Wiggle,
  title: 'Components/Wiggle',
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
        <button className={css.fancyBtn}>Click Me!</button>
      </Wiggle>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Wiggle {...args}>
        <input className={css.fancyInput} type='text' />
      </Wiggle>
    </div>
  ),
}
