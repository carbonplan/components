import React from 'react'
import { Box, Text, Grid, Link } from 'theme-ui'
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
        <Box sx={{ fontSize: [2] }}>
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'heading',
              letterSpacing: 'mono',
              mb: [2],
            }}
          >
            EMAIL
          </Text>
          <Link
            href='mailto:hello@carbonplan.org'
            sx={{ textDecoration: 'none' }}
          >
            hello@carbonplan.org
          </Link>
        </Box>
        <Box sx={{}}>
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'heading',
              letterSpacing: 'mono',
              mb: [2],
            }}
          >
            FOLLOW
          </Text>
          <Link
            href='https://twitter.com/carbonplanorg'
            sx={{ textDecoration: 'none' }}
          >
            @carbonplanorg
          </Link>
        </Box>
        <Box>
          <Text
            sx={{
              fontSize: [2],
              fontFamily: 'body',
              color: 'secondary',
              maxWidth: '90%',
            }}
          >
            CarbonPlan is a registered non-profit public benefit corporation in
            California with 501(3)(c) status.
          </Text>
        </Box>
      </Grid>
      <Grid columns={[1, 1, '35% 30% 30%']} sx={{ mb: ['2px'] }}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              fontFamily: 'mono',
              letterSpacing: 'mono',
              position: 'absolute',
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              color: 'secondary',
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <Text sx={{ fontSize: [1] }}>
              (c) 2020 CARBONPLAN, SAN FRANCISCO, CA
            </Text>
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              fontFamily: 'mono',
              letterSpacing: 'mono',
              position: 'absolute',
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              color: 'secondary',
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <NextLink href='/terms' passHref>
              <Link sx={{ textDecoration: 'none' }}>
                <Text sx={{ fontSize: [1], color: 'secondary' }}>
                  READ OUR TERMS
                </Text>
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
