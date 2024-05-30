import React, { useEffect } from 'react'
import { convertToMilliseconds, BaseProps, defaultProps } from './utils'
import css from './animation.module.css'

export interface Props extends BaseProps {
  onAnimationIteration?: () => void
  className?: string
  style?: React.CSSProperties
}

const Animation = (props: Props) => {
  useEffect(() => {
    setAnimate(true)
  }, [props.iterations])

  const [animate, setAnimate] = React.useState(true)
  const [iteration, setIteration] = React.useState(0)

  const style = {
    ...props.style,
    '--duration': props.duration,
    '--iterations': `${props.iterations || 'infinite'}`,
    '--direction': `${props.reverse ? 'reverse' : 'normal'}`,
  } as React.CSSProperties

  const handleIteration = () => {
    setAnimate(false)
    if (!props.iterations || (props.iterations && iteration + 1 < props.iterations)) {
      setIteration(iteration + 1)
      setTimeout(() => {
        setAnimate(true)
      }, convertToMilliseconds(props.iterationDelay))
    }
  }

  return (
    <div
      onAnimationStart={props.onAnimationStart}
      onAnimationEnd={props.onAnimationEnd}
      onAnimationIteration={handleIteration}
      className={animate ? `${props.className} ${css.base_animation}` : ''}
      style={style}
    >
      {props.children}
    </div>
  )
}

Animation.defaultProps = defaultProps

export default Animation
