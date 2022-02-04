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
  if (typeof spacing === 'string' && Object.keys(sizes).includes(spacing)) {
    marginValue = sizes[spacing]
  } else if (typeof spacing === 'number' || typeof spacing === 'string') {
    marginValue = [spacing]
  } else if (
    Array.isArray(spacing) &&
    spacing.every((el) => typeof el === 'number' || typeof el === 'string')
  ) {
    marginValue = spacing
  }

  if (!marginValue) {
    throw new Error(
      'Invalid spacing size. Must be numeric value(s) or one of xs, sm, md, lg, or xl'
    )
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
    <Box {...sx}>
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
