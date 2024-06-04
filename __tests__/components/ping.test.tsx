import React from 'react'
import { render, screen } from '@testing-library/react'
import Ping from '../../src/components/ping'

const ping = (
  <Ping>
    <div>Ping Component</div>
  </Ping>
)

describe('Ping component', () => {
  it('renders without crashing', () => {
    render(ping)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(ping)
    const pingComponent = screen.getByTestId('animation-component')
    expect(pingComponent).toHaveStyle('--duration: 1s')
    expect(pingComponent).toHaveStyle('--iterations: infinite')
    expect(pingComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Ping duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Ping Component</div>
      </Ping>
    )
    const pingComponent = screen.getByTestId('animation-component')
    expect(pingComponent).toHaveStyle('--duration: 2s')
    expect(pingComponent).toHaveStyle('--iterations: 2')
    expect(pingComponent).toHaveStyle('--direction: reverse')
  })
})
