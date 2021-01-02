import React from 'react'
import { Box, Text } from 'theme-ui'
import { mix } from '@theme-ui/color'

const Badge = ({ value, sx }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: 'fit-content',
        height: '24px',
        borderRadius: '5px',
        backgroundColor:
          color == 'primary' || color == 'secondary'
            ? 'muted'
            : mix(color, 'background', 0.25),
        mr: [2],
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      <Text
        sx={{
          fontFamily: 'mono',
          mt: ['0px'],
          px: [1],
          color: color,
        }}
      >
        {value}
      </Text>
    </Box>
  )
}

export default Badge
