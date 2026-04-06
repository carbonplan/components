import React, { useEffect } from 'react'
import { default as NextLink } from 'next/link'
import { Link, ThemeUIStyleObject } from 'theme-ui'
import { Arrow } from '@carbonplan/icons'

const sx = {
  link: (
    current: string | undefined,
    label: string,
    first = false
  ): ThemeUIStyleObject => {
    return {
      width: 'auto',
      color: current === label ? 'secondary' : 'text',
      fontSize: [6, 6, 7, 8],
      fontFamily: 'heading',
      letterSpacing: 'heading',
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px',
      borderBottomWidth: '1px',
      borderTopWidth: first ? '1px' : '0px',
      py: [3, 3, 4, 5],
      textDecoration: 'none',
      display: 'block',
      position: 'relative',
      transition: 'color 0.15s',
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover > #arrow': {
          opacity: 1,
        },
      },
      '&:hover': {
        color: current == label ? 'secondary' : 'text',
      },
    }
  },
}

const links = [
  { url: 'about', display: 'About' },
  { url: 'research', display: 'Research' },
  { url: 'blog', display: 'Blog' },
  { url: 'press', display: 'Press' },
]

const HoverArrow = () => {
  return (
    <Arrow
      id='arrow'
      sx={{
        pointerEvents: 'none',
        display: 'inline-block',
        position: 'absolute',
        left: ['-60px', '-68px', '-80px', '-104px'],
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

interface NavProps {
  link: { url: string; display: string }
  mode?: 'homepage' | 'local' | 'remote'
  nav?: string
  first: boolean
  setExpanded: (expanded: boolean) => void
}

const Nav = ({ link, mode, nav, first, setExpanded }: NavProps) => {
  const { url, display } = link
  const href = mode === 'remote' ? 'https://carbonplan.org/' + url : '/' + url

  if (mode === 'homepage' || (mode === 'local' && nav === url)) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <Link
          onClick={() => {
            if (nav === url) setExpanded(false)
          }}
          sx={sx.link(nav, url, first)}
        >
          <HoverArrow />
          {display}
        </Link>
      </NextLink>
    )
  } else {
    return (
      <Link href={href} sx={sx.link(nav, url, first)}>
        <HoverArrow />
        {display}
      </Link>
    )
  }
}

interface NavigationMenuProps {
  nav?: string
  mode?: 'homepage' | 'local' | 'remote'
  setExpanded: (expanded: boolean) => void
}

const NavigationMenu = ({ nav, mode, setExpanded }: NavigationMenuProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [setExpanded])

  return (
    <>
      {links.map((d, i) => (
        <Nav
          key={i}
          link={d}
          mode={mode}
          nav={nav}
          first={i === 0}
          setExpanded={setExpanded}
        />
      ))}
    </>
  )
}

export default NavigationMenu
