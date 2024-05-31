import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import css from '../../common.module.css'

import Bounce from '../../../components/bounce'
import Shake from '../../../components/shake'

const meta: Meta<typeof Bounce> = {
  component: Bounce,
  title: 'Components/Combination/Bounce&Shake',
  subcomponents: { Shake: Shake as React.ComponentType<unknown> },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Bounce>

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
    <div className={css.wrapper}>
      <Bounce {...args}>
        <Shake {...args}>
          <button className={css.fancyBtn}>Click Me!</button>
        </Shake>
      </Bounce>
    </div>
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
    <div className={css.wrapper}>
      <Bounce {...args}>
        <Shake {...args}>
          <input className={css.fancyInput} placeholder='Write Something!' type='text' />
        </Shake>
      </Bounce>
    </div>
  ),
}
