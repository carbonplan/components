import React from 'react'
import { Box, Text, Heading, Container, Grid } from 'theme-ui'
import PoopSad from './emoji/poop-sad'
import Layout from './layout'

const Custom404 = () => {
  return (
    <Layout footer={false}>
      <Container sx={{ px: [3, 3, 4] }}>
        <Grid
          gap={['12px', '16px', '16px']}
          columns={[1, 1, '480px 1fr']}
          sx={{ mb: [5, 0, 0], width: ['90%', '90%', '50%'], pt: [2, 2, 5] }}
        >
          <Box>
            <Heading
              sx={{
                my: [4, 5, 5],
                letterSpacing: 'heading',
                fontSize: [6, 7, 7],
              }}
            >
              {' '}
              Oops!{' '}
            </Heading>
            <Heading
              sx={{
                my: [4, 5, 5],
                fontSize: [3, 4, 4],
                fontFamily: 'body',
                lineHeight: 1.25,
              }}
            >
              Sorry but we can't seem to find the page you are looking for.
            </Heading>
            <Text
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              ERROR CODE 404
            </Text>
          </Box>
          <Box
            sx={{
              width: ['70%', '70%', '450px'],
              mr: [4],
              mt: [2, 2, 5],
              ml: [3],
              fill: 'primary',
            }}
          >
            <PoopSad />
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Custom404
