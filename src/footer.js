import React from 'react'
import { Box, Grid, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Monogram from './monogram'
import Row from './row'
import Column from './column'

const Footer = () => {
  return (
    <Box
      sx={{
        mt: [5, 6, 7, 8],
        mb: [5, 6, 7, 8],
      }}
    >
      <Row sx={{ mb: [0, 0, 4, 5] }}>
        <Column start={[1, 2]} width={[3, 4]}>
          <Box>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                fontFamily: 'heading',
                letterSpacing: 'mono',
                mb: [2],
              }}
            >
              EMAIL
            </Box>
            <Link
              href='mailto:hello@carbonplan.org'
              sx={{
                textDecoration: 'none',
                fontSize: [2, 2, 2, 3],
              }}
            >
              hello@carbonplan.org
            </Link>
          </Box>
        </Column>
        <Column start={[4, 6]} width={[3, 3]}>
          <Box>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                fontFamily: 'heading',
                letterSpacing: 'mono',
                mb: [2],
              }}
            >
              FOLLOW
            </Box>
            <Link
              href='https://twitter.com/carbonplanorg'
              sx={{
                textDecoration: 'none',
                fontSize: [2, 2, 2, 3],
              }}
            >
              @carbonplanorg
            </Link>
          </Box>
        </Column>
        <Column
          start={[1, 9]}
          width={[6, 3, 3, 3]}
          sx={{ mt: [6, 6, 0], mb: [3, 3, 0] }}
        >
          <Box>
            <Box
              sx={{
                fontSize: [2, 2, 2, 3],
                fontFamily: 'body',
                color: 'secondary',
              }}
            >
              CarbonPlan is a registered non-profit public benefit corporation
              in California with 501(3)(c) status.
            </Box>
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: ['2px'], mt: [5, 5, 4] }}>
        <Column
          start={[1, 2]}
          width={[6, 4]}
          sx={{
            display: 'flex',
            alignItems: ['flex-start', 'flex-start', 'flex-end'],
          }}
        >
          <Box
            sx={{
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              pt: [2],
            }}
          >
            <Box
              sx={{
                color: 'secondary',
                fontSize: [1, 1, 1, 2],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              (c) 2020 CARBONPLAN, SAN FRANCISCO, CA
            </Box>
          </Box>
        </Column>
        <Column
          start={[1, 6]}
          width={[3, 3]}
          sx={{
            display: 'flex',
            alignItems: ['flex-start', 'flex-start', 'flex-end'],
            mt: [4, 5, 0, 0],
          }}
        >
          <Box
            sx={{
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              pt: '5px',
            }}
          >
            <NextLink href='/terms' passHref>
              <Link
                sx={{
                  textDecoration: 'none',
                  fontSize: [1, 1, 1, 2],
                  color: 'secondary',
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                }}
              >
                READ OUR TERMS
              </Link>
            </NextLink>
          </Box>
        </Column>
        <Column start={[1, 9]} width={[3, 3]} sx={{}}>
          <Monogram sx={{ mt: [5, 6, 4, 5], mb: ['-12px'] }} />
        </Column>
      </Row>
    </Box>
  )
}

export default Footer
