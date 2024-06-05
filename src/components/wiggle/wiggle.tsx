import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './wiggle.module.css'

export interface Props extends BaseProps {}

/**
 * A wiggle animation.
 */
const Wiggle = (props: Props) => <Animation {...props} className={css.animation} />

Wiggle.defaultProps = defaultProps

export default Wiggle
