import React from 'react'
import { IconButton, useColorMode, IconButtonProps } from 'theme-ui'
import { useCallback } from 'react'
// @ts-expect-error - @carbonplan/icons lacks types field in published package
import { Sun } from '@carbonplan/icons'

export type DimmerProps = IconButtonProps

const Dimmer = ({ sx = {}, ...props }: DimmerProps) => {
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
