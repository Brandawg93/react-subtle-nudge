import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../../common.module.css'

import Pulse from '../../../components/pulse'
import Wiggle from '../../../components/wiggle'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combination/Pulse&Wiggle',
  subcomponents: { Wiggle: Wiggle as React.ComponentType<unknown> },
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
        <Wiggle {...args}>
          <button className={css.fancyBtn}>Click Me!</button>
        </Wiggle>
      </Pulse>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Pulse {...args}>
        <Wiggle {...args}>
          <input className={css.fancyInput} type='text' />
        </Wiggle>
      </Pulse>
    </div>
  ),
}
