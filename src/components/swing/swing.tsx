import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './swing.module.css'

export interface Props extends BaseProps {}

/**
 * A swing animation.
 */
const Swing = (props: Props) => (
  <Animation {...props} className={css.animation}>
    {props.children}
  </Animation>
)

Swing.defaultProps = defaultProps

export default Swing
