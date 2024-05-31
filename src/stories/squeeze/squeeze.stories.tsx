import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Squeeze from '../../components/squeeze'

const meta: Meta<typeof Squeeze> = {
  component: Squeeze,
  title: 'Components/Squeeze',
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
        <button className={css.fancyBtn}>Click Me!</button>
      </Squeeze>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Squeeze {...args}>
        <input className={css.fancyInput} type='text' />
      </Squeeze>
    </div>
  ),
}
