import React from 'react'
import { Box, IconButton } from 'theme-ui'

const Expander = ({ value, id, onClick, sx }) => {
  return (
    <IconButton
      onClick={onClick}
      id={id}
      role='checkbox'
      aria-checked={value}
      aria-label='Expand'
      sx={{
        display: 'inline-block',
        width: 24,
        height: 24,
        p: [1],
        cursor: 'pointer',
        fill: 'secondary',
        stroke: 'secondary',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            fill: 'primary',
            stroke: 'primary',
          },
        },
        ...sx,
      }}
    >
      <svg viewBox='0 0 16 16'>
        <path
          d='M8,0 V16 M0,8 H16'
          style={{
            strokeWidth: 2,
            transition: '0.25s all',
            transformOrigin: '8px 8px',
            transform: value ? 'rotate(45deg)' : '',
          }}
        />
      </svg>
    </IconButton>
  )
}

export default Expander
