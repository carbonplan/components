import React from 'react'
import { Input as ThemedInput } from 'theme-ui'
import getSizeStyles from './utils/get-size-styles'

const Input = ({ size, prefix, suffix, inverted, sx, align, ...props }) => {
  const defaultColor = inverted ? 'secondary' : 'primary'

  const styles = {
    color: defaultColor,
    borderColor: 'secondary',
    borderStyle: 'solid',
    borderWidth: '0px',
    borderBottomWidth: '1px',
    borderRadius: '0px',
    transition: '0.15s',
    borderBottomWidth: '1px',
    p: [1, 1, 1],
    pl: [0, 0, 0],
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
