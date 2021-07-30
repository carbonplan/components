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

const duplicateOptions = (options, defaultValue, overrides = {}) => {
  return Object.keys(options).reduce(
    (o, key) => Object.assign(o, { [key]: overrides[key] || defaultValue }),
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
    updatedToggle = duplicateOptions(values, false, { [value]: true })
  } else if (isSelectingAll && !isAllAlreadySelected) {
    // select all
    updatedToggle = duplicateOptions(values, true)
  } else if (isSelectingAll && isAllAlreadySelected) {
    if (multiSelect) {
      // deselect all
      updatedToggle = duplicateOptions(values, false)
    }
  } else if (multiSelect) {
    // additionally select value
    updatedToggle = { ...values, [value]: true }
  } else {
    // select only value
    updatedToggle = duplicateOptions(values, false, { [value]: true })
  }

  if (updatedToggle) {
    setValues(updatedToggle)
  }
}

const Filter = ({
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
      {label && <Box sx={sx.label}>{label}</Box>}
      <Box sx={{ mt: label ? [3] : 0 }}>
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
            onDoubleClick={() =>
              updateValues({
                values: optionValues,
                multiSelect: false,
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

export default Filter
