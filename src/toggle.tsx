import React, { forwardRef } from 'react'
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui'
import { transparentize } from '@theme-ui/color'

export interface ToggleProps extends Omit<BoxProps, 'value'> {
  value?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  disabled?: boolean
  sx?: ThemeUIStyleObject
}

const Toggle = (
  { value, onClick, disabled, sx, ...props }: ToggleProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const color =
    sx && typeof sx === 'object' && 'color' in sx && typeof sx.color === 'string'
      ? sx.color
      : 'primary'
  const active = disabled ? false : value
  return (
    <Box
      ref={ref}
      as='button'
      onClick={onClick}
      role='checkbox'
      aria-checked={active}
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
          backgroundColor: active
            ? transparentize(color, color === 'primary' ? 0.5 : 0.45)
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
            left: active ? '32px' : '4px',
            top: '3px',
            backgroundColor: active ? color : 'secondary',
            transition: '0.15s',
          }}
        ></Box>
      </Box>
    </Box>
  )
}

export default forwardRef<HTMLButtonElement, ToggleProps>(Toggle)
