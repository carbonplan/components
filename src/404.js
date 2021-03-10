import React from 'react'
import { Box, Styled, Container, Grid } from 'theme-ui'
import PoopSad from './emoji/poop-sad'
import Layout from './layout'

const Custom404 = () => {
  return (
    <Layout footer={false} title={'404 / carbonplan'}>
      <Grid
        gap={['12px', '16px', '16px']}
        columns={[1, 1, '480px 1fr']}
        sx={{ mb: [5, 0, 0], pt: [0, 0, 6] }}
      >
        <Box>
          <Styled.h1>Oops!</Styled.h1>
          <Box
            sx={{
              fontSize: [4],
              lineHeight: 'h3',
              mt: [3, 4, 4],
              mb: [2, 3, 3],
              maxWidth: ['90%', '90%', '400px'],
            }}
          >
            Sorry but we can't seem to find the page you are looking for.
          </Box>
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: 'mono',
              fontSize: [2],
              mt: [4, 5, 5],
            }}
          >
            ERROR CODE 404
          </Box>
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
    </Layout>
  )
}

export default Custom404
