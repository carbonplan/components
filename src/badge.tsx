import React from 'react'
import { Box, BoxProps } from 'theme-ui'
import { transparentize } from '@theme-ui/color'
import getSxColor from './utils/get-sx-color'

export type BadgeProps = BoxProps

const Badge = ({ sx, children, ...props }: BadgeProps) => {
  const color = getSxColor(sx)
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: 'fit-content',
        height: ['24px', '24px', '24px', '26px'],
        borderRadius: '5px',
        backgroundColor:
          color === 'primary' || color === 'secondary'
            ? 'muted'
            : transparentize(color, 0.7),
        textAlign: 'center',
        userSelect: 'none',
        fontSize: [2, 2, 2, 3],
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          letterSpacing: '0.02em',
          fontFamily: 'mono',
          mt: ['1px', '1px', '1px', '0px'],
          px: [1, 1, 1, '5px'],
          color: color,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Badge
