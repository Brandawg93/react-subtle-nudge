/**
 * Converts a time string to milliseconds.
 * @param time - The time string to convert.
 * @returns The time in milliseconds.
 */
export const convertToMilliseconds = (time: string): number => {
  const value = parseInt(time, 10)
  if (time.endsWith('ms')) {
    return value
  } else if (time.endsWith('s')) {
    return value * 1000
  } else {
    return 0
  }
}

/**
 * Base props for a component.
 */
export interface BaseProps {
  children?: React.ReactNode
  /** The duration of the animation. */
  duration: string
  /** The number of iterations to do. (0 is infinite) */
  iterations: number
  /** The amount of time to delay between iterations. */
  iterationDelay: string
  /** Whether to reverse the animation. */
  reverse: boolean
  /** Callback function triggered when the animation starts. */
  onAnimationStart?: () => void
  /** Callback function triggered when the animation ends. */
  onAnimationEnd?: () => void
}

/**
 * Default props for a component.
 */
export const defaultProps: BaseProps = {
  duration: '1s',
  iterations: 0,
  iterationDelay: '1s',
  reverse: false,
}
