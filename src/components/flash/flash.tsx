import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './flash.module.css'

export interface Props extends BaseProps {}

/**
 * A flash animation.
 */
const Flash = (props: Props) => (
  <Animation {...props} className={css.animation}>
    {props.children}
  </Animation>
)

Flash.defaultProps = defaultProps

export default Flash
