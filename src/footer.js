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
        <Box>
          <Text sx={{ fontFamily: 'heading', letterSpacing: 'mono', mb: [2] }}>
            EMAIL
          </Text>
          <Link
            href='mailto:hello@carbonplan.org'
            sx={{ textDecoration: 'none' }}
          >
            hello@carbonplan.org
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontFamily: 'heading', letterSpacing: 'mono', mb: [2] }}>
            FOLLOW
          </Text>
          <Link
            href='https://twitter.com/carbonplanorg'
            target='_blank'
            rel='noreferrer'
            sx={{ textDecoration: 'none' }}
          >
            @carbonplanorg
          </Link>
        </Box>
        <Box sx={{ fontFamily: 'body' }}>
          <Text sx={{ color: 'secondary', maxWidth: '90%' }}>
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
              fontSize: [1],
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <Text>(c) 2020 CARBONPLAN, SAN FRANCISCO, CA</Text>
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
              fontSize: [1],
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <Text>
              <NextLink href='/terms' passHref>
                <Link sx={{ textDecoration: 'none' }}>
                  <Text sx={{ color: 'secondary' }}>READ OUR TERMS</Text>
                </Link>
              </NextLink>
            </Text>
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
