import React from 'react'
import { Box, Image, ThemeUIStyleObject } from 'theme-ui'

export type AvatarProps = {
  color?: string
  width?: string
  maxWidth?: string | number
  name?: string
  github?: string
  alt?: string
  src?: string
  sx?: ThemeUIStyleObject
  [key: string]: any
}

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
}: AvatarProps) => {
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
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'top',
        bg: color,
        ...sx,
      }}
      {...props}
    >
      <Image
        alt={altProp}
        src={srcProp}
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
