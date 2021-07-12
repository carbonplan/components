import React from 'react'
import { Box, IconButton, useColorMode } from 'theme-ui'
import { useCallback } from 'react'
import { Sun } from '@carbonplan/icons'

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
      sx={{
        width: 32,
        height: 32,
        display: 'inline-block',
        cursor: 'pointer',
        color: 'secondary',
        ...sx,
      }}
      {...props}
    >
      <Sun
        sx={{
          strokeWidth: '1.75',
          transition: 'stroke 0.15s',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              stroke: 'primary',
            },
          },
        }}
      />
    </IconButton>
  )
}

export default Dimmer
