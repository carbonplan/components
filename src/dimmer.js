import React from 'react'
import { Box, IconButton, useColorMode } from 'theme-ui'
import { useCallback } from 'react'

const Dimmer = ({ sx, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()

  const toggle = useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }, [colorMode])

  return (
    <IconButton
      aria-label='Toggle dark mode'
      onClick={toggle}
      role='checkbox'
      aria-checked={colorMode == 'light'}
      sx={{
        width: 32,
        height: 32,
        display: 'inline-block',
        cursor: 'pointer',
        stroke: 'secondary',
        transition: 'stroke 0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            stroke: 'primary',
          },
        },
        ...sx,
      }}
      {...props}
    >
      <svg version='1.1' viewBox='0 0 24 24' strokeWidth='2' fill='none'>
        <circle cx='12' cy='12' r='4.77' />
        <line x1='12' x2='12' y2='4.06' />
        <line x1='12' y1='19.94' x2='12' y2='24' />
        <line x1='20.49' y1='3.51' x2='17.61' y2='6.39' />
        <line x1='6.39' y1='17.61' x2='3.51' y2='20.49' />
        <line x1='20.49' y1='20.49' x2='17.61' y2='17.61' />
        <line x1='6.39' y1='6.39' x2='3.51' y2='3.51' />
        <line x1='24' y1='12' x2='19.94' y2='12' />
        <line x1='4.06' y1='12' y2='12' />
      </svg>
    </IconButton>
  )
}

export default Dimmer
