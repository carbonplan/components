import React from 'react'
import { Box } from 'theme-ui'

const specialChars = ['“', '"', "'", '‘']

const Blockquote = ({ children }) => {
  let firstChar = ''

  if (
    Array.isArray(children) &&
    children[0].props &&
    typeof children[0].props.children === 'string'
  ) {
    firstChar = children[0].props.children.slice(0, 1)
    children[0].props.children = children[0].props.children.slice(1)
  } else if (children.props && typeof children.props.children === 'string') {
    firstChar = children.props.children.slice(0, 1)
    children.props.children = children.props.children.slice(1)
  } else if (typeof children === 'string') {
    firstChar = children.slice(0, 1)
    children = children.slice(1)
  }

  return (
    <Box variant='styles.blockquote'>
      {specialChars.includes(firstChar) && (
        <Box as='span' sx={{ position: 'absolute', ml: '-0.4em' }}>
          {firstChar}
        </Box>
      )}
      {children}
    </Box>
  )
}

export default Blockquote
