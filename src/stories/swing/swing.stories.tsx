import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Swing from '../../components/swing'

const meta: Meta<typeof Swing> = {
  component: Swing,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Swing>

export const Button: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Swing {...args}>
        <button className={css.fancy_btn}>test</button>
      </Swing>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Swing {...args}>
        <input type='text' />
      </Swing>
    </div>
  ),
}
