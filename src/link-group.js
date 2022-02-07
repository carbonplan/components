import React from 'react'
import { Box } from 'theme-ui'
import { RotatingArrow } from '@carbonplan/icons'
import Group from './group'
import Button from './button'

const LinkGroup = ({
  members,
  color,
  inverted,
  tracking,
  size = 'xs',
  direction = 'horizontal',
  spacing = 'sm',
  sx,
}) => {
  return (
    <Group direction={direction} spacing={spacing} sx={sx}>
      {members.map((d, i) => {
        return (
          <Button
            key={i}
            href={d.href}
            label={d.label}
            size={size}
            sx={{
              color: color,
              mb: [2, 1, 1, 1],
            }}
            inverted={inverted}
            suffix={<RotatingArrow />}
            tracking={tracking}
          >
            {d.label}
          </Button>
        )
      })}
    </Group>
  )
}

export default LinkGroup
