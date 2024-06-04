import React from 'react'
import { render, screen } from '@testing-library/react'
import Swing from '../../src/components/swing'

const swing = (
  <Swing>
    <div>Swing Component</div>
  </Swing>
)

describe('Swing component', () => {
  it('renders without crashing', () => {
    render(swing)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(swing)
    const swingComponent = screen.getByTestId('animation-component')
    expect(swingComponent).toHaveStyle('--duration: 1s')
    expect(swingComponent).toHaveStyle('--iterations: infinite')
    expect(swingComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Swing duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Swing Component</div>
      </Swing>
    )
    const swingComponent = screen.getByTestId('animation-component')
    expect(swingComponent).toHaveStyle('--duration: 2s')
    expect(swingComponent).toHaveStyle('--iterations: 2')
    expect(swingComponent).toHaveStyle('--direction: reverse')
  })
})
