import React from 'react'
import Caption, { CaptionProps } from './caption'

export type FigureCaptionProps = CaptionProps

const FigureCaption = ({
  as = 'figcaption',
  number,
  children,
}: CaptionProps) => {
  return (
    <Caption as={as} number={number} label='figure'>
      {children}
    </Caption>
  )
}

FigureCaption.displayName = 'FigureCaption'

export default FigureCaption
