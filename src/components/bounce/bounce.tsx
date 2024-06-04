import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './bounce.module.css'

export interface Props extends BaseProps {}

/**
 * A bounce animation.
 */
const Bounce = (props: Props) => (
  <Animation {...props} className={css.animation}>
    {props.children}
  </Animation>
)

Bounce.defaultProps = defaultProps

export default Bounce
