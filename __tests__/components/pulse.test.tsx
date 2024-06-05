import React from 'react'
import { render, screen } from '@testing-library/react'
import Pulse from '../../src/components/pulse'

const pulse = (
  <Pulse>
    <div>Pulse Component</div>
  </Pulse>
)

describe('Pulse component', () => {
  it('renders without crashing', () => {
    render(pulse)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(pulse)
    const pulseComponent = screen.getByTestId('animation-component')
    expect(pulseComponent).toHaveStyle('--duration: 1s')
    expect(pulseComponent).toHaveStyle('--iterations: infinite')
    expect(pulseComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Pulse duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Pulse Component</div>
      </Pulse>
    )
    const pulseComponent = screen.getByTestId('animation-component')
    expect(pulseComponent).toHaveStyle('--duration: 2s')
    expect(pulseComponent).toHaveStyle('--iterations: 2')
    expect(pulseComponent).toHaveStyle('--direction: reverse')
  })
})
