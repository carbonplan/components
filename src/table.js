import React from 'react'
import { Box } from 'theme-ui'
import Row from './row'
import Column from './column'

const styles = {
  reset: {
    verticalAlign: 'baseline',
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
  },
  row: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    pt: [3, 3, 3, '20px'],
    pb: [3, 3, 3, '20px'],
    mb: ['2px'],
  },
  header: {
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  index: {
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  entry: {
    display: 'block',
    fontSize: [2, 2, 2, 3],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: ['1px'],
    mt: [2, 0, 0, 0],
  },
}

const Table = ({
  data,
  sx,
  color,
  header,
  columns,
  start,
  width,
  borderBottom = true,
  borderTop = true,
}) => {
  return (
    <Box as='table' sx={{ display: 'block', ...sx }}>
      <Box as='tbody' sx={{ display: 'block' }}>
        {header && (
          <Row
            as='tr'
            sx={{
              ...styles.reset,
              ...styles.header,
              ...styles.row,
              color: color,
              borderTopWidth: !borderTop ? '0px' : '1px',
            }}
          >
            <Column as='td' start={[1]} width={columns} sx={styles.index}>
              {header}
            </Column>
          </Row>
        )}
        {data.map((d, i) => {
          return (
            <Row
              as='tr'
              columns={columns}
              key={i}
              sx={{
                ...styles.reset,
                ...styles.row,
                pb:
                  borderBottom && i === data.length - 1
                    ? ['18px', '18px', '18px', '22px']
                    : [3, 3, 3, '20px'],
                borderBottomWidth:
                  borderBottom && i === data.length - 1 ? '1px' : '0px',
                borderTopWidth:
                  !borderTop && i === 0 && !header ? '0px' : '1px',
              }}
            >
              <Column
                as='td'
                start={start[0]}
                width={width[0]}
                sx={{ ...styles.reset, ...styles.index }}
              >
                {d[0]}
              </Column>
              <Column
                as='td'
                start={start[1]}
                width={width[1]}
                sx={{ ...styles.reset, ...styles.entry }}
              >
                {d[1]}
              </Column>
            </Row>
          )
        })}
      </Box>
    </Box>
  )
}

export default Table
