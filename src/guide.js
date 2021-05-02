import React, { useState, useEffect } from 'react'
import { Box, Container } from 'theme-ui'
import Row from './row'
import Column from './column'

const Guide = ({ color = 'muted' }) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    function handler(event) {
      const { key, keyCode, metaKey } = event
      if (key === ';' && metaKey) {
        setDisplay((prev) => !prev)
      }
    }

    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        left: 0,
        top: 0,
        zIndex: color === 'teal' ? 5000 : -1,
        pointerEvents: 'none',
        display: display ? 'initial' : 'none',
      }}
    >
      <Container>
        <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
          <GuideColumns
            indices={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            color={color}
          />
        </Box>
        <Box sx={{ display: ['none', 'initial', 'none', 'none'] }}>
          <GuideColumns indices={[1, 2, 3, 4, 5, 6, 7, 8]} color={color} />
        </Box>
        <Box sx={{ display: ['initial', 'none', 'none', 'none'] }}>
          <GuideColumns indices={[1, 2, 3, 4, 5, 6]} color={color} />
        </Box>
      </Container>
    </Box>
  )
}

const colorCycle = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'pink',
]

function GuideColumns({ indices, color }) {
  const sx = {
    outerGuideColumn: {
      borderStyle: 'solid',
      borderWidth: '0px',
      borderLeftWidth: color === 'teal' ? '0px' : '1px',
      borderRightWidth: color === 'teal' ? '0px' : '1px',
      opacity: color == 'teal' ? 0.4 : 1,
    },
    innerGuideColumn: {
      borderStyle: 'solid',
      borderWidth: '0px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
      opacity: color == 'teal' ? 0.4 : 1,
    },
  }

  return (
    <Row>
      {indices.map((i) => {
        return (
          <Column
            key={i}
            start={[i]}
            width={[1, 1]}
            dl={0.5}
            dr={0.5}
            sx={{
              bg: color === 'teal' ? 'teal' : 'transparent',
              height: '100vh',
              ...sx.innerGuideColumn,
            }}
          >
            <Box
              sx={{
                mx: ['12px', 3, 3, 4],
                bg: color === 'teal' ? 'background' : 'transparent',
                height: '100%',
                borderLeftColor:
                  color === 'rainbow' ? colorCycle[i % 8] : 'muted',
                borderRightColor:
                  color === 'rainbow' ? colorCycle[i % 8] : 'muted',
                ...sx.outerGuideColumn,
              }}
            ></Box>
          </Column>
        )
      })}
    </Row>
  )
}

export default Guide
