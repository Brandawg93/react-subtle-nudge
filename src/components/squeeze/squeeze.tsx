import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './squeeze.module.css'

export interface Props extends BaseProps {}

/**
 * A squeeze animation.
 */
const Squeeze = (props: Props) => (
  <Animation {...props} className={css.animation}>
    {props.children}
  </Animation>
)

Squeeze.defaultProps = defaultProps

export default Squeeze
