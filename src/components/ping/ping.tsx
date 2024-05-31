import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './ping.module.css'

export interface Props extends BaseProps {
  color?: string
  scale?: number
}

const Ping = (props: Props) => {
  const style = {
    '--color': `${props.color || 'white'}`,
    '--scale': `${props.scale || 1.5}`,
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

Ping.defaultProps = defaultProps

export default Ping
