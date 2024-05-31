import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Pulse from '../../components/pulse'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Pulse',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Pulse>

export const Button: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Pulse {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Pulse>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Pulse {...args}>
        <input className={css.fancyInput} type='text' />
      </Pulse>
    </div>
  ),
}
