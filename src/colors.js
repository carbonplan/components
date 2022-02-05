import React from 'react'
import { Box } from 'theme-ui'

const InlineColor = ({ sx, color, children }) => {
  return (
    <Box as='span' sx={{ display: 'inline-block', color: color, ...sx }}>
      {children}
    </Box>
  )
}

const Colors = {}

Colors.Primary = ({ sx, children }) => {
  return <InlineColor color='primary'>{children}</InlineColor>
}

Colors.Secondary = ({ sx, children }) => {
  return <InlineColor color='secondary'>{children}</InlineColor>
}

Colors.Background = ({ sx, children }) => {
  return <InlineColor color='background'>{children}</InlineColor>
}

Colors.Red = ({ sx, children }) => {
  return <InlineColor color='red'>{children}</InlineColor>
}

Colors.Orange = ({ sx, children }) => {
  return <InlineColor color='orange'>{children}</InlineColor>
}

Colors.Yellow = ({ sx, children }) => {
  return <InlineColor color='yellow'>{children}</InlineColor>
}

Colors.Green = ({ sx, children }) => {
  return <InlineColor color='green'>{children}</InlineColor>
}

Colors.Teal = ({ sx, children }) => {
  return <InlineColor color='teal'>{children}</InlineColor>
}

Colors.Blue = ({ sx, children }) => {
  return <InlineColor color='blue'>{children}</InlineColor>
}

Colors.Purple = ({ sx, children }) => {
  return <InlineColor color='purple'>{children}</InlineColor>
}

Colors.Pink = ({ sx, children }) => {
  return <InlineColor color='pink'>{children}</InlineColor>
}

Colors.Grey = ({ sx, children }) => {
  return <InlineColor color='grey'>{children}</InlineColor>
}

export default Colors
