import React, { forwardRef } from 'react'
import { useThemeUI, Slider as ThemeSlider } from 'theme-ui'

const Slider = ({ sx, ...props }, ref) => {
  const color = sx && sx.color ? sx.color : 'primary'
  const {
    theme: { rawColors: colors },
  } = useThemeUI()

  return (
    <ThemeSlider
      ref={ref}
      sx={{
        '&::-webkit-slider-thumb': {
          height: [22, 18, 16],
          width: [22, 18, 16],
          boxShadow: `0 0 0 0px ${colors.secondary}`,
          transition: 'box-shadow .15s ease',
        },
        '&::-moz-range-thumb': {
          height: [22, 18, 16],
          width: [22, 18, 16],
          boxShadow: `0 0 0 0px ${colors.secondary}`,
          transition: 'box-shadow .15s ease',
        },
        ':focus-visible': {
          outline: 'none !important',
          background: `${colors.secondary} !important`,
        },
        ':focus': {
          color: color,
          '&::-webkit-slider-thumb': {
            boxShadow: `0 0 0 4px ${colors.secondary}`,
          },
          '&::-moz-range-thumb': {
            boxShadow: `0 0 0 4px ${colors.secondary}`,
          },
        },
        color: color,
        ...sx,
      }}
      {...props}
    />
  )
}

export default forwardRef(Slider)
