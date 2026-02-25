import React, { ReactNode, useMemo } from 'react'
import { Box, BoxProps } from 'theme-ui'
import Tag from './tag'

export interface FilterProps<T> extends BoxProps {
  values: { [Property in keyof T]: boolean }
  setValues: (updated: { [Property in keyof T]: boolean }) => void
  order?: (keyof T)[]
  colors?: { [Property in keyof T]: string }
  labels?: { [Property in keyof T]: ReactNode }
  label?: ReactNode
  showAll?: boolean
  multiSelect?: boolean
}
const sx = {
  label: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1, 1, 1, 2],
    color: 'secondary',
    userSelect: 'none' as const,
    textTransform: 'uppercase' as const,
  },
}

const duplicateOptions = <T,>(
  options: { [Property in keyof T]: boolean },
  defaultValue: boolean,
  overrides: Partial<{ [Property in keyof T]: boolean }> = {}
): { [Property in keyof T]: boolean } => {
  let result = { ...options }
  Object.keys(options).forEach((key) => {
    result[key as keyof T] = !!overrides[key as keyof T] || defaultValue
  })

  return result
}

const isAll = <T,>(option: FilterProps<T>['values']) => {
  return (
    Object.keys(option).filter((d) => option[d as keyof T]).length ===
    Object.keys(option).length
  )
}

const updateValues = <T,>({
  values,
  multiSelect,
  setValues,
  value,
}: {
  values: FilterProps<T>['values']
  multiSelect: FilterProps<T>['multiSelect']
  setValues: FilterProps<T>['setValues']
  value: keyof T
}) => {
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
      updatedToggle = duplicateOptions(values, false, {
        [value]: true,
      } as Partial<{ [Property in keyof T]: boolean }>)
    }
  }

  if (updatedToggle) {
    setValues(updatedToggle)
  }
}

const Filter = <T,>({
  values,
  setValues,
  label,
  colors,
  order,
  labels,
  showAll = false,
  multiSelect = false,
  ...props
}: FilterProps<T>) => {
  const keys = useMemo(() => {
    if (order) {
      return order
    } else {
      return Object.keys(values) as (keyof T)[]
    }
  }, [order, ...Object.keys(values).sort()])

  return (
    <Box {...props}>
      {label && <Box sx={sx.label}>{label}</Box>}
      <Box sx={{ mt: label ? [3] : 0 }}>
        {showAll && (
          <Tag
            label='all'
            onClick={() =>
              updateValues({
                values: values,
                multiSelect,
                setValues: setValues,
                value: 'all' as keyof T,
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
            label={String(d)}
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
            {labels ? labels[d] : String(d)}
          </Tag>
        ))}
      </Box>
    </Box>
  )
}

export default Filter
