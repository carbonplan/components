import React from 'react'
import Caption, { CaptionProps } from './caption'

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
