import React, { forwardRef, ReactNode } from 'react'
import { Box, ThemeUIStyleObject } from 'theme-ui'
// @ts-expect-error - @carbonplan/icons lacks types field in published package
import { Arrow } from '@carbonplan/icons'
import Link from './link'

export interface CalloutProps {
  label: ReactNode
  children: ReactNode
  inverted?: boolean
  color?: string
  href?: string
  internal?: boolean
  sx?: ThemeUIStyleObject
}

type RefType = React.Ref<HTMLAnchorElement | HTMLButtonElement>

const Callout = (
  {
    label,
    children,
    inverted,
    color,
    href,
    internal,
    sx,
    ...props
  }: CalloutProps,
  ref: RefType
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
    textAlign: 'left' as const,
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
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        internal={internal}
        sx={style}
        {...props}
      >
        {Inner}
      </Link>
    )
  } else {
    return (
      <Box
        ref={ref as React.Ref<HTMLButtonElement>}
        as='button'
        sx={style}
        {...props}
      >
        {Inner}
      </Box>
    )
  }
}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement, CalloutProps>(
  Callout
)
