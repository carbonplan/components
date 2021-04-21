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

const Filter = ({
  filters,
  setFilters,
  filterLabels,
  filterList,
  filterColors,
}) => {
  const isAll = (filter) => {
    return (
      Object.keys(filter).filter((d) => filter[d]).length ==
      Object.keys(filter).length
    )
  }

  const toggleFilter = (filter, setFilter, value) => {
    if (value === 'all') {
      if (!isAll(filter)) {
        setFilter(
          Object.keys(filter).reduce(
            (o, key) => Object.assign(o, { [key]: true }),
            {}
          )
        )
      }
    } else {
      const init = Object.keys(filter).reduce(
        (o, key) => Object.assign(o, { [key]: false }),
        {}
      )
      if (!(value === 'all')) {
        init[value] = true
        setFilter(init)
      }
    }
  }

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
                onClick={() => toggleFilter(filters[f], setFilters[f], 'all')}
                value={isAll(filters[f])}
                sx={{ mr: [2] }}
              >
                All
              </Tag>
              {Object.keys(filters[f]).map((d, i) => (
                <Tag
                  onClick={() => toggleFilter(filters[f], setFilters[f], d)}
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
