import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './swing.module.css'

export interface Props extends BaseProps {}

const Swing = (props: Props) => (
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
)

Swing.defaultProps = defaultProps

export default Swing
