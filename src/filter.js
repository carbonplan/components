import React, { useMemo } from 'react'
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

  if (multiSelect) {
    if (isSelectingAll && !isAllAlreadySelected) {
      // select all
      updatedToggle = duplicateOptions(values, true)
    } else if (isSelectingAll && isAllAlreadySelected) {
      // deselect all
      updatedToggle = duplicateOptions(values, false)
    } else {
      // de/select value, inherit other values
      updatedToggle = { ...values, [value]: !values[value] }
    }
  } else {
    if (isSelectingAll && !isAllAlreadySelected) {
      // select all
      updatedToggle = duplicateOptions(values, true)
    } else if (isSelectingAll && isAllAlreadySelected) {
      // do nothing
    } else {
      // select only value
      updatedToggle = duplicateOptions(values, false, { [value]: true })
    }
  }

  if (updatedToggle) {
    setValues(updatedToggle)
  }
}

const Filter = ({
  values,
  setValues,
  label,
  colors,
  order,
  labels,
  showAll = false,
  multiSelect = false,
  ...props
}) => {
  const keys = useMemo(() => {
    if (order) {
      return order
    } else {
      return Object.keys(values)
    }
  }, [order, ...Object.keys(values).sort()])

  return (
    <Box {...props}>
      {label && <Box sx={sx.label}>{label}</Box>}
      <Box sx={{ mt: label ? [3] : 0 }}>
        {showAll && (
          <Tag
            onClick={() =>
              updateValues({
                values: values,
                multiSelect,
                setValues: setValues,
                value: 'all',
              })
            }
            value={isAll(values)}
            sx={{ mr: [2] }}
          >
            All
          </Tag>
        )}
        {keys.map((d, i) => (
          <Tag
            onClick={() =>
              updateValues({
                values: values,
                multiSelect,
                setValues: setValues,
                value: d,
              })
            }
            onDoubleClick={() =>
              updateValues({
                values: values,
                multiSelect: false,
                setValues: setValues,
                value: d,
              })
            }
            key={i}
            value={values[d]}
            sx={{
              width: 'max-content',
              color: colors ? colors[d] : 'primary',
              mr: [2],
              mb: [1],
            }}
          >
            {labels ? labels[d] : d}
          </Tag>
        ))}
      </Box>
    </Box>
  )
}

export default Filter
