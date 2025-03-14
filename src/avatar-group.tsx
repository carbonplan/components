import React from 'react'
import { Box, ThemeUIStyleObject } from 'theme-ui'
import Avatar, { AvatarProps } from './avatar'
import Row from './row'
import Column from './column'
import Group from './group'

const sizes = {
  xs: [1],
  sm: [3],
  md: [5],
  lg: [7],
  xl: [9],
}

type SizeKey = keyof typeof sizes

type BlankProps = {
  overflow: number
  maxWidth?: string | number
}

const Blank = ({ overflow, maxWidth }: BlankProps) => {
  return (
    <Box
      sx={{
        bg: 'muted',
        height: '100%',
        maxWidth: maxWidth,
        borderRadius: '50%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [3, 3, 3, 4],
          }}
        >
          +{overflow}
        </Box>
      </Box>
    </Box>
  )
}

type Alignment = 'left' | 'right'

type StartValue = 'auto' | number | (number | 'auto')[]

export type AvatarGroupProps = {
  members: AvatarProps[]
  direction?: 'horizontal' | 'vertical'
  align?: Alignment | Alignment[]
  spacing?: SizeKey | number | number[]
  limit?: number
  width?: string
  maxWidth?: string | number
  fixedCount?: number
  sx?: ThemeUIStyleObject
  [key: string]: any
}

const AvatarGroup = ({
  members,
  direction = 'horizontal',
  align,
  spacing = 'md',
  limit,
  width,
  maxWidth,
  fixedCount,
  sx,
  ...props
}: AvatarGroupProps) => {
  let gap: number[] | number

  if (typeof spacing === 'string' && spacing in sizes) {
    gap = sizes[spacing as SizeKey]
  } else {
    gap = spacing as number | number[]
  }

  let start = (idx: number): StartValue => 'auto'
  if (align) {
    if (!Array.isArray(align)) {
      align = [align]
    }
    start = (idx: number): StartValue => {
      const alignArray = align as Alignment[]
      return alignArray.map((d: Alignment) => {
        if (d === 'left') {
          return 'auto'
        } else if (d === 'right') {
          const offset = Math.max(1, (fixedCount ?? 0) - members.length + 1)
          return (offset + idx) % (fixedCount ?? 1)
        } else {
          throw Error(`alignment '${d}' not recognized`)
        }
      })
    }
  }

  const excess = limit !== undefined && members.length > limit
  const overflow = limit !== undefined ? members.length - limit + 1 : 0

  return (
    <>
      {fixedCount && (
        <Row columns={fixedCount} gap={gap} sx={sx} {...props}>
          {members.map((props, idx) => (
            <Column key={idx} start={start(idx)}>
              {(!excess || (limit !== undefined && idx < limit - 1)) && (
                <Avatar {...props} width={width} maxWidth={maxWidth} />
              )}
              {excess && limit !== undefined && idx === limit - 1 && (
                <Blank overflow={overflow} maxWidth={maxWidth} />
              )}
            </Column>
          ))}
        </Row>
      )}
      {!fixedCount && (
        <Group direction={direction} spacing={spacing} sx={sx} {...props}>
          {members.map((props, idx) => (
            <Avatar key={idx} {...props} width={width} maxWidth={maxWidth} />
          ))}
        </Group>
      )}
    </>
  )
}

export default AvatarGroup
