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
  let titleWidth = []
  titleWidth[0] = 6
  titleWidth[1] = descriptionStart[1] - 1
  titleWidth[2] = descriptionStart[2] - 2
  titleWidth[3] = descriptionStart[3] - 2

  return (
    <Row sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8] }}>
      <Column start={[1, 1, 2, 2]} width={titleWidth}>
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
