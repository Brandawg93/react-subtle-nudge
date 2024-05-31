import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'

import Flip from '../../components/flip'

const meta: Meta<typeof Flip> = {
  component: Flip,
  title: 'Components/Flip',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Flip>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
  },

  render: (args) => (
    <div className={css.wrapper}>
      <Flip {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Flip>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Flip {...args}>
        <input className={css.fancyInput} type='text' />
      </Flip>
    </div>
  ),
}
