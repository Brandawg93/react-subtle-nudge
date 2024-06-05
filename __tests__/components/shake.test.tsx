import React from 'react'
import { render, screen } from '@testing-library/react'
import Shake from '../../src/components/shake'

const shake = (
  <Shake>
    <div>Shake Component</div>
  </Shake>
)

describe('Shake component', () => {
  it('renders without crashing', () => {
    render(shake)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(shake)
    const shakeComponent = screen.getByTestId('animation-component')
    expect(shakeComponent).toHaveStyle('--duration: 1s')
    expect(shakeComponent).toHaveStyle('--iterations: infinite')
    expect(shakeComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Shake duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Shake Component</div>
      </Shake>
    )
    const shakeComponent = screen.getByTestId('animation-component')
    expect(shakeComponent).toHaveStyle('--duration: 2s')
    expect(shakeComponent).toHaveStyle('--iterations: 2')
    expect(shakeComponent).toHaveStyle('--direction: reverse')
  })
})
