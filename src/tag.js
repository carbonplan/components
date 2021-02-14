import React from 'react'
import { Box } from 'theme-ui'

const Tag = ({ label, value, sx, children, ...props }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  return (
    <Box
      role='checkbox'
      aria-checked={value}
      aria-label={label}
      sx={{
        display: 'inline-block',
        fontSize: [1],
        fontFamily: 'mono',
        letterSpacing: 'mono',
        cursor:
          props && (props.onClick || props.onDoubleClick)
            ? 'pointer'
            : 'default',
        color: color,
        borderStyle: 'solid',
        borderColor: color,
        borderWidth: '0px',
        borderBottomWidth: '1px',
        textTransform: 'uppercase',
        userSelect: 'none',
        mb: [2],
        pt: ['1px'],
        pb: ['2px'],
        pl: [0],
        pr: [0],
        mr: [2],
        opacity: value == null || value ? 1 : color == 'primary' ? 0.2 : 0.27,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Tag
