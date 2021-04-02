import React from 'react'
import { Box } from 'theme-ui'

const Column = ({ start, width, dl, dr, children, sx, ...props }) => {
  start = start || 'auto'
  width = width || 'auto'

  const makeArray = (input) => {
    if (input && !Array.isArray(input)) {
      input = [input]
    }

    if (![1, 2, 4].includes(input.length)) {
      throw new Error('Array length must be 1, 2, or 4')
    }

    if (Array.isArray(input) && input.length == 1) {
      input = input.map((d) => [d, d, d, d]).flat()
    } else if (Array.isArray(input) && input.length == 2) {
      input = input.map((d) => [d, d]).flat()
    }

    return input
  }

  start = makeArray(start)
  width = makeArray(width)

  const end = start.map((d, i) => {
    if (d == 'auto') return 'auto'
    return d + width[i]
  })

  let ml, mr

  if (dl) {
    if (![0.5, 1].includes(dl)) {
      throw new Error('dl must be 0.5 or 1')
    }
    if (dl === 0.5) {
      ml = ['-12px', -3, -3, -4]
    }
    if (dl === 1) {
      ml = [-4, -5, -5, -6]
    }
  }

  if (dr) {
    if (![0.5, 1].includes(dr)) {
      throw new Error('dr must be 0.5 or 1')
    }
    if (dr === 0.5) {
      mr = ['-12px', -3, -3, -4]
    }
    if (dr === 1) {
      mr = [-4, -5, -5, -6]
    }
  }

  return (
    <Box
      {...props}
      sx={{
        gridColumnStart: start,
        gridColumnEnd: end,
        ml: ml,
        mr: mr,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Column
