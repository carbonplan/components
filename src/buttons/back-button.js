import React from 'react'
import { Box } from 'theme-ui'
import Arrow from '../arrow'

const BackButton = ({ sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        textDecoration: 'none',
        color: 'secondary',
        fontFamily: 'body',
        letterSpacing: 'body',
        transition: '0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: 'primary',
          },
          '&:hover > #arrow': {
            fill: 'primary',
          },
        },
        ...sx,
      }}
      {...props}
    >
      <Arrow
        id='arrow'
        sx={{
          transition: 'fill 0.15s',
          transform: 'rotate(-135deg)',
          position: 'relative',
          top: ['3px'],
          fill: 'secondary',
          width: 13,
          height: 13,
        }}
      />
      <Box
        as='span'
        sx={{
          fontSize: [2, 2, 2, 3],
          position: 'relative',
          pb: [1],
          ml: [2],
          top: ['2px'],
        }}
      >
        Back
      </Box>
    </Box>
  )
}

export default BackButton
