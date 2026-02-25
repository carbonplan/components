import React from 'react'
import { Box, BoxProps } from 'theme-ui'
import getSxColor from './utils/get-sx-color'

export interface TagProps
  extends BoxProps,
    Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof BoxProps | 'value'
    > {
  label?: BoxProps['aria-label']
  value?: boolean
}
const Tag = ({ label, value, sx, children, ...props }: TagProps) => {
  const color = getSxColor(sx)
  const isClickable = props && (props.onClick || props.onDoubleClick)

  return (
    <Box
      as={isClickable ? 'button' : 'span'}
      role='checkbox'
      aria-checked={value}
      aria-label={label}
      sx={{
        display: 'inline-block',
        fontSize: [1, 1, 1, 2],
        fontFamily: 'mono',
        letterSpacing: 'mono',
        cursor: isClickable ? 'pointer' : 'inherit',
        color: color,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderColor: color,
        lineHeight: 'body',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        textTransform: 'uppercase',
        userSelect: 'none',
        transition: 'opacity 0.05s',
        pt: ['1px'],
        pb: ['2px'],
        px: [0],
        m: [0],
        opacity: value == null || value ? 1 : color === 'primary' ? 0.24 : 0.33,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Tag
