import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Flash from '../../components/flash'

const meta: Meta<typeof Flash> = {
  component: Flash,
  title: 'Components/Flash',
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
        <button className={css.fancyBtn}>Click Me!</button>
      </Flash>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Flash {...args}>
        <input className={css.fancyInput} type='text' />
      </Flash>
    </div>
  ),
}
