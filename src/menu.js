import React from 'react'
import { IconButton } from 'theme-ui'

const Menu = ({ value, sx, ...props }) => {
  return (
    <IconButton
      sx={{
        cursor: 'pointer',
        fill: 'none',
        strokeWidth: '2px',
        stroke: 'text',
        '.paren': {
          opacity: '0',
        },
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover .paren': {
            opacity: '1',
          },
        },
        ...sx,
      }}
      aria-label='Toggle Menu'
      {...props}
    >
      {!value && (
        <svg
          style={{
            width: '50px',
            height: '30px',
            marginTop: '-3px',
            flexShrink: 0,
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 68 36'
        >
          <line x1='52' y1='29.9' x2='16' y2='29.9' />
          <line x1='52' y1='6.1' x2='16' y2='6.1' />
          <line x1='52' y1='18' x2='16' y2='18' />
          <path
            style={{ transition: 'all 0.2s' }}
            className='paren'
            d='M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6'
          />
          <path
            style={{ transition: 'all 0.2s' }}
            className='paren'
            d='M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6'
          />
        </svg>
      )}
      {value && (
        <svg
          style={{
            width: '50px',
            height: '30px',
            marginTop: '-3px',
            flexShrink: 0,
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 68 36'
        >
          <line x1='50.85' y1='29.79' x2='17.15' y2='6.21' />
          <line x1='17.15' y1='29.79' x2='50.85' y2='6.21' />
          <path
            style={{ transition: 'all 0.2s' }}
            className='paren'
            d='M6.4,1.2c-6.3,10.3-6.3,23.3,0,33.6'
          />
          <path
            style={{ transition: 'all 0.2s' }}
            className='paren'
            d='M61.6,34.8c6.3-10.3,6.3-23.3,0-33.6'
          />
        </svg>
      )}
    </IconButton>
  )
}

export default Menu
