import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import signCss from './sign.module.css'

import Swing from '../../components/swing'

const meta: Meta<typeof Swing> = {
  component: Swing,
  title: 'Components/Swing',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Swing>

export const Button: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Swing {...args}>
      <button>Click Me!</button>
    </Swing>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Swing {...args}>
      <input placeholder='Write Something!' type='text' />
    </Swing>
  ),
}

export const Sign: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: (args) => (
    <Swing {...args}>
      <div className={signCss.arrowWrapper}>
        <div className={signCss.arrowUp}></div>
        <div className={signCss.arrowUpInner}></div>
      </div>
      <div className={signCss.box}>
        <span>Test Sign!</span>
      </div>
    </Swing>
  ),
}
