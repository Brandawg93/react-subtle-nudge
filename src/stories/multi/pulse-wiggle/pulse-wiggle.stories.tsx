import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Pulse from '../../../components/pulse'
import Wiggle from '../../../components/wiggle'

import { Button as PulseButton } from '../../pulse/pulse.stories'
import { Input as PulseInput } from '../../pulse/pulse.stories'
import { Button as WiggleButton } from '../../wiggle/wiggle.stories'
import { Input as WiggleInput } from '../../wiggle/wiggle.stories'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combinations/Pulse&Wiggle',
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
  render: () => (
    <Pulse {...PulseButton.args}>
      <Wiggle {...WiggleButton.args}>
        <button>Click Me!</button>
      </Wiggle>
    </Pulse>
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
    <Pulse {...PulseInput.args}>
      <Wiggle {...WiggleInput.args}>
        <input placeholder='Write Something!' type='text' />
      </Wiggle>
    </Pulse>
  ),
}
