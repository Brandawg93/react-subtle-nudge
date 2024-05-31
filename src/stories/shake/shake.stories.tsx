import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Shake from '../../components/shake'

const meta: Meta<typeof Shake> = {
  component: Shake,
  title: 'Components/Shake',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Shake>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Shake {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Shake>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Shake {...args}>
        <input className={css.fancyInput} type='text' />
      </Shake>
    </div>
  ),
}
