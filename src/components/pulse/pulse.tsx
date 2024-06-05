import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './pulse.module.css'

export interface Props extends BaseProps {}

/**
 * A pulse animation.
 */
const Pulse = (props: Props) => <Animation {...props} className={css.animation} />

Pulse.defaultProps = defaultProps

export default Pulse
