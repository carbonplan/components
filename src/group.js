import React from 'react'
import { Box } from 'theme-ui'

const sizes = {
  xs: [1],
  sm: [3],
  md: [5],
  lg: [7],
  xl: [9],
}
const Group = ({ children, direction = 'vertical', spacing = 'md', sx }) => {
  let marginValue
  if (typeof spacing === 'string' && sizes.hasOwnProperty(spacing)) {
    marginValue = sizes[spacing]
  } else {
    marginValue = spacing
  }

  if (!['horizontal', 'vertical'].includes(direction)) {
    throw new Error(
      'Invalid direction value. Must be either horizontal or vertical'
    )
  }

  const marginProperty = direction === 'vertical' ? 'mb' : 'mr'
  const additionalStyles =
    direction === 'horizontal' ? { display: 'inline-block' } : {}
  return (
    <Box sx={sx}>
      {React.Children.map(children, (child, i) => {
        return (
          <Box
            sx={{
              [marginProperty]: i < children.length - 1 ? marginValue : 0,
              ...additionalStyles,
            }}
          >
            {child}
          </Box>
        )
      })}
    </Box>
  )
}

export default Group
