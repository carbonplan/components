import React from 'react'
import { Grid } from 'theme-ui'

const Row = ({ children, sx, columns, gap, ...props }) => {
  const makeArray = (input) => {
    if (!Array.isArray(input)) {
      input = [input, input, input, input]
    }
    if (Array.isArray(input) && ![1, 2, 4].includes(input.length)) {
      throw new Error('Array length must be 1, 2, or 4')
    }
    if (Array.isArray(input) && input.length == 1) {
      input = input.map((d) => [d]).flat()
    }
    if (Array.isArray(input) && input.length == 2) {
      input = input.map((d) => [d, d]).flat()
    }
    return input
  }

  let columnGap, rowGap
  if (Number.isInteger(gap) || Array.isArray(gap)) {
    gap = makeArray(gap)
    columnGap = gap
    rowGap = gap
  } else {
    columnGap = [4, 5, 5, 6]
    rowGap = [0, 0, 0, 0]
  }

  if (Number.isInteger(columns) || Array.isArray(columns)) {
    columns = makeArray(columns)
  } else {
    columns = [6, 8, 12, 12]
  }

  return (
    <Grid
      {...props}
      columns={columns}
      sx={{
        columnGap: columnGap,
        rowGap: rowGap,
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}

export default Row
