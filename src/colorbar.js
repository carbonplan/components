import React, { useState, useEffect, useRef } from 'react'
import { Box, Flex } from 'theme-ui'

const sx = {
  clim: (setClim) => {
    return {
      fontFamily: 'mono',
      fontSize: ['9px', 0, 0, 1],
      letterSpacing: 'smallcaps',
      textTransform: 'uppercase',
      '&:hover': {
        borderBottom: setClim
          ? ({ colors }) => `solid 1px ${colors.primary} !important`
          : 'unset',
      },
      '&:focus': {
        outline: 'none',
        borderBottom: setClim
          ? ({ colors }) => `solid 1px ${colors.primary} !important`
          : 'unset',
      },
      transition: 'border 0.15s',
      userSelect: setClim ? 'none !important' : 'unset',
      width: 'fit-content',
    }
  },
}

const DIMENSIONS = {
  width: ['10px', '16px', '16px', '17px'],
  height: ['80px', '110px', '110px', '130px'],
}

const Gradient = ({ colormap, discrete, horizontal, width, height }) => {
  const step = (1 / colormap.length) * 100
  const values = colormap.map((d, i) => {
    return `rgb(${d}) ${i * step}% ${
      discrete && i < colormap.length - 1 ? `${(i + 1) * step}%` : ''
    }`
  })

  const css = `linear-gradient(to ${
    horizontal ? 'right' : 'top'
  }, ${values.join(',')})`

  return (
    <Box
      sx={{
        ...(horizontal
          ? {
              width: width || DIMENSIONS.height,
              height: height || DIMENSIONS.width,
            }
          : {
              width: width || DIMENSIONS.width,
              minHeight: height || DIMENSIONS.height,
            }),
        mt: horizontal ? [0, '1px', '1px', 0] : 0,
        border: ({ colors }) => `solid 1px ${colors.hinted}`,
        background: css,
      }}
    />
  )
}

const Label = ({ label, units, horizontal }) => (
  <Box sx={!horizontal && { alignSelf: 'flex-end' }}>
    <Box
      sx={{
        mb: horizontal ? 0 : ['-4px', '-4px', '-4px', '-3px'],
        fontFamily: 'mono',
        fontSize: ['9px', 0, 0, 1],
        letterSpacing: 'smallcaps',
        textTransform: 'uppercase',
        ...(horizontal
          ? {}
          : {
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              overflow: 'visible',
            }),
      }}
    >
      {label}{' '}
      <Box
        as='span'
        sx={{
          textTransform: 'none',
          color: 'secondary',
          display: 'inline-block',
        }}
      >
        {units}
      </Box>
    </Box>
  </Box>
)

