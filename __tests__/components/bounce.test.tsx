import React from 'react'
import { render, screen } from '@testing-library/react'
import Bounce from '../../src/components/bounce'

const bounce = (
  <Bounce>
    <div>Bounce Component</div>
  </Bounce>
)

describe('Bounce component', () => {
  it('renders without crashing', () => {
    render(bounce)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(bounce)
    const bounceComponent = screen.getByTestId('animation-component')
    expect(bounceComponent).toHaveStyle('--duration: 1s')
    expect(bounceComponent).toHaveStyle('--iterations: infinite')
    expect(bounceComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Bounce duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Bounce Component</div>
      </Bounce>
    )
    const bounceComponent = screen.getByTestId('animation-component')
    expect(bounceComponent).toHaveStyle('--duration: 2s')
    expect(bounceComponent).toHaveStyle('--iterations: 2')
    expect(bounceComponent).toHaveStyle('--direction: reverse')
  })
})
