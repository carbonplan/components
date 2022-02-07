import React from 'react'
import Caption from './caption'

const TableCaption = ({ number, children }) => {
  return (
    <Caption number={number} label='table'>
      {children}
    </Caption>
  )
}

export default TableCaption
