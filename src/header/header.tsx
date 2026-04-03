import React, { useState, ReactNode } from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, Link } from 'theme-ui'
import Logo from '../logo'
import Row from '../row'
import Column from '../column'
import Menu from './menu'
import NavigationMenu from './navigation-menu'
import Search from './search'
import SearchMenu from './search-menu'

export interface HeaderProps {
  status?: string
  mode?: 'homepage' | 'local' | 'remote'
  nav?: string
  menuItems?: ReactNode
}

const Header = ({ status, mode, nav, menuItems }: HeaderProps) => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const expanded = searchExpanded || menuExpanded

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
            <NextLink href='/' passHref legacyBehavior>
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
          <Flex sx={{ gap: 4 }}>
            <Search
              value={searchExpanded}
              onClick={() => {
                setSearchExpanded(!searchExpanded)
                !searchExpanded && setMenuExpanded(false)
              }}
            />
            <Menu
              sx={{
                flexShrink: 0,
                mr: ['-2px'],
              }}
              value={menuExpanded}
              onClick={() => {
                setMenuExpanded(!menuExpanded)
                !menuExpanded && setSearchExpanded(false)
              }}
            />
          </Flex>
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
            {menuExpanded ? (
              <Column start={[2, 4, 7, 7]} width={[5, 4, 5, 5]}>
                <Box
                  as='nav'
                  sx={{
                    display: menuExpanded ? 'inherit' : 'none',
                    mt: [5, 5, 5, 6],
                  }}
                >
                  <NavigationMenu
                    nav={nav}
                    mode={mode}
                    setExpanded={setMenuExpanded}
                  />
                </Box>
              </Column>
            ) : (
              <Column start={[2]} width={[5, 4, 10, 10]}>
                <SearchMenu setExpanded={setSearchExpanded} />
              </Column>
            )}
          </Row>
        </Container>
      </Box>
    </Row>
  )
}

export default Header
