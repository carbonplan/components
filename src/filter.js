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

const duplicateFilterWithValues = (filter, value) => {
  return Object.keys(filter).reduce(
    (o, key) => Object.assign(o, { [key]: value }),
    {}
  )
}

const isAll = (filter) => {
  return (
    Object.keys(filter).filter((d) => filter[d]).length ==
    Object.keys(filter).length
  )
}

const toggleFilter = ({ filter, multiselect, setFilter, value }) => {
  const isAllAlreadyToggled = isAll(filter)
  const isTogglingAll = value === 'all'

  let updatedFilter
  if (!isTogglingAll && isAllAlreadyToggled) {
    // select only value
    updatedFilter = duplicateFilterWithValues(filter, false)
    updatedFilter[value] = true
  } else if (isTogglingAll && !isAllAlreadyToggled) {
    // select all
    updatedFilter = duplicateFilterWithValues(filter, true)
  } else if (isTogglingAll && isAllAlreadyToggled) {
    if (multiselect) {
      // deselect all
      updatedFilter = duplicateFilterWithValues(filter, false)
    }
  } else if (multiselect) {
    // additionally select value
    updatedFilter = { ...filter, [value]: true }
  } else {
    // select only value
    updatedFilter = duplicateFilterWithValues(filter, false)
    updatedFilter[value] = true
  }

  if (updatedFilter) {
    setFilter(updatedFilter)
  }
}

const Filter = ({
  filters,
  setFilters,
  filterLabels,
  filterList,
  filterColors,
  multiselect = false,
}) => {
  return (
    <Box>
      {filterList.map((f, i) => {
        return (
          <Box key={i}>
            <Box sx={{ ...sx.label, mt: i > 0 ? [5] : [0] }}>
              {'Filter by ' + filterLabels[f]}
            </Box>
            <Box sx={{ mt: [3] }}>
              <Tag
                onClick={() =>
                  toggleFilter({
                    filter: filters[f],
                    multiselect,
                    setFilter: setFilters[f],
                    value: 'all',
                  })
                }
                value={isAll(filters[f])}
                sx={{ mr: [2] }}
              >
                All
              </Tag>
              {Object.keys(filters[f]).map((d, i) => (
                <Tag
                  onClick={() =>
                    toggleFilter({
                      filter: filters[f],
                      multiselect,
                      setFilter: setFilters[f],
                      value: d,
                    })
                  }
                  key={i}
                  value={filters[f][d]}
                  sx={{
                    width: 'max-content',
                    color:
                      filterColors && filterColors[f]
                        ? filterColors[f][d]
                        : 'primary',
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
      })}
    </Box>
  )
}

export default Filter
