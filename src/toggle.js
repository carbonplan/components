import React from 'react'
import { Box, Text } from 'theme-ui'
import { mix } from '@theme-ui/color'

const Toggle = ({ value, onClick, sx }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  return (
    <Box
      onClick={onClick}
      sx={{ cursor: 'pointer', display: 'inline-block', ...sx }}
    >
      <Box
        sx={{
          width: '50px',
          height: '20px',
          borderRadius: '20px',
          backgroundColor: value
            ? mix(color, 'background', color == 'primary' ? 0.5 : 0.57)
            : 'muted',
          position: 'relative',
          transition: '0.15s',
          display: 'inline-block',
        }}
      >
        <Box
          sx={{
            width: '14px',
            height: '14px',
            borderRadius: '7px',
            position: 'absolute',
            left: value ? '32px' : '4px',
            top: '3px',
            backgroundColor: value ? color : 'secondary',
            transition: '0.15s',
          }}
        ></Box>
      </Box>
    </Box>
  )
}

export default Toggle
