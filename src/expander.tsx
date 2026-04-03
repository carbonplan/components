import React from 'react'
import { IconButton, IconButtonProps } from 'theme-ui'

export interface ExpanderProps {
  value: IconButtonProps['aria-checked']
  id?: IconButtonProps['id']
  onClick: IconButtonProps['onClick']
  sx?: IconButtonProps['sx']
}
const Expander = ({ value, id, onClick, sx }: ExpanderProps) => {
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
            transform: value ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        />
      </svg>
    </IconButton>
  )
}

export default Expander
