import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Pulse from '../../../components/pulse'
import Circle from '../../../components/circle'

import { Button as CircleButton } from '../../circle/circle.stories'
import { Input as CircleInput } from '../../circle/circle.stories'
import { Button as PulseButton } from '../../pulse/pulse.stories'
import { Input as PulseInput } from '../../pulse/pulse.stories'

const meta: Meta<typeof Pulse> = {
  component: Pulse,
  title: 'Components/Combinations/Pulse&Circle',
  subcomponents: { Circle: Circle as React.ComponentType<unknown> },
  decorators: [
    (Story) => (
      <div style={{ borderRadius: '5px' }}>
        <Story />
      </div>
    ),
  ],
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
    <Circle {...CircleButton.args}>
      <Pulse {...PulseButton.args}>
        <button>Click Me!</button>
      </Pulse>
    </Circle>
  ),
}

export const Input: Story = {
  render: () => (
    <Pulse {...PulseInput.args}>
      <Circle {...CircleInput.args}>
        <input placeholder='Write Something!' type='text' />
      </Circle>
    </Pulse>
  ),
}
