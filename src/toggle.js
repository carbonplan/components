import React, { forwardRef } from 'react'
import { Box } from 'theme-ui'
import { transparentize } from '@theme-ui/color'

const Toggle = ({ value, onClick, disabled, sx, ...props }, ref) => {
  const color = sx && sx.color ? sx.color : 'primary'
  value = disabled ? false : value
  return (
    <Box
      ref={ref}
      as='button'
      onClick={onClick}
      role='checkbox'
      aria-checked={value}
      aria-label='Toggle'
      sx={{
        border: 'none',
        background: 'none',
        cursor: disabled ? 'default' : 'pointer',
        p: [0],
        m: [0],
        display: 'inline-block',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          width: '50px',
          height: '20px',
          borderRadius: '20px',
          backgroundColor: value
            ? transparentize(color, color == 'primary' ? 0.5 : 0.45)
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

export default forwardRef(Toggle)
