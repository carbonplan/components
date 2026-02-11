import React, { Children, PropsWithChildren } from 'react'
import { Box } from 'theme-ui'

export type BlockquoteProps = PropsWithChildren<{}>

const specialChars = ['“', '"', "'", '‘']

const Blockquote = ({ children }: BlockquoteProps) => {
  return (
    <Box variant='styles.blockquote'>
      {Children.map(children, (d: React.ReactNode, i: number) => {
        let firstChar = ''
        let remaining: React.ReactNode = d
        if (React.isValidElement(d) && typeof d.props.children === 'string') {
          firstChar = d.props.children.slice(0, 1)
          remaining = d.props.children.slice(1)
        } else if (typeof d === 'string') {
          firstChar = d.slice(0, 1)
          remaining = d.slice(1)
        }

        return (
          <>
            {specialChars.includes(firstChar) && (
              <Box as='span' sx={{ position: 'absolute', ml: '-0.4em' }}>
                {firstChar}
              </Box>
            )}
            {specialChars.includes(firstChar) ? remaining : d}
          </>
        )
      })}
    </Box>
  )
}

export default Blockquote
