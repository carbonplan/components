import React from 'react'
import { Box } from 'theme-ui'

const Blockquote = ({ children }) => {
  let firstChar = ''

  if (Array.isArray(children) && children[0].props) {
    firstChar = children[0].props.children.slice(0, 1)
  } else if (children.props) {
    firstChar = children.props.children.slice(0, 1)
  }

  const textIndent = firstChar === '“' ? ['-0.3em'] : [0]

  return (
    <Box
      variant='styles.blockquote'
      sx={{
        textIndent: textIndent,
      }}
    >
      {children}
    </Box>
  )
}

export default Blockquote
