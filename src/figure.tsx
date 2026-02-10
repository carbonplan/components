import React from 'react'
import { Box, BoxProps } from 'theme-ui'

import Group from './group'

export type FigureProps = BoxProps

const Figure = ({ as = 'figure', children, sx }: FigureProps) => {
  // try to use figure/table number as id for anchoring
  const childrenArray = React.Children.toArray(children)
  const captionElement = childrenArray.find((child) => {
    if (!React.isValidElement(child)) return false
    const type = child.type
    return (
      typeof type !== 'string' &&
      'displayName' in type &&
      (type.displayName === 'FigureCaption' ||
        type.displayName === 'TableCaption')
    )
  })

  const captionProps = React.isValidElement<{ number?: number }>(captionElement)
    ? captionElement.props
    : undefined
  const captionType = React.isValidElement(captionElement)
    ? captionElement.type
    : undefined
  const elementNumber = captionProps?.number
  const elementType =
    typeof captionType !== 'string' &&
    captionType &&
    'displayName' in captionType &&
    captionType.displayName === 'TableCaption'
      ? 'table'
      : 'figure'
  const id = elementNumber ? `${elementType}-${elementNumber}` : undefined

  return (
    <Box
      as={as}
      id={id}
      sx={{
        my: [6, 6, 6, 7],
        scrollMarginTop: '60px', // account for header height
        '@media print': {
          breakInside: 'avoid',
        },
        ...sx,
      }}
    >
      <Group spacing={[4, 4, 4, 5]}>{children}</Group>
    </Box>
  )
}

export default Figure
