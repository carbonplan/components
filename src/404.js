import React from 'react'
import { Box, Styled, Container, Grid } from 'theme-ui'
import PoopSad from './emoji/poop-sad'
import Layout from './layout'
import Row from './row'
import Column from './column'

const Custom404 = () => {
  return (
    <Layout footer={false} title={'404 / carbonplan'}>
      <Row sx={{ mb: [5, 0, 0], pt: [0, 0, 6] }}>
        <Column start={[1, 1, 3, 3]} width={[6, 4, 4, 4]}>
          <Styled.h1>Oops!</Styled.h1>
          <Box
            sx={{
              fontSize: [4, 4, 4, 5],
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
              fontSize: [2, 2, 2, 3],
              mt: [4, 5, 5],
            }}
          >
            ERROR CODE 404
          </Box>
        </Column>
        <Column start={[1, 5, 7, 7]} width={[4, 4, 4, 4]}>
          <Box
            sx={{
              width: ['100%'],
              mt: [2, 4, 4, 5],
              fill: 'primary',
            }}
          >
            <PoopSad />
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

export default Custom404
