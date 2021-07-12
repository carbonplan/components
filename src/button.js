import React, { cloneElement } from 'react'
import { Box } from 'theme-ui'
import Link from './link'

const Button = ({
  size = 'sm',
  prefix,
  suffix,
  inverted,
  sx,
  children,
  align,
  href,
  internal,
  tracking,
  ...props
}) => {
  if (!['xs', 'sm', 'md', 'lg', 'xl'].includes(size)) {
    throw new Error('Size must be xs, sm, md, lg, or xl')
  }

  let fontSize,
    fontFamily,
    offset,
    letterSpacing,
    margin,
    top,
    height,
    width,
    strokeWidth

  const color = sx && sx.color ? sx.color : null
  const baseColor = color || (inverted ? 'secondary' : 'primary')
  const hoverColor = color ? 'primary' : inverted ? 'primary' : 'secondary'

  if (size === 'xs') {
    fontSize = [2, 2, 2, 3]
    fontFamily = 'body'
    letterSpacing = 'body'
    margin = ['6px', '6px', '6px', '6px']
    height = [12, 12, 12, 13]
    width = [12, 12, 12, 13]
    strokeWidth = [1.5, 1.5, 1.5, 1.5]
    offset = { transform: 'translateY(0.25px)' }
  }

  if (size === 'sm') {
    fontSize = [3, 3, 3, 4]
    fontFamily = 'body'
    letterSpacing = 'body'
    margin = ['7px', '7px', '7px', '7px']
    height = [13, 13, 13, 18]
    width = [13, 13, 13, 18]
    strokeWidth = [1.5, 1.5, 1.5, 2]
    offset = { transform: 'translateY(0.25px)' }
  }

  if (size === 'md') {
    fontSize = [4, 4, 4, 5]
    fontFamily = 'body'
    letterSpacing = 'body'
    margin = ['8px', '8px', '8px', '8px']
    height = [18, 18, 18, 24]
    width = [18, 18, 18, 24]
    strokeWidth = [2, 2, 2, 3]
  }

  if (size === 'lg') {
    fontSize = [5, 5, 6, 7]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    margin = ['10px', '10px', '12px', '16px']
    height = [24, 24, 34, 46]
    width = [24, 24, 34, 46]
    strokeWidth = [3, 3, 4, 5]
  }

  if (size === 'xl') {
    fontSize = [6, 7, 8, 9]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    margin = ['12px', '16px', '18px', '20px']
    height = [34, 46, 56, 68]
    width = [34, 46, 56, 68]
    strokeWidth = [4, 5, 6, 7]
  }

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

  if (prefix) {
    prefixHover = {
      '&:hover > #prefix-span > #prefix': {
        color: hoverColor,
        ...prefix.type.hover,
      },
    }
    prefix = cloneElement(prefix, {
      id: 'prefix',
      sx: {
        position: 'relative',
        height: height,
        width: width,
        mr: children ? margin : [0],
        strokeWidth: strokeWidth,
        verticalAlign: prefixAlign,
        transition: 'color 0.15s, transform 0.15s',
        ...prefix.props.sx,
      },
    })
  }

  if (suffix) {
    suffixHover = {
      '&:hover > #suffix-span >#suffix': {
        color: hoverColor,
        ...suffix.type.hover,
      },
    }
    suffix = cloneElement(suffix, {
      id: 'suffix',
      sx: {
        height: height,
        width: width,
        ml: children ? margin : [0],
        strokeWidth: strokeWidth,
        verticalAlign: suffixAlign,
        transition: 'color 0.15s, transform 0.15s',
        ...suffix.props.sx,
      },
    })
  }

  const style = {
    border: 'none',
    background: 'transparent',
    display: 'block',
    color: baseColor,
    padding: [0],
    fontSize: children ? fontSize : 'inherit',
    fontFamily: children ? fontFamily : 'inherit',
    lineHeight: children ? 1.05 : 'inherit',
    textAlign: 'left',
    letterSpacing: letterSpacing,
    cursor: 'pointer',
    width: 'fit-content',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: hoverColor,
      },
      ...suffixHover,
      ...prefixHover,
    },
    ...sx,
  }

  const Inner = (
    <>
      <Box
        as='span'
        id='prefix-span'
        sx={{ display: 'inline-block', ...prefixOffset }}
      >
        {prefix && prefix}
      </Box>
      <Box as='span' sx={{ transition: 'color 0.15s' }}>
        {children}
      </Box>
      <Box
        as='span'
        id='suffix-span'
        sx={{ display: 'inline-block', ...suffixOffset }}
      >
        {suffix && suffix}
      </Box>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        internal={internal}
        tracking={tracking}
        sx={{
          ...style,
          textDecoration: 'none',
        }}
        {...props}
      >
        {Inner}
      </Link>
    )
  } else {
    return (
      <Box as='button' sx={style} {...props}>
        {Inner}
      </Box>
    )
  }
}

export default Button
