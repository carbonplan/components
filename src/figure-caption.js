import React from 'react'
import Caption from './caption'

const FigureCaption = ({ as = 'figcaption', number, children }) => {
  return (
    <Caption as={as} number={number} label='figure'>
      {children}
    </Caption>
  )
}

FigureCaption.displayName = 'FigureCaption'

export default FigureCaption
