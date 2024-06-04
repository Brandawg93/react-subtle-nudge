import React from 'react'
import { render, screen } from '@testing-library/react'
import Squeeze from '../../src/components/squeeze'

const squeeze = (
  <Squeeze>
    <div>Squeeze Component</div>
  </Squeeze>
)

describe('Squeeze component', () => {
  it('renders without crashing', () => {
    render(squeeze)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(squeeze)
    const squeezeComponent = screen.getByTestId('animation-component')
    expect(squeezeComponent).toHaveStyle('--duration: 1s')
    expect(squeezeComponent).toHaveStyle('--iterations: infinite')
    expect(squeezeComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Squeeze duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Squeeze Component</div>
      </Squeeze>
    )
    const squeezeComponent = screen.getByTestId('animation-component')
    expect(squeezeComponent).toHaveStyle('--duration: 2s')
    expect(squeezeComponent).toHaveStyle('--iterations: 2')
    expect(squeezeComponent).toHaveStyle('--direction: reverse')
  })
})
