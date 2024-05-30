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

export interface BaseProps {
  children?: React.ReactNode
  duration: string
  iterations: number
  iterationDelay: string
  reverse: boolean
  onAnimationStart?: () => void
  onAnimationEnd?: () => void
}

export const defaultProps: BaseProps = {
  duration: '1s',
  iterations: 0,
  iterationDelay: '1s',
  reverse: false,
}
