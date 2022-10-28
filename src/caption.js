import React from 'react'
import { Box } from 'theme-ui'

const Caption = ({ as = 'figcaption', number, children, label = 'figure' }) => {
  return (
    <Box
      as={as}
      sx={{
        color: 'secondary',
        display: 'block',
        textAlign: 'left',
        fontSize: [2, 2, 2, 3],
        '& a': { color: 'secondary' },
        '& a:hover': { color: 'primary' },
        '& > p': {
          display: 'inline',
          fontSize: [2, 2, 2, 3],
        },
      }}
    >
      {number && (
        <>
          <Box
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 'smallcaps',
              display: 'inline-block',
            }}
          >
            {label} {number}
          </Box>{' '}
          <Box sx={{ display: 'inline-block', mx: [1], pr: [1] }}>/</Box>
        </>
      )}
      {children}
    </Box>
  )
}

export default Caption
