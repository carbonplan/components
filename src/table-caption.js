import React from 'react'
import Caption from './caption'

const TableCaption = ({ as = 'figcaption', number, children }) => {
  return (
    <Caption as={as} number={number} label='table'>
      {children}
    </Caption>
  )
}

export default TableCaption
