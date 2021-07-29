import React from 'react'
import { Box } from 'theme-ui'
import Tag from './tag'

const sx = {
  label: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1, 1, 1, 2],
    color: 'secondary',
    userSelect: 'none',
    textTransform: 'uppercase',
  },
}

const duplicateOptionsWithValues = (options, value) => {
  return Object.keys(options).reduce(
    (o, key) => Object.assign(o, { [key]: value }),
    {}
  )
}

const isAll = (option) => {
  return (
    Object.keys(option).filter((d) => option[d]).length ==
    Object.keys(option).length
  )
}

const updateValues = ({ values, multiSelect, setValues, value }) => {
  const isAllAlreadySelected = isAll(values)
  const isSelectingAll = value === 'all'

  let updatedToggle
  if (!isSelectingAll && isAllAlreadySelected) {
    // select only value
    updatedToggle = duplicateOptionsWithValues(values, false)
    updatedToggle[value] = true
  } else if (isSelectingAll && !isAllAlreadySelected) {
    // select all
    updatedToggle = duplicateOptionsWithValues(values, true)
  } else if (isSelectingAll && isAllAlreadySelected) {
    if (multiSelect) {
      // deselect all
      updatedToggle = duplicateOptionsWithValues(values, false)
    }
  } else if (multiSelect) {
    // additionally select value
    updatedToggle = { ...values, [value]: true }
  } else {
    // select only value
    updatedToggle = duplicateOptionsWithValues(values, false)
    updatedToggle[value] = true
  }

  if (updatedToggle) {
    setValues(updatedToggle)
  }
}

const TagOptions = ({
  optionValues,
  setValues,
  label,
  optionColors,
  showAll = false,
  multiSelect = false,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Box sx={sx.label}>{label}</Box>
      <Box sx={{ mt: [3] }}>
        {showAll && (
          <Tag
            onClick={() =>
              updateValues({
                values: optionValues,
                multiSelect,
                setValues: setValues,
                value: 'all',
              })
            }
            value={isAll(optionValues)}
            sx={{ mr: [2] }}
          >
            All
          </Tag>
        )}
        {Object.keys(optionValues).map((d, i) => (
          <Tag
            onClick={() =>
              updateValues({
                values: optionValues,
                multiSelect,
                setValues: setValues,
                value: d,
              })
            }
            key={i}
            value={optionValues[d]}
            sx={{
              width: 'max-content',
              color: optionColors ? optionColors[d] : 'primary',
              mr: [2],
              mb: [1],
            }}
          >
            {d}
          </Tag>
        ))}
      </Box>
    </Box>
  )
}

export default TagOptions
