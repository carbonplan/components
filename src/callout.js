import React, { forwardRef } from 'react'
import { Box } from 'theme-ui'
import { Arrow } from '@carbonplan/icons'
import Link from './link'

const Callout = (
  { label, children, inverted, color, href, internal, tracking, sx, ...props },
  ref
) => {
  const baseColor = color || (inverted ? 'secondary' : 'primary')
  const hoverColor = color ? 'primary' : inverted ? 'primary' : 'secondary'

  const style = {
    border: 'none',
    padding: [0],
    fontSize: [3, 3, 3, 4],
    color: baseColor,
    background: 'transparent',
    textDecoration: 'none',
    fontFamily: 'body',
    lineHeight: 'h3',
    letterSpacing: 'body',
    width: 'fit-content',
    cursor: 'pointer',
    textAlign: 'left',
    mb: [1],
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover > #container > #arrow': {
        transform: 'rotate(45deg)',
        fill: hoverColor,
      },
      '&:hover': {
        color: hoverColor,
      },
    },
    ...sx,
  }

  const Inner = (
    <>
      <Box sx={{ transition: '0.15s', letterSpacing: 'body', pb: ['6px'] }}>
        {children}
      </Box>
      <Box
        sx={{
          transition: '0.15s',
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          fontFamily: 'heading',
          fontSize: [2, 2, 2, 3],
        }}
      >
        {label}
      </Box>
      <Box
        as='span'
        id='container'
        sx={{
          ml: [2],
          display: 'inline-block',
        }}
      >
        <Arrow
          id='arrow'
          sx={{
            transition: 'fill 0.15s, transform 0.15s',
            position: 'relative',
            top: ['2px'],
            color: baseColor,
            height: [15, 15, 15, 17],
            width: [15, 15, 15, 17],
          }}
        />
      </Box>
    </>
  )

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        internal={internal}
        tracking={tracking}
        sx={style}
        {...props}
      >
        {Inner}
      </Link>
    )
  } else {
    return (
      <Box ref={ref} as='button' sx={style} {...props}>
        {Inner}
      </Box>
    )
  }
}

export default forwardRef(Callout)
