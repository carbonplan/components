import React from 'react'
import { Box } from 'theme-ui'
import Arrow from '../arrow'

const BackButton = ({ sx, label, ...props }) => {
  label = label || 'Back'

  return (
    <Box
      sx={{
        display: 'inline-block',
        textDecoration: 'none',
        color: 'secondary',
        fontFamily: 'body',
        letterSpacing: 'body',
        transition: '0.15s',
        cursor: 'pointer',
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
          top: ['1px', '1px', '1px', '1px'],
          fill: 'secondary',
          width: [13, 13, 13, 14.5],
          height: [13, 13, 13, 14.5],
        }}
      />
      <Box
        as='span'
        sx={{
          fontSize: [2, 2, 2, 3],
          ml: ['7px'],
        }}
      >
        {label}
      </Box>
    </Box>
  )
}

export default BackButton
