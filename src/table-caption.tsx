import React, { ReactNode } from 'react'
import { BoxProps } from 'theme-ui'
import Caption from './caption'

export interface TableCaptionProps {
  as?: BoxProps['as']
  number?: number
  children: ReactNode
}

const TableCaption = ({
  as = 'figcaption',
  number,
  children,
}: TableCaptionProps) => {
  return (
    <Caption as={as} number={number} label='table'>
      {children}
    </Caption>
  )
}

TableCaption.displayName = 'TableCaption'

export default TableCaption
