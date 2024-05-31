import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
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
    iterationDelay: '1s',
    reverse: false,
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Flip {...args}>
      <button className={css.fancyBtn}>Click Me!</button>
    </Flip>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
    onAnimationStart: fn(),
    onAnimationEnd: fn(),
  },

  render: (args) => (
    <Flip {...args}>
      <input className={css.fancyInput} placeholder='Write Something!' type='text' />
    </Flip>
  ),
}
