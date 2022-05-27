import React, { useRef } from 'react'
import { Box } from 'theme-ui'
import { Arrow } from '@carbonplan/icons'
import getProps from './utils/get-props'
import getSizeStyles from './utils/get-size-styles'

const Select = ({ children, size = 'sm', sx, sxSelect, ...props }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  const sizeStyles = getSizeStyles(size)
  const ref = useRef(null)

  const { onChange } = props
  const omitOnChange = getProps((k) => k !== 'onChange')(props)

  if (!['xs', 'sm', 'md'].includes(size)) {
    throw new Error('Size must be xs, sm, or md')
  }

  let pr, height, width, ml, top

  if (size === 'xs') {
    height = [14, 14, 14, 16]
    width = [14, 14, 14, 14]
    top = ['1px']
    ml = ['-14px', '-14px', '-14px', '-16px']
  }

  if (size === 'sm') {
    height = [15, 15, 15, 20]
    width = [15, 15, 15, 20]
    top = ['1px']
    ml = ['-16px', '-16px', '-16px', '-20px']
  }

  if (size === 'md') {
    height = [20, 20, 20, 20]
    width = [20, 20, 20, 20]
    top = ['2px']
    ml = ['-20px', '-20px', '-20px', '-20px']
  }

  pr = width.map((d) => d + 12)

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
          ref.current.blur()
          if (onChange) onChange(e)
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
          color: 'text',
          width: 'fit-content',
          color: color,
          userSelect: 'none',
          '@media (hover: none) and (pointer: coarse)': {
            '&:focus-visible': {
              outline: 'none !important',
              background: 'transparent !important',
            },
          },
          ...sxSelect,
        }}
        {...omitOnChange}
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
