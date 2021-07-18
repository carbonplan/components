import React from 'react'
import { Input as ThemedInput } from 'theme-ui'
import getSizeStyles from './utils/get-size-styles'

const Input = ({ size = 'sm', inverted, sx, ...props }) => {
  const defaultColor = inverted ? 'secondary' : 'primary'

  const styles = {
    color: defaultColor,
    borderColor: 'secondary',
    borderStyle: 'solid',
    borderWidth: '0px',
    borderBottomWidth: '1px',
    borderRadius: '0px',
    transition: 'border 0.15s',
    borderBottomWidth: '1px',
    lineHeight: 1.2,
    width: 'calc(min(15ch, 100%))',
    p: [0],
    py: ['2px'],
    'input::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    'input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    ':focus': {
      borderColor: 'primary',
    },
    ':focus-visible': {
      outline: 'none !important',
      background: 'none !important',
    },
    ...getSizeStyles(size),
    ...sx,
  }
  return <ThemedInput {...props} sx={styles} />
}

export default Input
