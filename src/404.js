import React from 'react'
import { Box, Text, Styled, Container, Grid } from 'theme-ui'
import PoopSad from './emoji/poop-sad'
import Layout from './layout'

const Custom404 = () => {
  return (
    <Layout footer={false}>
      <Container sx={{ px: [3, 4, 4] }}>
        <Grid
          gap={['12px', '16px', '16px']}
          columns={[1, 1, '480px 1fr']}
          sx={{ mb: [5, 0, 0], width: ['90%', '90%', '50%'], pt: [0, 0, 6]}}
        >
          <Box>
            <Styled.h1
            >
              {' '}
              Oops!{' '}
            </Styled.h1>
            <Styled.h3
            >
              Sorry but we can't seem to find the page you are looking for.
            </Styled.h3>
            <Text
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: 'mono',
                mt: [4, 5, 5]
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
              ml: [0, 0, 3],
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
