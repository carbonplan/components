import React from 'react'
import { Box } from 'theme-ui'

const Arrow = ({ sx, ...props }) => {
  return (
    <Box
      as='svg'
      viewBox='0 0 20 20'
      sx={{
        width: 24,
        height: 24,
        fill: 'primary',
        ...sx,
      }}
      {...props}
    >
      <path
        d='M2.93,15.66c-0.18-0.18-0.18-0.32,0-0.5l9.73-9.7H5.74c-0.25,0-0.36-0.11-0.36-0.36V3.16
    c0-0.29,0.11-0.36,0.36-0.36h10.13c0.79,0,1.33,0.54,1.33,1.3v10.17c0,0.25-0.11,0.36-0.36,0.36H14.9c-0.25,0-0.36-0.11-0.36-0.36
    V7.3L4.8,17.07c-0.18,0.18-0.32,0.18-0.5,0L2.93,15.66z'
      />
    </Box>
  )
}

export default Arrow
