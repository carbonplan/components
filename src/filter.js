import React from 'react'
import { Box } from 'theme-ui'
import TagOptions from './tag-options'

const Filter = ({
  filters,
  setFilters,
  filterLabels,
  filterList,
  filterColors,
  multiSelect = false,
  showAll = true,
}) => {
  return (
    <Box>
      {filterList.map((f, i) => (
        <TagOptions
          optionValues={filters[f]}
          setValues={setFilters[f]}
          label={`Filter by ${filterLabels[f]}`}
          optionColors={filterColors[f]}
          multiSelect={multiSelect}
          showAll={showAll}
          sx={{ mt: i > 0 ? [5] : [0] }}
        />
      ))}
    </Box>
  )
}

export default Filter
