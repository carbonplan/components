import React from 'react'
import { Box } from 'theme-ui'

import Group from './group'

const Figure = ({ as = 'figure', children, sx }) => {
  // try to use figure/table number as id for anchoring
  const childrenArray = React.Children.toArray(children)
  const captionElement = childrenArray.find(
    (child) =>
      React.isValidElement(child) &&
      child.type?.displayName &&
      (child.type.displayName === 'FigureCaption' ||
        child.type.displayName === 'TableCaption')
  )

  const elementNumber = captionElement?.props?.number
  const elementType =
    captionElement?.type?.displayName === 'TableCaption' ? 'table' : 'figure'
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
