import React, { forwardRef, cloneElement } from 'react'
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui'
import Link, { LinkProps } from './link'
import getSizeStyles from './utils/get-size-styles'

const hasCustomHover = (comp: unknown): comp is { hover: ThemeUIStyleObject } =>
  comp != null && typeof comp === 'object' && 'hover' in comp

export interface ButtonProps extends Omit<BoxProps, 'prefix'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?:
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom'
    | 'initial'
  suffix?: React.ReactElement & { props?: { sx?: ThemeUIStyleObject } }
  prefix?: React.ReactElement & { props?: { sx?: ThemeUIStyleObject } }
  inverted?: boolean
  href?: string
  internal?: boolean
  sx?: ThemeUIStyleObject & {
    color?: string // ThemeUIStyleObject doesn't have a color property
  }
}

const Button = (
  {
    size = 'sm',
    prefix,
    suffix,
    inverted,
    sx,
    children,
    align,
    href,
    internal,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
) => {
  if (!['xs', 'sm', 'md', 'lg', 'xl'].includes(size)) {
    throw new Error('Size must be xs, sm, md, lg, or xl')
  }

  const { color, ...sxProp } = sx || {}

  const baseColor = color || (inverted ? 'secondary' : 'primary')
  const hoverColor = color ? 'primary' : inverted ? 'primary' : 'secondary'

  const sizeConfig = {
    xs: {
      margin: ['6px', '6px', '6px', '6px'],
      height: [12, 12, 12, 13],
      width: [12, 12, 12, 13],
      strokeWidth: [1.5, 1.5, 1.5, 1.5],
      offset: { transform: 'translateY(0.25px)' },
    },
    sm: {
      margin: ['7px', '7px', '7px', '7px'],
      height: [13, 13, 13, 18],
      width: [13, 13, 13, 18],
      strokeWidth: [1.5, 1.5, 1.5, 2],
      offset: { transform: 'translateY(0.25px)' },
    },
    md: {
      margin: ['8px', '8px', '8px', '8px'],
      height: [18, 18, 18, 24],
      width: [18, 18, 18, 24],
      strokeWidth: [2, 2, 2, 3],
      offset: {},
    },
    lg: {
      margin: ['10px', '10px', '12px', '16px'],
      height: [24, 24, 34, 46],
      width: [24, 24, 34, 46],
      strokeWidth: [3, 3, 4, 5],
      offset: {},
    },
    xl: {
      margin: ['12px', '16px', '18px', '20px'],
      height: [34, 46, 56, 68],
      width: [34, 46, 56, 68],
      strokeWidth: [4, 5, 6, 7],
      offset: {},
    },
  }

  const { margin, height, width, strokeWidth, offset } = sizeConfig[size]

  let prefixHover,
    suffixHover,
    prefixAlign,
    suffixAlign,
    prefixOffset,
    suffixOffset

  if (align) {
    prefixAlign = align
    suffixAlign = align
  } else {
    if (prefix && suffix) {
      prefixAlign = 'initial'
      suffixAlign = 'initial'
    } else if (prefix) {
      prefixAlign = 'initial'
    } else if (suffix) {
      suffixAlign = 'middle'
    }
  }

  if (prefixAlign === 'middle') {
    prefixOffset = {}
  } else {
    prefixOffset = offset
  }

  if (suffixAlign === 'middle') {
    suffixOffset = {}
  } else {
    suffixOffset = offset
  }

  let clonedPrefix, clonedSuffix

  if (prefix) {
    prefixHover = {
      '&:hover > #prefix-span > #prefix': {
        color: hoverColor,
        ...(hasCustomHover(prefix.type) ? prefix.type.hover : {}),
      },
    }
    clonedPrefix = cloneElement(prefix, {
      id: 'prefix',
      sx: {
        position: 'relative',
        height: height,
        width: width,
        mr: children ? margin : [0],
        strokeWidth: strokeWidth,
        verticalAlign: prefixAlign,
        transition: 'color 0.15s, transform 0.15s',
        ...prefix.props?.sx,
      },
    })
  }

  if (suffix) {
    suffixHover = {
      '&:hover > #suffix-span >#suffix': {
        color: hoverColor,
        ...(hasCustomHover(suffix.type) ? suffix.type.hover : {}),
      },
    }
    clonedSuffix = cloneElement(suffix, {
      id: 'suffix',
      sx: {
        height: height,
        width: width,
        ml: children ? margin : [0],
        strokeWidth: strokeWidth,
        verticalAlign: suffixAlign,
        transition: 'color 0.15s, transform 0.15s',
        ...suffix.props?.sx,
      },
    })
  }

  let sizeStyles = getSizeStyles(size)

  const style = {
    ...sizeStyles,
    lineHeight: 1.05,
    border: 'none',
    background: 'transparent',
    display: 'block',
    color: baseColor,
    padding: [0],
    textAlign: 'left' as const,
    cursor: 'pointer',
    width: 'fit-content',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: hoverColor,
      },
      ...suffixHover,
      ...prefixHover,
    },
    ...sxProp,
  }

  const Inner = (
    <>
      <Box
        as='span'
        id='prefix-span'
        sx={{ display: 'inline-block', ...prefixOffset }}
      >
        {clonedPrefix}
      </Box>
      <Box as='span' sx={{ transition: 'color 0.15s' }}>
        {children}
      </Box>
      <Box
        as='span'
        id='suffix-span'
        sx={{ display: 'inline-block', ...suffixOffset }}
      >
        {clonedSuffix}
      </Box>
    </>
  )

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        internal={internal}
        sx={{
          ...style,
          textDecoration: 'none',
        }}
        {...(props as LinkProps)}
        href={href}
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

export default forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  Button
)
