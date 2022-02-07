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

Colors.Primary = (props) => {
  return <InlineColor color='primary' {...props} />
}

Colors.Secondary = (props) => {
  return <InlineColor color='secondary' {...props} />
}

Colors.Background = (props) => {
  return <InlineColor color='background' {...props} />
}

Colors.Red = (props) => {
  return <InlineColor color='red' {...props} />
}

Colors.Orange = (props) => {
  return <InlineColor color='orange' {...props} />
}

Colors.Yellow = (props) => {
  return <InlineColor color='yellow' {...props} />
}

Colors.Green = (props) => {
  return <InlineColor color='green' {...props} />
}

Colors.Teal = (props) => {
  return <InlineColor color='teal' {...props} />
}

Colors.Blue = (props) => {
  return <InlineColor color='blue' {...props} />
}

Colors.Purple = (props) => {
  return <InlineColor color='purple' {...props} />
}

Colors.Pink = (props) => {
  return <InlineColor color='pink' {...props} />
}

Colors.Grey = (props) => {
  return <InlineColor color='grey' {...props} />
}

export default Colors
