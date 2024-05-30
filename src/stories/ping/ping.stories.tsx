import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Ping from '../../components/ping'

const meta: Meta<typeof Ping> = {
  component: Ping,
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
  render: (args) => (
    <div className={css.wrapper}>
      <Ping {...args}>
        <button className={css.fancy_btn}>test</button>
      </Ping>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Ping {...args}>
        <input type='text' />
      </Ping>
    </div>
  ),
}
