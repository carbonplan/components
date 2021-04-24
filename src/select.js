import React from 'react'
import { Box } from 'theme-ui'
import Arrow from './arrow'

const Select = ({ children, size = 'sm', sx, ...props }) => {
  const color = sx && sx.color ? sx.color : 'primary'

  if (!['xs', 'sm', 'md'].includes(size)) {
    throw new Error('Size must be sm, md, or lg')
  }

  let fontSize, pr, height, width, ml, top

  if (size === 'xs') {
    fontSize = [2, 2, 2, 3]
    height = [14, 14, 14, 16]
    width = [14, 14, 14, 14]
    top = ['2px']
    ml = ['-14px', '-14px', '-14px', '-16px']
  }

  if (size === 'sm') {
    fontSize = [3, 3, 3, 4]
    height = [16, 16, 16, 20]
    width = [16, 16, 16, 20]
    top = ['2px']
    ml = ['-16px', '-16px', '-16px', '-20px']
  }

  if (size === 'md') {
    fontSize = [4, 4, 4, 4]
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
        sx={{
          cursor: 'pointer',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          pb: ['5px'],
          bg: 'transparent',
          pr: pr,
          border: 'none',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'secondary',
          borderRadius: '0px',
          fontFamily: 'body',
          fontSize: fontSize,
          fontColor: 'text',
          width: 'fit-content',
          color: color,
          userSelect: 'none',
          transition: 'border 0.15s',
          '@media (hover: hover) and (pointer: fine)': {
            ':hover': {
              borderBottomColor: 'primary',
            },
          },
          ':focus': {
            outline: 'none !important',
            background: 'none !important',
            borderBottomColor: 'primary',
          },
          ':focus-visible': {
            outline: 'none !important',
            background: 'none !important',
            borderBottomColor: 'primary',
          },
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
