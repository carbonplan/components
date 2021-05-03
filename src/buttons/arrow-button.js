import React from 'react'
import { Box } from 'theme-ui'
import Arrow from '../arrow'

const ArrowButton = ({
  label,
  size = 'xs',
  color = 'primary',
  fill = 'primary',
  sx,
  ...props
}) => {
  let fontSize, fontFamily, letterSpacing, ml, top, height, width

  if (!['xs', 'sm', 'md', 'lg', 'xl'].includes(size)) {
    throw new Error('Size must be xs, md, or lg')
  }

  if (size === 'xs') {
    fontSize = [2, 2, 2, 3]
    fontFamily = 'body'
    letterSpacing = 'body'
    top = ['2px']
    ml = ['5px', '5px', '5px', '7px']
    height = [12, 12, 12, 13]
    width = [12, 12, 12, 13]
  }

  if (size === 'sm') {
    fontSize = [3, 3, 3, 4]
    fontFamily = 'body'
    letterSpacing = 'body'
    top = ['2px', '2px', '2px', '3px']
    ml = ['6px', '6px', '6px', '7px']
    height = [13, 13, 13, 18]
    width = [13, 13, 13, 18]
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
    top = ['3px', '3px', '5px', '7px']
    ml = ['10px', '10px', '12px', '16px']
    height = [24, 24, 34, 46]
    width = [24, 24, 34, 46]
  }

  if (size === 'xl') {
    fontSize = [6, 7, 8, 9]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    top = ['5px', '7px', '9px', '9px']
    ml = ['12px', '16px', '18px', '20px']
    height = [34, 46, 58, 67]
    width = [34, 46, 58, 67]
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
        cursor: 'pointer',
        color: color,
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: color !== 'primary' ? 'primary' : 'secondary',
          },
          '&:hover > #span-1 > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: color !== 'primary' ? 'primary' : 'secondary',
          },
          '&:hover > #span-1 > #span-2 > #container > #arrow': {
            transform: 'rotate(45deg)',
            fill: color !== 'primary' ? 'primary' : 'secondary',
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
