import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Flash from '../../components/flash'

const meta: Meta<typeof Flash> = {
  component: Flash,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Flash>

export const Button: Story = {
  args: {
    duration: '2s',
    iterations: 0,
    iterationDelay: '1s',
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Flash {...args}>
        <button className={css.fancy_btn}>test</button>
      </Flash>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Flash {...args}>
        <input type='text' />
      </Flash>
    </div>
  ),
}
