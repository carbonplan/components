import React, { useState } from 'react'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, IconButton, Link } from 'theme-ui'
import Logo from './logo'
import Row from './row'
import Column from './column'

const sx = {
  link: {
    width: '100%',
    textAlign: 'right',
    color: 'text',
    fontSize: [6, 6, 7, 8],
    pb: [1, 0, 0],
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      color: 'secondary',
      borderBottomWidth: '1px',
      borderColor: 'secondary',
    },
  },
}

const Header = ({ status, mode }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return (
    <Box
      sx={{
        width: '100%',
        pt: ['12px'],
        pb: [3],
      }}
    >
      <Row>
        <Column start={[1]} width={[2]}>
          <Box sx={{ display: 'block', width: 'fit-content' }}>
            {(mode == 'homepage' || mode == 'local') && (
              <NextLink href='/' passHref>
                <Link
                  aria-label='CarbonPlan Homepage'
                  sx={{ display: 'block' }}
                >
                  <Logo sx={{ cursor: 'pointer' }} />
                </Link>
              </NextLink>
            )}
            {(mode == null || mode == 'remote') && (
              <Link
                href='https://carbonplan.org'
                aria-label='CarbonPlan Homepage'
                sx={{ display: 'block' }}
              >
                <Logo sx={{ cursor: 'pointer' }} />
              </Link>
            )}
          </Box>
        </Column>
        <Column
          start={[4, 9]}
          width={[2, 2]}
          sx={{ display: 'flex', alignItems: 'center' }}
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
          start={[6, 12]}
          width={[1, 1]}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            onClick={toggle}
            sx={{
              cursor: 'pointer',
              fill: 'none',
              strokeWidth: '2px',
              stroke: 'text',
              '.paren': {
                opacity: '0',
              },
              '&:hover .paren': {
                opacity: '1',
              },
            }}
            aria-label='Toggle Menu'
          >
            {!expanded && (
              <svg
                style={{
                  width: '50px',
                  height: '30px',
                  transform: 'scale(2)',
                  marginTop: '-3px',
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
            {expanded && (
              <svg
                style={{
                  width: '50px',
                  height: '30px',
                  transform: 'scale(2)',
                  marginTop: '-3px',
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
        </Column>
        <Box>
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
              zIndex: 5000,
              mt: ['56px'],
              pt: [4],
              transition: '0.25s',
            }}
          >
            <Container>
              <Box
                sx={{
                  display: expanded ? 'inherit' : 'none',
                  position: 'relative',
                }}
              >
                <Box sx={{ position: 'absolute', right: 0 }}>
                  {mode == 'homepage' && (
                    <Box>
                      <NextLink href='/about' passHref>
                        <Link onClick={() => setExpanded(false)} sx={sx.link}>
                          About
                        </Link>
                      </NextLink>
                      <Link href='/research' sx={sx.link}>
                        Research
                      </Link>
                      <NextLink href='/team' passHref>
                        <Link onClick={() => setExpanded(false)} sx={sx.link}>
                          Team
                        </Link>
                      </NextLink>
                      <NextLink href='/faq' passHref>
                        <Link onClick={() => setExpanded(false)} sx={sx.link}>
                          FAQ
                        </Link>
                      </NextLink>
                    </Box>
                  )}
                  {mode == 'local' && (
                    <Box>
                      <Link href='/about' sx={sx.link}>
                        About
                      </Link>
                      <Link href='/research' sx={sx.link}>
                        Research
                      </Link>
                      <Link href='/team' sx={sx.link}>
                        Team
                      </Link>
                      <Link href='/faq' sx={sx.link}>
                        FAQ
                      </Link>
                    </Box>
                  )}
                  {(mode == null || mode == 'remote') && (
                    <Box>
                      <Link href='https://carbonplan.org/about' sx={sx.link}>
                        About
                      </Link>
                      <Link href='https://carbonplan.org/research' sx={sx.link}>
                        Research
                      </Link>
                      <Link href='https://carbonplan.org/team' sx={sx.link}>
                        Team
                      </Link>
                      <Link href='https://carbonplan.org/faq' sx={sx.link}>
                        FAQ
                      </Link>
                    </Box>
                  )}
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Row>
    </Box>
  )
}

export default Header
