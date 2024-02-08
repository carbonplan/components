import React, { useState, useEffect, useRef } from 'react'
import { Box, Flex } from 'theme-ui'

const styles = {
  clim: (setClim) => {
    return {
      bg: 'unset',
      border: 'none',
      color: 'primary',
      px: 0,
      fontFamily: 'mono',
      fontSize: ['9px', 0, 0, 1],
      letterSpacing: 'smallcaps',
      textTransform: 'uppercase',
      transition: 'border 0.15s',
      userSelect: setClim ? 'none !important' : 'unset',
      width: 'fit-content',
      minWidth: 'fit-content',
    }
  },
}

const DIMENSIONS = {
  width: ['10px', '16px', '16px', '17px'],
  height: ['80px', '110px', '110px', '130px'],
}

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null
}

const Gradient = ({ colormap, discrete, horizontal, width, height }) => {
  const step = (1 / colormap.length) * 100
  const isHex = String(colormap[0]).startsWith('#')
  const values = colormap.map((color, i) => {
    const rgbColor = isHex ? hexToRgb(color) : color
    const position = `${i * step}% ${
      discrete && i < colormap.length - 1 ? `${(i + 1) * step}%` : ''
    }`
    return `rgb(${rgbColor}) ${position}`
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
        mt: horizontal ? ['1px', '1px', '1px', 0] : 0,
        border: ({ colors }) => `solid 1px ${colors.hinted}`,
        background: css,
      }}
    />
  )
}

const Label = ({ label, units, horizontal }) => (
  <Box
    sx={
      !horizontal && {
        width: ['13px', '17px', '17px', '19px'],
        alignSelf: 'flex-end',
      }
    }
  >
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
  sx,
  sxClim,
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
    const listener = (e) => {
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
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [clim])

  const ClimMin = () => {
    return (
      <Box
        id='min'
        as={setClim ? 'button' : 'div'}
        ref={climRef[0]}
        tabIndex={0}
        sx={{
          ...styles.clim(setClim),
          ml: label
            ? horizontal
              ? bottom
                ? '0px'
                : '10px'
              : ['2px', '1px', '1px', '2px']
            : 0,
          mr: horizontal ? ['2px', '1px', '1px', '2px'] : 0,
          mb: horizontal ? 0 : ['-2px', '-2px', '-2px', '-3px'],
          borderBottom: setClim
            ? ({ colors }) => `solid 1px ${colors.primary}`
            : 'unset',
          cursor: setClim
            ? horizontal
              ? 'ew-resize'
              : 'ns-resize'
            : 'default',
          ...sxClim,
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
        as={setClim ? 'button' : 'div'}
        ref={climRef[1]}
        tabIndex={0}
        sx={{
          ...styles.clim(setClim),
          ml: horizontal
            ? ['2px', '1px', '1px', '2px']
            : ['2px', '1px', '1px', '2px'],
          mt: horizontal ? 0 : ['-2px', '-3px', '-3px', '-3px'],
          borderBottom: setClim
            ? ({ colors }) => `solid 1px ${colors.primary}`
            : 'unset',
          cursor: setClim
            ? horizontal
              ? 'ew-resize'
              : 'ns-resize'
            : 'default',
          ...sxClim,
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
      {...props}
      sx={{
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'flex-start',
        gap: ['3px', '6px', '6px', '7px'],
        height: !horizontal ? '100%' : 'unset',
        ...sx,
      }}
    >
      {label && <Label label={label} units={units} horizontal={horizontal} />}
      <Flex
        sx={{
          flexGrow: horizontal ? 1 : 'unset',
          flexDirection: 'column',
          ml: bottom && label ? '4px' : '0px',
          height: !horizontal ? '100%' : 'unset',
        }}
      >
        <Flex
          sx={{
            gap: ['3px', '6px', '6px', '7px'],
            height: !horizontal ? '100%' : 'unset',
          }}
        >
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
