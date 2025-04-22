import React from 'react'
import { Box, BoxProps } from 'theme-ui'

import Group from './group'

const Figure = ({ as = 'figure', children, sx }: BoxProps) => {
  return (
    <Box
      as={as}
      sx={{
        my: [6, 6, 6, 7],
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
