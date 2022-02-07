import React from 'react'
import { Box } from 'theme-ui'

const InlineColor = ({ sx, color, children, ...props }) => {
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

const Colors = {}

Colors.Primary = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='primary' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Secondary = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='secondary' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Background = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='background' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Red = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='red' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Orange = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='orange' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Yellow = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='yellow' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Green = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='green' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Teal = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='teal' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Blue = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='blue' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Purple = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='purple' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Pink = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='pink' {...props}>
      {children}
    </InlineColor>
  )
}

Colors.Grey = ({ sx, children, ...props }) => {
  return (
    <InlineColor color='grey' {...props}>
      {children}
    </InlineColor>
  )
}

export default Colors
