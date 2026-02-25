import React, { ReactNode } from 'react'
import { Box, BoxProps } from 'theme-ui'

interface InlineColorProps extends BoxProps {
  color: string
  children: ReactNode
}
const InlineColor = ({ sx, color, children, ...props }: InlineColorProps) => {
  return (
    <Box
      as='span'
      sx={{ display: 'inline-block', color: color, ...sx }}
      {...props}
    >
      {children}
    </Box>
  )
}

type ColorProps = Omit<InlineColorProps, 'color'>

export const Primary = (props: ColorProps) => {
  return <InlineColor color='primary' {...props} />
}

export const Secondary = (props: ColorProps) => {
  return <InlineColor color='secondary' {...props} />
}

export const Background = (props: ColorProps) => {
  return <InlineColor color='background' {...props} />
}

export const Red = (props: ColorProps) => {
  return <InlineColor color='red' {...props} />
}

export const Orange = (props: ColorProps) => {
  return <InlineColor color='orange' {...props} />
}

export const Yellow = (props: ColorProps) => {
  return <InlineColor color='yellow' {...props} />
}

export const Green = (props: ColorProps) => {
  return <InlineColor color='green' {...props} />
}

export const Teal = (props: ColorProps) => {
  return <InlineColor color='teal' {...props} />
}

export const Blue = (props: ColorProps) => {
  return <InlineColor color='blue' {...props} />
}

export const Purple = (props: ColorProps) => {
  return <InlineColor color='purple' {...props} />
}

export const Pink = (props: ColorProps) => {
  return <InlineColor color='pink' {...props} />
}

export const Grey = (props: ColorProps) => {
  return <InlineColor color='grey' {...props} />
}
