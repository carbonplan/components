import React from 'react'
import { Box } from 'theme-ui'
import Row from './row'
import Column from './column'
import Sidenote from './sidenote'

const Heading = ({
  children,
  sidenote,
  description,
  descriptionStart = [1, 3, 5, 5],
  descriptionWidth = [5, 5, 5, 4],
  sx,
}) => {
  return (
    <Row sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8] }}>
      <Column start={[1, 1, 2, 2]} width={[6, 2, 3, 3]}>
        <Box as='h1' variant='styles.h1' sx={{ my: [0, 0, 0, 0], ...sx }}>
          {children}
        </Box>
      </Column>
      {sidenote && <Sidenote>{sidenote}</Sidenote>}
      {description && (
        <Column start={descriptionStart} width={descriptionWidth}>
          <Box
            sx={{
              mt: [4, '5px', '20px', '31px'],
              fontSize: [2, 2, 2, 3],
            }}
          >
            {description}
          </Box>
        </Column>
      )}
    </Row>
  )
}

export default Heading
