import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Ping from '../../components/ping'

const meta: Meta<typeof Ping> = {
  component: Ping,
  title: 'Components/Ping',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Ping>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    color: '##e9e9e9',
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Ping {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Ping>
    </div>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    color: '##e9e9e9',
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Ping {...args}>
        <input className={css.fancyInput} type='text' />
      </Ping>
    </div>
  ),
}
