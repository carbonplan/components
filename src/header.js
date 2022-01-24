import React, { useState } from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, Link } from 'theme-ui'
import { Arrow } from '@carbonplan/icons'
import Logo from './logo'
import Row from './row'
import Column from './column'
import Menu from './menu'

const sx = {
  link: (current, label, first = false) => {
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

const Nav = ({ link, mode, nav, first, setExpanded }) => {
  const { url, display } = link
  const href = mode === 'remote' ? 'https://carbonplan.org/' + url : '/' + url

  if (mode === 'homepage' || (mode === 'local' && nav === url)) {
    return (
      <NextLink href={href} passHref>
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

const NavGroup = ({ links, nav, mode, setExpanded }) => {
  return links.map((d, i) => {
    return (
      <Nav
        key={i}
        link={d}
        mode={mode}
        nav={nav}
        first={i === 0}
        setExpanded={setExpanded}
      />
    )
  })
}

const Header = ({ status, mode, nav, menuItems }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return (
    <Row
      sx={{
        pt: ['12px'],
        pb: [3],
      }}
    >
      <Column start={[1]} width={[2]}>
        <Box
          sx={{ pointerEvents: 'all', display: 'block', width: 'fit-content' }}
        >
          {(mode == 'homepage' || mode == 'local') && (
            <NextLink href='/' passHref>
              <Link
                aria-label='CarbonPlan Homepage'
                sx={{
                  display: 'block',
                }}
              >
                <Logo
                  id='logo'
                  sx={{
                    cursor: 'pointer',
                    color: 'primary',
                  }}
                />
              </Link>
            </NextLink>
          )}
          {(mode == null || mode == 'remote') && (
            <Link
              href='https://carbonplan.org'
              aria-label='CarbonPlan Homepage'
              sx={{ display: 'block' }}
            >
              <Logo sx={{ cursor: 'pointer', color: 'primary' }} />
            </Link>
          )}
        </Box>
      </Column>
      <Column
        start={[4, 9]}
        width={[2, 2]}
        dr={1}
        sx={{
          display: [status ? 'flex' : 'none', 'flex', 'flex', 'flex'],
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            fontSize: [1, 2, 3],
            position: 'relative',
            top: ['-2px', '-3px', '-3px'],
          }}
        >
          {status ? `(${status})` : ''}
        </Box>
      </Column>
      <Column
        start={[status ? 6 : 4, 6, 11, 11]}
        width={[status ? 1 : 3, 3, 2, 2]}
        sx={{ zIndex: 5000 }}
      >
        <Flex sx={{ pointerEvents: 'all', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              display: [status ? 'none' : 'flex', 'flex', 'flex', 'flex'],
              mr: '18px',
              gap: '18px',
              opacity: expanded ? 0 : 1,
              transition: 'opacity 0.15s',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {menuItems}
          </Box>
          <Menu
            sx={{
              flexShrink: 0,
              mr: ['-2px'],
            }}
            value={expanded}
            onClick={toggle}
          />
        </Flex>
      </Column>
      <Box
        sx={{
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? 'all' : 'none',
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          minWidth: '0px',
          maxHeight: '100vh',
          width: '100vw',
          backgroundColor: 'background',
          zIndex: 4000,
          pt: ['79px'],
          transition: 'opacity 0.25s',
        }}
      >
        <Container>
          <Row>
            <Column start={[2, 4, 7, 7]} width={[5, 4, 5, 5]}>
              <Box
                as='nav'
                sx={{
                  display: expanded ? 'inherit' : 'none',
                  mt: [5, 5, 5, 6],
                }}
              >
                <NavGroup
                  links={links}
                  nav={nav}
                  mode={mode}
                  setExpanded={setExpanded}
                />
              </Box>
            </Column>
          </Row>
        </Container>
      </Box>
    </Row>
  )
}

export default Header
