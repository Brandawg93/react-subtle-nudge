import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './circle.module.css'

export interface Props extends BaseProps {
  thickness?: number
  color?: string
}

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

Circle.defaultProps = defaultProps

export default Circle
