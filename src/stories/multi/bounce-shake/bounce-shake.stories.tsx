import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
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
  render: (args) => (
    <div className={css.wrapper}>
      <Bounce {...args}>
        <Shake {...args}>
          <input className={css.fancyInput} type='text' />
        </Shake>
      </Bounce>
    </div>
  ),
}
