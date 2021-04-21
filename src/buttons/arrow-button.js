import React from 'react'
import { Box } from 'theme-ui'
import Arrow from '../arrow'

const ArrowButton = ({
  label,
  size = 'sm',
  color = 'primary',
  fill = 'primary',
  sx,
  ...props
}) => {
  let fontSize, fontFamily, letterSpacing, ml, top, height, width

  if (!['sm', 'md', 'lg', 'xl'].includes(size)) {
    throw new Error('Size must be sm, md, or lg')
  }

  if (size === 'sm') {
    fontSize = [2, 2, 2, 3]
    fontFamily = 'body'
    letterSpacing = 'body'
    top = ['2px']
    ml = [1, 1, 1, 2]
    height = 12
    width = 12
  }

  if (size === 'md') {
    fontSize = [4, 4, 4, 5]
    fontFamily = 'body'
    letterSpacing = 'body'
    top = ['3px']
    ml = [2]
    height = [18, 18, 18, 24]
    width = [18, 18, 18, 24]
  }

  if (size === 'lg') {
    fontSize = [5, 5, 6, 7]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    top = ['4px', '4px', '5px', '6px']
    ml = ['8px', '8px', '12px', '16px']
    height = [25, 25, 35, 45]
    width = [25, 25, 35, 45]
  }

  if (size === 'xl') {
    fontSize = [6, 7, 8, 9]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    top = ['5px', '7px', '9px', '11px']
    ml = ['8px', '12px', '12px', '16px']
    height = [34, 46, 56, 68]
    width = [34, 46, 56, 68]
  }

  const InnerArrow = () => {
    return (
      <Box
        as='span'
        id='container'
        sx={{
          ml: ml,
          display: 'inline-block',
        }}
      >
        <Arrow
          id='arrow'
          sx={{
            transition: 'fill 0.15s, transform 0.15s',
            position: 'relative',
            top: top,
            fill: fill,
            height: height,
            width: width,
          }}
        />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        fontSize: fontSize,
        fontFamily: fontFamily,
        lineHeight: 'heading',
        letterSpacing: letterSpacing,
        width: 'fit-content',
        transition: 'color 0.15s',
        color: color,
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: color === 'secondary' ? 'primary' : 'secondary',
          },
          '&:hover > #span-1 > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: color === 'secondary' ? 'primary' : 'secondary',
          },
          '&:hover > #span-1 > #span-2 > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: color === 'secondary' ? 'primary' : 'secondary',
          },
        },
        ...sx,
      }}
      {...props}
    >
      {!(typeof label === 'string') && (
        <span id='span-1'>
          {label}
          <InnerArrow />
        </span>
      )}
      {typeof label === 'string' && (
        <span id='span-1'>
          {label
            .split(' ')
            .slice(0, label.split(' ').length - 1)
            .join(' ')}{' '}
          <Box as='span' id='span-2' sx={{ whiteSpace: 'nowrap' }}>
            {label
              .split(' ')
              .slice(label.split(' ').length - 1, label.split(' ').length)}
            <InnerArrow />
          </Box>
        </span>
      )}
    </Box>
  )
}

export default ArrowButton
