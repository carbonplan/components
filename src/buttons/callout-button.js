import React from 'react'
import { Box } from 'theme-ui'
import Arrow from '../arrow'

const CalloutButton = ({ label, children, sx, ...props }) => {
  return (
    <Box
      sx={{
        fontSize: [3, 3, 3, 4],
        textDecoration: 'none',
        lineHeight: '1.2em',
        width: 'fit-content',
        mb: [1],
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: 'secondary',
          },
        },
        ...sx,
      }}
      {...props}
    >
      <Box sx={{ transition: '0.15s', pb: [2] }}>{children}</Box>
      <Box
        sx={{
          transition: '0.15s',
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          fontFamily: 'heading',
          fontSize: [2, 2, 2, 3],
        }}
      >
        {label}
      </Box>
      <Box
        as='span'
        id='container'
        sx={{
          ml: [2],
          display: 'inline-block',
        }}
      >
        <Arrow
          id='arrow'
          sx={{
            transition: 'fill 0.15s, transform 0.15s',
            position: 'relative',
            top: ['2px'],
            fill: 'primary',
            height: [15, 15, 15, 17],
            width: [15, 15, 15, 17],
          }}
        />
      </Box>
      <Box as='span' sx={{ display: 'inline-block', width: ['12px'] }} />
    </Box>
  )
}

export default CalloutButton