const Colorbar = ({
  colormap,
  label,
  clim,
  setClim,
  setClimStep = 1,
  discrete,
  units,
  width,
  height,
  format = (d) => d,
  horizontal = false,
  bottom = false,
  ...props
}) => {
  if (!Array.isArray(colormap)) {
    throw new Error(`expected array for colormap, got '${colormap}'.`)
  }

  const climRef = [useRef(), useRef()]
  const [climMinDragging, setClimMinDragging] = useState(false)
  const [climMaxDragging, setClimMaxDragging] = useState(false)

  let x,
    y,
    dx,
    dy = 0
  let id = null
  let init = [0, 0]
  let scale = setClimStep

  const draggingFunction = (e) => {
    if (id === 'min' && !climMinDragging) setClimMinDragging(true)
    if (id === 'max' && !climMaxDragging) setClimMaxDragging(true)
    dx = e.pageX - x
    dy = e.pageY - y
    if (horizontal) {
      if (id === 'min')
        setClim((prev) => [Math.min(init[0] + dx * scale, init[1]), prev[1]])
      if (id === 'max')
        setClim((prev) => [prev[0], Math.max(init[1] + dx * scale, init[0])])
    } else {
      if (id === 'min')
        setClim((prev) => [Math.min(init[0] - dy * scale, init[1]), prev[1]])
      if (id === 'max')
        setClim((prev) => [prev[0], Math.max(init[1] - dy * scale, init[0])])
    }
  }

  const handleMouseDown = (e) => {
    y = e.pageY
    x = e.pageX
    id = e.target.id
    init = clim

    document.body.setAttribute(
      'style',
      horizontal
        ? 'cursor: ew-resize !important'
        : 'cursor: ns-resize !important'
    )
    document.addEventListener('mousemove', draggingFunction)
    const updater = () => {
      document.body.setAttribute('style', 'cursor: unset')
      document.removeEventListener('mousemove', draggingFunction)
      window.removeEventListener('mouseup', updater)
      if (id === 'min') setClimMinDragging(false)
      if (id === 'max') setClimMaxDragging(false)
    }
    window.addEventListener('mouseup', updater)
  }

  const increment = (e) => {
    if (climRef[0].current === document.activeElement) {
      e.preventDefault()
      setClim((prev) => [Math.min(prev[0] + scale, prev[1]), prev[1]])
      climRef[0].current.focus()
    }
    if (climRef[1].current === document.activeElement) {
      e.preventDefault()
      setClim((prev) => [prev[0], Math.max(prev[1] + scale, prev[0])])
      climRef[1].current.focus()
    }
  }

  const decrement = (e) => {
    if (climRef[0].current === document.activeElement) {
      e.preventDefault()
      setClim((prev) => [Math.min(prev[0] - scale, prev[1]), prev[1]])
      climRef[0].current.focus()
    }
    if (climRef[1].current === document.activeElement) {
      e.preventDefault()
      setClim((prev) => [prev[0], Math.max(prev[1] - scale, prev[0])])
      climRef[1].current.focus()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (
        ['ArrowUp', 'ArrowRight'].includes(e.code) ||
        ['ArrowUp', 'ArrowRight'].includes(e.key)
      ) {
        increment(e)
      }
      if (
        ['ArrowDown', 'ArrowLeft'].includes(e.code) ||
        ['ArrowDown', 'ArrowLeft'].includes(e.key)
      ) {
        decrement(e)
      }
    })
  }, [])

  const ClimMin = () => {
    return (
      <Box
        id='min'
        ref={climRef[0]}
        tabIndex={0}
        sx={{
          ...sx.clim(setClim),
          ml: label ? (horizontal ? (bottom ? '0px' : '10px') : '2px') : 0,
          mr: horizontal ? ['2px', '1px', '1px', '2px'] : 0,
          mb: horizontal ? 0 : ['-2px', '-2px', '-2px', '-3px'],
          borderBottom: setClim
            ? climMinDragging
              ? ({ colors }) => `solid 1px ${colors.primary}`
              : ({ colors }) => `solid 1px ${colors.secondary}`
            : 'unset',

          cursor: setClim
            ? horizontal
              ? 'ew-resize'
              : 'ns-resize'
            : 'default',
        }}
        onMouseDown={setClim ? handleMouseDown : () => {}}
        onClick={() => climRef[0].current.focus()}
      >
        {format(clim[0])}
      </Box>
    )
  }

  const ClimMax = () => {
    return (
      <Box
        id='max'
        ref={climRef[1]}
        tabIndex={0}
        sx={{
          ...sx.clim(setClim),
          ml: horizontal ? ['2px', '1px', '1px', '2px'] : '2px',
          mt: horizontal ? 0 : ['-2px', '-3px', '-3px', '-3px'],
          borderBottom: setClim
            ? climMaxDragging
              ? ({ colors }) => `solid 1px ${colors.primary}`
              : ({ colors }) => `solid 1px ${colors.secondary}`
            : 'unset',
          cursor: setClim
            ? horizontal
              ? 'ew-resize'
              : 'ns-resize'
            : 'default',
        }}
        onMouseDown={setClim ? handleMouseDown : () => {}}
        onClick={() => climRef[1].current.focus()}
      >
        {format(clim[1])}
      </Box>
    )
  }

  return (
    <Flex
      sx={{
        ...props.sx,
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'flex-start',
        gap: ['3px', '6px', '6px', '7px'],
      }}
    >
      {label && <Label label={label} units={units} horizontal={horizontal} />}
      <Flex sx={{ flexDirection: 'column', ml: bottom ? '4px' : '0px' }}>
        <Flex sx={{ gap: ['3px', '6px', '6px', '7px'] }}>
          {horizontal && clim && !bottom && <ClimMin />}
          <Gradient
            colormap={colormap}
            horizontal={horizontal}
            discrete={discrete}
            width={width}
            height={height}
          />
          {horizontal && clim && !bottom && <ClimMax />}
        </Flex>
        {horizontal && clim && bottom && (
          <Flex sx={{ justifyContent: 'space-between' }}>
            <ClimMin />
            <ClimMax />
          </Flex>
        )}
      </Flex>

      {!horizontal && (
        <Flex
          sx={{
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            height: height || DIMENSIONS.height,
          }}
        >
          {clim && <ClimMin />}
          {clim && <ClimMax />}
        </Flex>
      )}
    </Flex>
  )
}

export default Colorbar
