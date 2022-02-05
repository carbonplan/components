import React from 'react'
import { Box, Image } from 'theme-ui'

const Avatar = ({
  color = 'transparent',
  width = '90px',
  maxWidth,
  name,
  github,
  alt,
  src,
  sx,
}) => {
  if (!name && !src && !github) {
    console.warn('must specify either name, github, or src')
  }

  if (name) {
    src = `https://images.carbonplan.org/team/${name
      .toLowerCase()
      .replace(' ', '-')}.png`
    alt = alt || name
  } else if (github) {
    src = `https://github.com/${github}.png`
    alt = alt || github
  }

  return (
    <Box
      sx={{
        width: width,
        maxWidth: maxWidth,
        height: 'auto',
        borderRadius: '50%',
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'top',
        bg: color,
        ...sx,
      }}
    >
      <Image
        alt={alt}
        src={src}
        sx={{
          opacity: color && color !== 'transparent' ? 0.25 : 1,
          filter:
            color && color !== 'transparent'
              ? 'grayscale(100%) contrast(200%) brightness(100%)'
              : 'none',
          width: '100%',
          borderRadius: '50%',
          display: 'block',
        }}
      />
    </Box>
  )
}

export default Avatar
