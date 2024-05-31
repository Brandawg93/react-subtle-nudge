import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import css from '../common.module.css'
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
    <div className={css.wrapper}>
      <Swing {...args}>
        <button className={css.fancyBtn}>Click Me!</button>
      </Swing>
    </div>
  ),
}

export const Input: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Swing {...args}>
        <input className={css.fancyInput} type='text' />
      </Swing>
    </div>
  ),
}

export const Sign: Story = {
  render: (args) => (
    <div className={css.wrapper}>
      <Swing {...args}>
        <div className={signCss.arrowWrapper}>
          <div className={signCss.arrowUp}></div>
          <div className={signCss.arrowUpInner}></div>
        </div>
        <div className={signCss.box}>
          <span>Test Sign!</span>
        </div>
      </Swing>
    </div>
  ),
}
