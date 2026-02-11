import React from 'react'
import { ResponsiveStyleValue, ThemeUICSSObject } from 'theme-ui'
import { Box, BoxProps } from 'theme-ui'

const sizes = {
  xs: [1],
  sm: [3],
  md: [5],
  lg: [7],
  xl: [9],
}

type SizeKey = keyof typeof sizes
type Direction = 'horizontal' | 'vertical'
type SpacingValue = SizeKey | ResponsiveStyleValue<number | string>

export interface GroupProps extends BoxProps {
  direction?: Direction
  spacing?: SpacingValue
}

const Group = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  sx,
}: GroupProps) => {
  let marginValue: ThemeUICSSObject['margin']

  if (typeof spacing === 'string' && spacing in sizes) {
    marginValue = sizes[spacing as SizeKey]
  } else {
    marginValue = spacing as ThemeUICSSObject['margin']
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
