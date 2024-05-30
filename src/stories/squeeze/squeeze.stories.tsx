import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Squeeze from '../../components/squeeze'

const meta: Meta<typeof Squeeze> = {
  component: Squeeze,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Squeeze>

export const Button: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Squeeze {...args}>
        <button className={css.fancy_btn}>test</button>
      </Squeeze>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Squeeze {...args}>
        <input type='text' />
      </Squeeze>
    </div>
  ),
}
