import React from 'react'
import { Box } from 'theme-ui'
import Avatar from './avatar'
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

const Blank = ({ overflow, maxWidth }) => {
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
}) => {
  let gap
  if (sizes.hasOwnProperty(spacing)) {
    gap = sizes[spacing]
  } else {
    gap = spacing
  }

  let start = (idx) => 'auto'
  if (align) {
    if (!Array.isArray(align)) {
      align = [align]
    }
    start = (idx) =>
      align.map((d) => {
        if (d === 'left') {
          return 'auto'
        } else if (d === 'right') {
          const offset = Math.max(1, fixedCount - members.length + 1)
          return (offset + idx) % fixedCount
        } else {
          throw Error(`alignment '${align}' not recognized`)
        }
      })
  }

  const excess = members.length > limit
  const overflow = members.length - limit + 1

  return (
    <>
      {fixedCount && (
        <Row columns={fixedCount} gap={gap} sx={sx} {...props}>
          {members.map((props, idx) => (
            <Column key={idx} start={start(idx)}>
              {(!excess || idx < limit - 1) && (
                <Avatar {...props} width={width} maxWidth={maxWidth} />
              )}
              {excess && idx === limit - 1 && (
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
