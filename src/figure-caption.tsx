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

export default FigureCaption
