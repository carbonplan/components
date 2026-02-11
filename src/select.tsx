import React, { ReactNode, useRef } from 'react'
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui'
import { Arrow } from '@carbonplan/icons'
import getSizeStyles from './utils/get-size-styles'
import getSxColor from './utils/get-sx-color'

export interface SelectProps extends Omit<BoxProps, 'onChange'> {
  size?: 'xs' | 'sm' | 'md'
  sxSelect?: ThemeUIStyleObject
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  children: ReactNode
}

const Select = ({
  children,
  size = 'sm',
  sx,
  sxSelect,
  onChange,
  ...props
}: SelectProps) => {
  const color = getSxColor(sx)
  const sizeStyles = getSizeStyles(size)
  const ref = useRef<HTMLSelectElement>(null)

  if (!['xs', 'sm', 'md'].includes(size)) {
    throw new Error('Size must be xs, sm, or md')
  }

  const sizeConfig = {
    xs: {
      height: [14, 14, 14, 16],
      width: [14, 14, 14, 14],
      top: ['1px'],
      ml: ['-14px', '-14px', '-14px', '-16px'],
    },
    sm: {
      height: [15, 15, 15, 20],
      width: [15, 15, 15, 20],
      top: ['1px'],
      ml: ['-16px', '-16px', '-16px', '-20px'],
    },
    md: {
      height: [20, 20, 20, 20],
      width: [20, 20, 20, 20],
      top: ['2px'],
      ml: ['-20px', '-20px', '-20px', '-20px'],
    },
  }

  const { height, width, top, ml } = sizeConfig[size]
  const pr = width.map((d) => d + 12)

  return (
    <Box
      sx={{
        display: 'inline-block',
        ...sx,
      }}
    >
      <Box
        as='select'
        ref={ref}
        onChange={(e) => {
          ref.current?.blur()
          // theme-ui Box doesn't narrow event types for `as='select'`
          if (onChange)
            onChange(e as unknown as React.ChangeEvent<HTMLSelectElement>)
        }}
        sx={{
          ...sizeStyles,
          lineHeight: 'normal',
          cursor: 'pointer',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          pb: ['5px'],
          bg: 'background',
          pr: pr,
          border: 'none',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'primary',
          borderRadius: '0px',
          width: 'fit-content',
          color: color,
          userSelect: 'none' as const,
          '@media (hover: none) and (pointer: coarse)': {
            '&:focus-visible': {
              outline: 'none !important',
              background: 'transparent !important',
            },
          },
          ...sxSelect,
        }}
        {...props}
      >
        {children}
      </Box>
      <Arrow
        sx={{
          width: width,
          height: height,
          position: 'relative',
          ml: ml,
          top: top,
          fill: 'secondary',
          transform: 'rotate(135deg)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  )
}

export default Select
