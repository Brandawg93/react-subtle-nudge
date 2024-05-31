import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './circle.module.css'

export interface Props extends BaseProps {
  /** The thickness of the line animation. */
  thickness?: number
  /** The color of the line animation. */
  color?: string
}

/**
 * A circle animation.
 */
const Circle = (props: Props) => {
  const style = {
    '--offset': `${props.thickness || 1}px`,
    '--color': `${props.color || 'white'}`,
  } as React.CSSProperties

  return (
    <div className={css.outer}>
      <Animation
        onAnimationStart={props.onAnimationStart}
        onAnimationEnd={props.onAnimationEnd}
        className={css.animation}
        style={style}
        duration={props.duration}
        reverse={props.reverse}
        iterations={props.iterations}
        iterationDelay={props.iterationDelay}
      ></Animation>
      {props.children}
    </div>
  )
}

Circle.defaultProps = {
  ...defaultProps,
  thickness: 1,
  color: 'white',
}

export default Circle
