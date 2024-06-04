import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './glow.module.css'

export interface Props extends BaseProps {
  /** The thickness of the line animation. */
  thickness?: number
  /** The color of the line animation. */
  color?: string
}

/**
 * A glow animation.
 */
const Glow = (props: Props) => {
  const style = {
    '--offset': `${props.thickness || 5}px`,
    '--color': `${props.color || 'white'}`,
  } as React.CSSProperties

  return (
    <Animation {...props} className={css.animation} style={style}>
      {props.children}
    </Animation>
  )
}

Glow.defaultProps = {
  ...defaultProps,
  thickness: 5,
  color: 'white',
}

export default Glow
