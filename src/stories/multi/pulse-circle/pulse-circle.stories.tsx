import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../../common.module.css'

import Pulse from '../../../components/pulse'
import Circle from '../../../components/circle'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combination/Pulse&Circle',
  subcomponents: { Circle: Circle as React.ComponentType<unknown> },
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
        <Circle {...args}>
          <button className={css.fancyBtn}>Click Me!</button>
        </Circle>
      </Pulse>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Pulse {...args}>
        <Circle {...args}>
          <input className={css.fancyInput} type='text' />
        </Circle>
      </Pulse>
    </div>
  ),
}
