import React, { ReactNode } from 'react'
import { Box, ThemeUIStyleObject } from 'theme-ui'

const sizes = {
  xs: [1],
  sm: [3],
  md: [5],
  lg: [7],
  xl: [9],
}

type SizeKey = keyof typeof sizes
type Direction = 'horizontal' | 'vertical'
type SpacingValue = SizeKey | number | number[]

export type GroupProps = {
  children: ReactNode
  direction?: Direction
  spacing?: SpacingValue
  sx?: ThemeUIStyleObject
}

const Group = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  sx,
}: GroupProps) => {
  let marginValue: number | number[]

  if (typeof spacing === 'string' && spacing in sizes) {
    marginValue = sizes[spacing]
  } else {
    marginValue = spacing as number | number[]
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
        const childrenCount = React.Children.count(children)
        return (
          <Box
            sx={{
              [marginProperty]: i < childrenCount - 1 ? marginValue : 0,
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
