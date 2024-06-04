import React from 'react'
import { render, screen } from '@testing-library/react'
import Circle from '../../src/components/circle'

const circle = (
  <Circle>
    <div>Circle Component</div>
  </Circle>
)

describe('Circle component', () => {
  it('renders without crashing', () => {
    render(circle)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(circle)
    const circleComponent = screen.getByTestId('animation-component')
    expect(circleComponent).toHaveStyle('--duration: 1s')
    expect(circleComponent).toHaveStyle('--iterations: infinite')
    expect(circleComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Circle duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Circle Component</div>
      </Circle>
    )
    const circleComponent = screen.getByTestId('animation-component')
    expect(circleComponent).toHaveStyle('--duration: 2s')
    expect(circleComponent).toHaveStyle('--iterations: 2')
    expect(circleComponent).toHaveStyle('--direction: reverse')
  })
})
