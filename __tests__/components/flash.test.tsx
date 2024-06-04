import React from 'react'
import { render, screen } from '@testing-library/react'
import Flash from '../../src/components/flash'

const flash = (
  <Flash>
    <div>Flash Component</div>
  </Flash>
)

describe('Flash component', () => {
  it('renders without crashing', () => {
    render(flash)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(flash)
    const flashComponent = screen.getByTestId('animation-component')
    expect(flashComponent).toHaveStyle('--duration: 1s')
    expect(flashComponent).toHaveStyle('--iterations: infinite')
    expect(flashComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Flash duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Flash Component</div>
      </Flash>
    )
    const flashComponent = screen.getByTestId('animation-component')
    expect(flashComponent).toHaveStyle('--duration: 2s')
    expect(flashComponent).toHaveStyle('--iterations: 2')
    expect(flashComponent).toHaveStyle('--direction: reverse')
  })
})
