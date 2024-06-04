import React from 'react'
import { render, screen } from '@testing-library/react'
import Spin from '../../src/components/spin'

const spin = (
  <Spin>
    <div>Spin Component</div>
  </Spin>
)

describe('Spin component', () => {
  it('renders without crashing', () => {
    render(spin)
    expect(screen.getByTestId('animation-component')).toBeInTheDocument()
  })

  it('applies the correct styles', () => {
    render(spin)
    const spinComponent = screen.getByTestId('animation-component')
    expect(spinComponent).toHaveStyle('--duration: 1s')
    expect(spinComponent).toHaveStyle('--iterations: infinite')
    expect(spinComponent).toHaveStyle('--direction: normal')
  })

  it('applies modified styles', () => {
    render(
      <Spin duration='2s' iterations={2} reverse initialDelay='1s' iterationDelay='0.5s' disabled>
        <div>Spin Component</div>
      </Spin>
    )
    const spinComponent = screen.getByTestId('animation-component')
    expect(spinComponent).toHaveStyle('--duration: 2s')
    expect(spinComponent).toHaveStyle('--iterations: 2')
    expect(spinComponent).toHaveStyle('--direction: reverse')
  })
})
