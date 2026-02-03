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
  ...props
}) => {
  if (!name && !src && !github) {
    console.warn('must specify either name, github, or src')
  }

  let srcProp, altProp
  if (name) {
    srcProp = `https://images.carbonplan.org/team/${name
      .toLowerCase()
      .replaceAll(' ', '-')}.png`
    altProp = alt || name
  } else if (github) {
    srcProp = `https://github.com/${github}.png`
    altProp = alt || github
  } else {
    srcProp = src
    altProp = alt
  }

  return (
    <Box
      sx={{
        width: width,
        maxWidth: maxWidth,
        height: 'auto',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'top',
        ...sx,
      }}
      {...props}
    >
      <Image
        alt={altProp}
        src={srcProp}
        sx={{
          filter:
            color && color !== 'transparent'
              ? 'grayscale(100%) contrast(200%) brightness(100%)'
              : 'none',
          width: '100%',
          display: 'block',
        }}
      />
      {color && color !== 'transparent' && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bg: color,
            width: '100%',
            height: '100%',
            opacity: 0.75,
            pointerEvents: 'none',
          }}
        />
      )}
    </Box>
  )
}

export default Avatar
