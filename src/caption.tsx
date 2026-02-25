import React, { ReactNode } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface CaptionProps {
  as?: BoxProps['as']
  number?: number
  children: ReactNode
  label?: string
}

const Caption = ({
  as = 'figcaption',
  number,
  children,
  label = 'figure',
}: CaptionProps) => {
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
