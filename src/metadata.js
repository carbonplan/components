import React from 'react'
import { useThemeUI, Box, Text } from 'theme-ui'
import { useState, useEffect } from 'react'

const Value = ({ mode }) => {
  const [display, setDisplay] = useState(init(mode))

  useEffect(() => {
    if (mode === 'mouse') {
      const setFromEvent = (e) => {
        const x = format(e.clientX, 4)
        const y = format(e.clientY, 4)
        setDisplay(`X,Y: ${x},${y}`)
      }
      window.addEventListener('mousemove', setFromEvent)
      return () => {
        window.removeEventListener('mousemove', setFromEvent)
      }
    }
    if (mode === 'scroll') {
      const setFromEvent = (e) => {
        const y = scrollFraction(window, document)
        setDisplay(`SCROLL: 0.${format((y * 100).toFixed(0), 2)}`)
      }
      window.addEventListener('scroll', setFromEvent)
      const y = scrollFraction(window, document)
      return () => {
        window.removeEventListener('scroll', setFromEvent)
      }
    }
  }, [])

  return (
    <Text
      sx={{
        whiteSpace: 'nowrap',
        display: 'inline-block',
        mr: '-6px',
        fontFamily: 'mono',
        letterSpacing: 'body',
        color: 'secondary',
        fontSize: [1],
        textTransform: 'uppercase',
      }}
    >
      {display}
    </Text>
  )
}

const Metadata = ({ mode }) => {
  const { theme } = useThemeUI()

  const color = theme.rawColors.secondary

  return (
    <Box
      sx={{
        userSelect: 'none',
        position: 'fixed',
        bottom: 42,
        right: 24,
        transformOrigin: 'right',
        transform: 'rotate(90deg)',
        display: ['none', 'none', 'initial'],
      }}
    >
      <Value mode={mode} />
      <svg
        fill={color}
        opacity='0.8'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <circle r={5} cx={19} cy={19} />
      </svg>
      <Text
        sx={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          ml: [2],
          fontFamily: 'mono',
          letterSpacing: 'body',
          color: 'secondary',
          fontSize: [1],
          textTransform: 'uppercase',
        }}
      >
        {color}
      </Text>
    </Box>
  )
}

function init(mode) {
  if (mode === 'mouse') {
    return `X,Y: ${format(0, 4)},${format(0, 4)}`
  } else if (mode === 'scroll') {
    return `SCROLL: 0.${format((0).toFixed(0), 2)}`
  } else {
    return mode
  }
}

function format(num, pad) {
  return num.toString().padStart(pad, '0')
}

function scrollFraction(window, documnt) {
  return Math.min(window.scrollY / (document.body.offsetHeight - 770), 0.99)
}

export default Metadata
