import React from 'react'
import { Box } from 'theme-ui'

const sizes = {
  xs: [1],
  sm: [3],
  md: [5],
  lg: [7],
  xl: [9],
}
const Group = ({ children, direction = 'vertical', spacing = 'md' }) => {
  let marginValue
  if (typeof spacing === 'string') {
    marginValue = sizes[spacing]
  } else if (typeof spacing === 'number') {
    marginValue = [spacing]
  } else if (
    Array.isArray(spacing) &&
    spacing.every((el) => typeof el === 'number')
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

  const marginProperty = direction === 'vertical' ? 'mt' : 'ml'
  const additionalStyles =
    direction === 'horizontal' ? { display: 'inline-block' } : {}
  return (
    <Box>
      {React.Children.map(children, (child, i) => {
        return (
          <Box
            sx={{
              [marginProperty]: i > 0 ? marginValue : 0,
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
