import React from 'react'
import { Box } from 'theme-ui'

const Question = ({ closed, sx, props }) => {
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
        <g transform='translate(5,6)'>
          <path d='M4.5,5A3.58,3.58,0,0,1,8.11,1.49,3.2,3.2,0,0,1,11.5,4.76C11.5,7.61,8,7,8,9.07V9.6' />
          <line x1='7.98' y1='11.3' x2='7.98' y2='13.6' />
        </g>
        {closed && <circle cx='13' cy='13' r='12' />}
      </svg>
    </Box>
  )
}

export default Question
