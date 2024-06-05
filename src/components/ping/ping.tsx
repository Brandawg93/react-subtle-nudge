import React from 'react'
import Animation from '../animation'
import { BaseProps, defaultProps } from '../utils'
import css from './ping.module.css'

export interface Props extends BaseProps {
  /** The color of the ping animation. */
  color?: string
  /** The scale of the ping animation measured in percent. (1 = 100%) */
  scale?: number
}

/**
 * A ping animation.
 */
const Ping = (props: Props) => {
  const style = {
    '--color': `${props.color || 'white'}`,
    '--scale': `${props.scale || 1.5}`,
  } as React.CSSProperties

  return (
    <div className={css.outer}>
      <Animation {...props} children={undefined} className={css.animation} style={style}></Animation>
      {props.children}
    </div>
  )
}

Ping.defaultProps = {
  ...defaultProps,
  scale: 1.5,
  color: 'white',
}

export default Ping
