import React from 'react'
import { Box, Grid, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Monogram from './monogram'

const Footer = () => {
  return (
    <Box
      sx={{
        mt: [4],
        pt: [4],
        pb: [0, 2, 2],
        mb: [4, 4, 4],
      }}
    >
      <Grid columns={[1, 1, '35% 30% 30%']} sx={{ mb: [3] }}>
        <Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'heading',
              letterSpacing: 'mono',
              mb: [2],
            }}
          >
            EMAIL
          </Box>
          <Link
            href='mailto:hello@carbonplan.org'
            sx={{ textDecoration: 'none' }}
          >
            hello@carbonplan.org
          </Link>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'heading',
              letterSpacing: 'mono',
              mb: [2],
            }}
          >
            FOLLOW
          </Box>
          <Link
            href='https://twitter.com/carbonplanorg'
            sx={{ textDecoration: 'none' }}
          >
            @carbonplanorg
          </Link>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: [2],
              fontFamily: 'body',
              color: 'secondary',
              maxWidth: '90%',
            }}
          >
            CarbonPlan is a registered non-profit public benefit corporation in
            California with 501(3)(c) status.
          </Box>
        </Box>
      </Grid>
      <Grid columns={[1, 1, '35% 30% 30%']} sx={{ mb: ['2px'] }}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <Box
              sx={{
                color: 'secondary',
                fontSize: [1],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              (c) 2020 CARBONPLAN, SAN FRANCISCO, CA
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <NextLink href='/terms' passHref>
              <Link sx={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    fontSize: [1],
                    color: 'secondary',
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                  }}
                >
                  READ OUR TERMS
                </Box>
              </Link>
            </NextLink>
          </Box>
        </Box>
        <Box sx={{ mt: [3] }}>
          <Monogram sx={{ mb: ['-12px'] }} />
        </Box>
      </Grid>
    </Box>
  )
}

export default Footer
