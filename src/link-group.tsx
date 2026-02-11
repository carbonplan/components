import React from 'react'
import { Flex, ResponsiveStyleValue, ThemeUIStyleObject } from 'theme-ui'
// @ts-expect-error - @carbonplan/icons lacks types field in published package
import { RotatingArrow } from '@carbonplan/icons'
import Button from './button'

export interface LinkGroupProps {
  members: { href: string; label: string }[]
  color?: string
  inverted?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rowGap?: ResponsiveStyleValue<number>
  columnGap?: ResponsiveStyleValue<number>
  direction?: 'horizontal' | 'vertical'
  sx?: ThemeUIStyleObject
}

const LinkGroup = ({
  members,
  color,
  inverted,
  size = 'xs',
  rowGap = [2, 2, 2, 3],
  columnGap = [3, 3, 3, 4],
  direction = 'horizontal',
  sx,
}: LinkGroupProps) => {
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
            size={size}
            sx={{ color: color }}
            inverted={inverted}
            suffix={<RotatingArrow />}
          >
            {d.label}
          </Button>
        )
      })}
    </Flex>
  )
}

export default LinkGroup
