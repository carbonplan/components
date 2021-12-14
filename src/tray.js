import React from 'react'
import { Box } from 'theme-ui'
import Row from './row'
import Column from './column'

const Tray = ({ expanded, sx, children }) => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '56px',
          bottom: '0px',
          left: '0px',
          width: 'calc(100vw)',
          mt: ['56px'],
          bg: 'background',
          zIndex: 1000,
          transition: 'opacity 0.15s',
          opacity: expanded ? 0.9 : 0,
          pointerEvents: expanded ? 'all' : 'none',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          width: 'calc(100vw)',
          top: '0px',
          mt: ['56px'],
          pb: [6, 7, 7, 8],
          pt: [5, 6, 7, 8],
          bg: 'background',
          zIndex: 1100,
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          transition: 'transform 0.15s',
          ml: [-3, -4, -5, -6],
          pl: [3, 4, 5, 6],
          pr: [3, 4, 5, 6],
          transform: expanded ? 'translateY(0)' : 'translateY(-100%)',
          ...sx,
        }}
      >
        <Row>
          <Column start={[1, 1, 1, 1]} width={[6, 8, 10, 10]}>
            {children}
          </Column>
        </Row>
      </Box>
    </>
  )
}

export default Tray
