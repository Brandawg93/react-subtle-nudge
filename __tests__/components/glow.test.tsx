import React from 'react'
import { render, screen } from '@testing-library/react'
import Glow from '../../src/components/glow'

const glow = (
  <Glow>
    <div>Glow Component</div>
  </Glow>
)

describe('Glow component', () => {
  it('renders without crashing', () => {
    render(glow)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(glow)
    const glowComponent = screen.getByTestId('animation-component')
    expect(glowComponent).toHaveStyle('--duration: 1s')
    expect(glowComponent).toHaveStyle('--iterations: infinite')
    expect(glowComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Glow duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Glow Component</div>
      </Glow>
    )
    const glowComponent = screen.getByTestId('animation-component')
    expect(glowComponent).toHaveStyle('--duration: 2s')
    expect(glowComponent).toHaveStyle('--iterations: 2')
    expect(glowComponent).toHaveStyle('--direction: reverse')
  })
})
