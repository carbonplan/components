import React from 'react'
import { Box } from 'theme-ui'
import Row from './row'
import Column from './column'

const sx = {
  row: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    pt: [3],
    pb: [3],
    mb: ['2px', 0, 0],
  },
  index: {
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  entry: {
    fontSize: [2, 2, 2, 3],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: ['1px'],
    mt: [2, 0, 0, 0],
  },
}

const Table = ({ data, columns, start, width }) => {
  return (
    <Box>
      {data.map((d, i) => {
        return (
          <Row columns={columns} key={i} sx={sx.row}>
            <Column start={start[0]} width={width[0]} sx={sx.index}>
              {d[0]}
            </Column>
            <Column start={start[1]} width={width[1]} sx={sx.entry}>
              {d[1]}
            </Column>
          </Row>
        )
      })}
    </Box>
  )
}

export default Table
