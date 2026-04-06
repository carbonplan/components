import React from 'react'
import HeaderIcon, { HeaderIconProps } from './header/header-icon'

export interface SettingsProps extends Omit<HeaderIconProps, 'onClick'> {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const Settings = (props: SettingsProps) => {
  return (
    <HeaderIcon label='Toggle Settings' {...props}>
      <line x1='24' y1='2.1' x2='24' y2='6.1' />
      <line x1='24' y1='24.1' x2='24' y2='33.9' />
      <line x1='44' y1='2.1' x2='44' y2='12.1' />
      <line x1='44' y1='30.1' x2='44' y2='33.9' />
      <circle cx='24' cy='15.1' r='5' />
      <circle cx='44' cy='21.1' r='5' />
    </HeaderIcon>
  )
}

export default Settings
