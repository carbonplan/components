import React from 'react'
import { Box, Flex } from 'theme-ui'

const sx = {
  clim: {
    fontFamily: 'mono',
    fontSize: ['9px', 0, 0, 1],
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
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
        mt: horizontal ? [0, '2px', '2px', 0] : 0,
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
        mb: horizontal ? 0 : ['-4px', '-3px', '-3px', '-3px'],
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
          color: 'primary',
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
  discrete,
  units,
  width,
  height,
  format = (d) => d,
  horizontal = false,
  ...props
}) => {
  if (!Array.isArray(colormap)) {
    throw new Error(`expected array for colormap, got '${colormap}'.`)
  }

  const ClimMin = () => {
    return (
      <Box
        sx={{
          ...sx.clim,
          ml: horizontal ? '10px' : '2px',
          mr: horizontal ? ['2px', '1px', '1px', '2px'] : 0,
          mb: horizontal ? 0 : ['-2px', '-2px', '-2px', '-3px'],
        }}
      >
        {format(clim[0])}
      </Box>
    )
  }

  const ClimMax = () => {
    return (
      <Box
        sx={{
          ...sx.clim,
          ml: horizontal ? ['2px', '1px', '1px', '2px'] : '2px',
          mt: horizontal ? 0 : ['-2px', '-3px', '-3px', '-3px'],
        }}
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
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: ['3px', '6px', '6px', '7px'],
      }}
    >
      {label && <Label label={label} units={units} horizontal={horizontal} />}

      {horizontal && clim && <ClimMin />}
      <Gradient
        colormap={colormap}
        horizontal={horizontal}
        discrete={discrete}
        width={width}
        height={height}
      />
      {horizontal && clim && <ClimMax />}

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
