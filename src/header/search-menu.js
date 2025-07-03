import React from 'react'
import { Box, Flex, Link } from 'theme-ui'
import { Arrow } from '@carbonplan/icons'
import Input from '../input'

const HoverArrow = () => {
  return (
    <Arrow
      id='arrow'
      sx={{
        pointerEvents: 'none',
        display: 'inline-block',
        position: 'absolute',
        right: ['-60px', '-68px', '-80px', '-104px'],
        top: ['32px', '32px', '46px', '62px'],
        opacity: 0,
        transition: 'opacity 0.2s ease-out',
        transform: 'rotate(45deg)',
        width: [36, 36, 48, 56],
        height: [36, 36, 48, 56],
      }}
    />
  )
}

const SearchMenu = ({ nav, mode, setExpanded }) => {
  return (
    <Flex
      sx={{
        gap: 7,
        position: 'relative',
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover  #arrow': {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          color: 'primary',
          fontSize: [6, 6, 7, 8],
          fontFamily: 'heading',
          letterSpacing: 'heading',
          py: [3, 3, 4, 5],
          textDecoration: 'none',
          display: 'block',
          transition: 'color 0.15s',
        }}
      >
        Search
      </Box>
      <Input
        size='xl'
        sx={{
          borderBottomWidth: 0,
          fontSize: [6, 6, 7, 8],
          flexShrink: 0,
        }}
        color='secondary'
      />
      <HoverArrow />
    </Flex>
  )
}

export default SearchMenu
