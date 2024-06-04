import React from 'react'
import { render, screen } from '@testing-library/react'
import Flip from '../../src/components/flip'

const flip = (
  <Flip>
    <div>Flip Component</div>
  </Flip>
)

describe('Flip component', () => {
  it('renders without crashing', () => {
    render(flip)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(flip)
    const flipComponent = screen.getByTestId('animation-component')
    expect(flipComponent).toHaveStyle('--duration: 1s')
    expect(flipComponent).toHaveStyle('--iterations: infinite')
    expect(flipComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Flip duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Flip Component</div>
      </Flip>
    )
    const flipComponent = screen.getByTestId('animation-component')
    expect(flipComponent).toHaveStyle('--duration: 2s')
    expect(flipComponent).toHaveStyle('--iterations: 2')
    expect(flipComponent).toHaveStyle('--direction: reverse')
  })
})
