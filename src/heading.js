import React from 'react'
import { Box } from 'theme-ui'
import Row from './row'
import Column from './column'
import Sidenote from './sidenote'

const Heading = ({
  children,
  sidenote,
  variant = 'h1',
  description,
  descriptionStart = [1, 3, 5, 5],
  descriptionWidth = [5, 5, 5, 4],
  sx,
}) => {
  let titleWidth = [6, 6, 6, 6]
  if (description) {
    titleWidth[1] = descriptionStart[1] - 1
    titleWidth[2] = descriptionStart[2] - 2
    titleWidth[3] = descriptionStart[3] - 2
  }

  if (!['h1', 'h2'].includes(variant)) {
    throw new Error(`variant must be 'h1' or 'h2' but got '${variant}'`)
  }

  return (
    <Row sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8], ...sx }}>
      <Column start={[1, 1, 2, 2]} width={titleWidth}>
        {variant === 'h1' && (
          <Box as='h1' variant='styles.h1' sx={{ my: [0, 0, 0, 0] }}>
            {children}
          </Box>
        )}
        {variant === 'h2' && (
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0, 0] }}>
            {children}
          </Box>
        )}
      </Column>
      {sidenote && <Sidenote variant={variant}>{sidenote}</Sidenote>}
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
