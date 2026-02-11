import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MouseEventHandler,
} from 'react'
import { Box, Flex, FlexProps, ThemeUIStyleObject, get } from 'theme-ui'

type SetClim = (setter: (prev: [number, number]) => [number, number]) => void

export interface ColorbarProps extends FlexProps {
  colormap: string[]
  label?: ReactNode
  clim?: [number, number]
  setClim?: SetClim
  setClimStep?: number
  units?: ReactNode
  width?: string
  height?: string
  format?: (d: number) => ReactNode
  discrete?: boolean
  horizontal?: boolean
  bottom?: boolean
  sx?: ThemeUIStyleObject
  sxClim?: ThemeUIStyleObject
}
const styles = {
  clim: (setClim?: SetClim): ThemeUIStyleObject => {
    return {
      bg: 'unset',
      border: 'none',
      color: 'primary',
      px: 0,
      fontFamily: 'mono',
      fontSize: ['9px', 0, 0, 1],
      letterSpacing: 'smallcaps',
      textTransform: 'uppercase' as const,
      transition: 'border 0.15s',
      userSelect: (setClim ? 'none !important' : 'unset') as 'none',
      width: 'fit-content',
      minWidth: 'fit-content',
    }
  },
}

const DIMENSIONS = {
  width: ['10px', '16px', '16px', '17px'],
  height: ['80px', '110px', '110px', '130px'],
}

const hexToRgb = (hex: string) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null
}

const Gradient = ({
  colormap,
  discrete,
  horizontal,
  width,
  height,
}: Pick<
  ColorbarProps,
  'colormap' | 'discrete' | 'horizontal' | 'width' | 'height'
>) => {
  const step = (1 / colormap.length) * 100
  const isHex = colormap[0].startsWith('#')
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
        border: (t) => `solid 1px ${get(t, 'colors.hinted')}`,
        background: css,
      }}
    />
  )
}

const Label = ({
  label,
  units,
  horizontal,
}: Pick<ColorbarProps, 'label' | 'units' | 'horizontal'>) => (
  <Box
    sx={
      horizontal
        ? undefined
        : {
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
}: ColorbarProps) => {
  if (!Array.isArray(colormap)) {
    throw new Error(`expected array for colormap, got '${colormap}'.`)
  }

  const climRef = [useRef<HTMLDivElement>(), useRef<HTMLDivElement>()]
  const [climMinDragging, setClimMinDragging] = useState(false)
  const [climMaxDragging, setClimMaxDragging] = useState(false)

  let x: number,
    y: number,
    dx: number,
    dy: number = 0
  let id: null | string = null
  let init = [0, 0]
  let scale = setClimStep

  const draggingFunction = (e: MouseEvent) => {
    if (!setClim) return
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

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    y = e.pageY
    x = e.pageX
    id = (e.target as HTMLDivElement).id
    init = clim!

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

  const increment = (e: KeyboardEvent) => {
    if (!setClim) return

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

  const decrement = (e: KeyboardEvent) => {
    if (!setClim) return

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
    const listener = (e: KeyboardEvent) => {
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
            ? (t) => `solid 1px ${get(t, 'colors.primary')}`
            : 'unset',
          cursor: setClim
            ? horizontal
              ? 'ew-resize'
              : 'ns-resize'
            : 'default',
          ...sxClim,
        }}
        onMouseDown={setClim ? handleMouseDown : () => {}}
        onClick={() => climRef[0].current?.focus()}
      >
        {format(clim![0])}
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
            ? (t) => `solid 1px ${get(t, 'colors.primary')}`
            : 'unset',
          cursor: setClim
            ? horizontal
              ? 'ew-resize'
              : 'ns-resize'
            : 'default',
          ...sxClim,
        }}
        onMouseDown={setClim ? handleMouseDown : () => {}}
        onClick={() => climRef[1].current?.focus()}
      >
        {format(clim![1])}
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
