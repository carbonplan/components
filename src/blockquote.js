import React from 'react'
import { Box } from 'theme-ui'

const Blockquote = ({ children }) => {
  const firstChar = children.props.children.slice(0, 1)
  const textIndent = firstChar === '“' ? ['-0.4em'] : [0]
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
