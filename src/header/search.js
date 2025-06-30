import React from 'react'
import { Search as SearchIcon } from '@carbonplan/icons'
import HeaderIcon from './header-icon'

const Search = (props) => {
  return (
    <HeaderIcon label='Toggle Search' {...props}>
      <SearchIcon width={50} height={30} x={8} />
    </HeaderIcon>
  )
}

export default Search
