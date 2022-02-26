import React from 'react'
import { Flex } from 'theme-ui'
import { RotatingArrow } from '@carbonplan/icons'
import Button from './button'

const LinkGroup = ({
  members,
  color,
  inverted,
  tracking,
  size = 'xs',
  rowGap = [2, 2, 2, 3],
  columnGap = [3, 3, 3, 4],
  direction = 'horizontal',
  sx,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        rowGap,
        columnGap,
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      {members.map((d, i) => {
        return (
          <Button
            key={i}
            href={d.href}
            label={d.label}
            size={size}
            sx={{ color: color }}
            inverted={inverted}
            suffix={<RotatingArrow />}
            tracking={tracking}
          >
            {d.label}
          </Button>
        )
      })}
    </Flex>
  )
}

export default LinkGroup
