import React from 'react'
import HeaderIcon, { HeaderIconProps } from './header-icon'

export type MenuProps = HeaderIconProps

const Menu = (props: HeaderIconProps) => {
  return (
    <HeaderIcon {...props}>
      <line x1='52' y1='29.9' x2='16' y2='29.9' />
      <line x1='52' y1='6.1' x2='16' y2='6.1' />
      <line x1='52' y1='18' x2='16' y2='18' />
    </HeaderIcon>
  )
}

export default Menu
