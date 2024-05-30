import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './ping.module.css'

export interface Props extends BaseProps {}

const Ping = (props: Props) => {
  return (
    <div className={css.outer}>
      <Animation
        onAnimationStart={props.onAnimationStart}
        onAnimationEnd={props.onAnimationEnd}
        className={css.animation}
        duration={props.duration}
        reverse={props.reverse}
        iterations={props.iterations}
        iterationDelay={props.iterationDelay}
      >
        {props.children}
      </Animation>
      {props.children}
    </div>
  )
}

Ping.defaultProps = defaultProps

export default Ping
