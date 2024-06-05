import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './shake.module.css'

export interface Props extends BaseProps {}

/**
 * A shake animation.
 */
const Shake = (props: Props) => <Animation {...props} className={css.animation} />

Shake.defaultProps = defaultProps

export default Shake
