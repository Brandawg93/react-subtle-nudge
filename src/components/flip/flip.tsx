import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './flip.module.css'

export interface Props extends BaseProps {}

/**
 * A flip animation.
 */
const Flip = (props: Props) => <Animation {...props} className={css.animation} />

Flip.defaultProps = defaultProps

export default Flip
