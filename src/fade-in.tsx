import React from 'react'
import { Box, BoxProps } from 'theme-ui'
import { keyframes } from '@emotion/react'

const fade = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export interface FadeInProps extends BoxProps {
  duration?: number
  delay?: number
}

const FadeIn = ({
  duration = 300,
  delay = 0,
  children,
  ...delegated
}: FadeInProps) => {
  return (
    <Box
      {...delegated}
      sx={{
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
        animationName: fade.toString(),
        animationFillMode: 'backwards',
      }}
    >
      {children}
    </Box>
  )
}

export default FadeIn
