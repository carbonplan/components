import React from 'react'
import { Search as SearchIcon } from '@carbonplan/icons'
import HeaderIcon, { HeaderIconProps } from './header-icon'

const Search = (props: HeaderIconProps) => {
  return (
    <HeaderIcon {...props} label='Toggle Search'>
      <SearchIcon width={50} height={30} x={8} />
    </HeaderIcon>
  )
}

export default Search
