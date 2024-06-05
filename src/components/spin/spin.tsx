import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './spin.module.css'

export interface Props extends BaseProps {}

/**
 * A spin animation.
 */
const Spin = (props: Props) => <Animation {...props} className={css.animation} />

Spin.defaultProps = defaultProps

export default Spin
