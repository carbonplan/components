import React from 'react'
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

const AvatarGroup = ({
  members,
  direction,
  align,
  spacing = 'md',
  width,
  maxWidth,
  fixedCount,
  sx,
}) => {
  if (members.length > fixedCount) {
    throw Error(
      `cannot render '${members.length}' avatars with a fixed count of '${fixedCount}'`
    )
  }

  let gap
  if (Object.keys(sizes).includes(spacing)) {
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
          return offset + idx
        } else {
          throw Error(`alignment '${align}' not recognized`)
        }
      })
  }

  return (
    <>
      {fixedCount && (
        <Row columns={fixedCount} gap={gap} sx={sx}>
          {members.map((props, idx) => (
            <Column key={idx} start={start(idx)}>
              <Avatar {...props} width={width} maxWidth={maxWidth} />
            </Column>
          ))}
        </Row>
      )}
      {!fixedCount && (
        <Group direction={direction} spacing={spacing} sx={sx}>
          {members.map((props, idx) => (
            <Avatar key={idx} {...props} width={width} maxWidth={maxWidth} />
          ))}
        </Group>
      )}
    </>
  )
}

export default AvatarGroup
