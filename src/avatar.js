import React from 'react'
import { Box, Image } from 'theme-ui'

const Avatar = ({ color, width, maxWidth, name, github, src, sx }) => {
  if (!name && !src && !github) {
    console.warn('must specify either name, github, or src')
  }

  let alt

  if (name) {
    src = `https://images.carbonplan.org/team/${name
      .toLowerCase()
      .replace(' ', '-')}.png`
    alt = name
  } else if (github) {
    src = `https://github.com/${github}.png`
    alt = github
  } else {
    alt = src
  }

  return (
    <Box
      sx={{
        width: width || '90px',
        maxWidth: maxWidth,
        height: 'auto',
        borderRadius: '50%',
        position: 'relative',
        display: 'inline-block',
        bg: color || 'transparent',
        ...sx,
      }}
    >
      <Image
        alt={alt}
        src={src}
        sx={{
          opacity: color ? 0.25 : 1,
          filter: color
            ? 'grayscale(100%) contrast(200%) brightness(100%)'
            : 'none',
          width: '100%',
          height: 'auto',
          borderRadius: '50%',
          display: 'block',
        }}
      />
    </Box>
  )
}

export default Avatar
