import React from 'react'
import { render, screen } from '@testing-library/react'
import Wiggle from '../../src/components/wiggle'

const wiggle = (
  <Wiggle>
    <div>Wiggle Component</div>
  </Wiggle>
)

describe('Wiggle component', () => {
  it('renders without crashing', () => {
    render(wiggle)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(wiggle)
    const wiggleComponent = screen.getByTestId('animation-component')
    expect(wiggleComponent).toHaveStyle('--duration: 1s')
    expect(wiggleComponent).toHaveStyle('--iterations: infinite')
    expect(wiggleComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Wiggle duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Wiggle Component</div>
      </Wiggle>
    )
    const wiggleComponent = screen.getByTestId('animation-component')
    expect(wiggleComponent).toHaveStyle('--duration: 2s')
    expect(wiggleComponent).toHaveStyle('--iterations: 2')
    expect(wiggleComponent).toHaveStyle('--direction: reverse')
  })
})
