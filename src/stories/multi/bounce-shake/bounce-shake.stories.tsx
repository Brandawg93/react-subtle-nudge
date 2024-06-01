import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Bounce from '../../../components/bounce'
import Shake from '../../../components/shake'

import { Button as ShakeButton } from '../../shake/shake.stories'
import { Input as ShakeInput } from '../../shake/shake.stories'
import { Button as BounceButton } from '../../bounce/bounce.stories'
import { Input as BounceInput } from '../../bounce/bounce.stories'

const meta: Meta<typeof Bounce> = {
  component: Bounce,
  title: 'Components/Combinations/Bounce&Shake',
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
  },

  render: () => (
    <Bounce {...BounceButton.args}>
      <Shake {...ShakeButton.args}>
        <button>Click Me!</button>
      </Shake>
    </Bounce>
  ),
}

export const Input: Story = {
  args: {
    duration: '1s',
    iterations: 0,
    iterationDelay: '1s',
    reverse: false,
  },

  render: () => (
    <Bounce {...BounceInput.args}>
      <Shake {...ShakeInput.args}>
        <input placeholder='Write Something!' type='text' />
      </Shake>
    </Bounce>
  ),
}
