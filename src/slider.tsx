import React, { forwardRef } from 'react'
import { useThemeUI, Slider as ThemeSlider, ThemeUIStyleObject } from 'theme-ui'

export interface SliderProps
  extends React.ComponentPropsWithRef<typeof ThemeSlider> {
  sx?: ThemeUIStyleObject
}

const Slider = (
  { sx, ...props }: SliderProps,
  ref: React.Ref<HTMLInputElement>
) => {
  const color =
    sx &&
    typeof sx === 'object' &&
    'color' in sx &&
    typeof sx.color === 'string'
      ? sx.color
      : 'primary'
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
          boxShadow: `0 0 0 0px ${colors?.secondary}`,
          transition: 'box-shadow .15s ease',
        },
        '&::-moz-range-thumb': {
          height: [22, 18, 16],
          width: [22, 18, 16],
          boxShadow: `0 0 0 0px ${colors?.secondary}`,
          transition: 'box-shadow .15s ease',
        },
        ':focus-visible': {
          outline: 'none !important',
          background: `${colors?.secondary} !important`,
        },
        ':focus': {
          color: color,
          '&::-webkit-slider-thumb': {
            boxShadow: `0 0 0 4px ${colors?.secondary}`,
          },
          '&::-moz-range-thumb': {
            boxShadow: `0 0 0 4px ${colors?.secondary}`,
          },
        },
        color: color,
        ...sx,
      }}
      {...props}
    />
  )
}

export default forwardRef<HTMLInputElement, SliderProps>(Slider)
