import React from 'react'
import { Box } from 'theme-ui'

const Info = ({ closed, sx, ...props }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: 24,
        height: 24,
        stroke: color,
        strokeWidth: '1.5px',
        ...sx,
      }}
      {...props}
    >
      <svg fill='none' viewBox='0 0 26 26'>
        <g transform='translate(0,-1)'>
          <line x1='13' y1='12.3' x2='13' y2='19.5' />
          <line x1='13' y1='7.9' x2='13' y2='10.1' />
        </g>
        {closed && <circle cx='13' cy='13' r='12' />}
      </svg>
    </Box>
  )
}

export default Info
