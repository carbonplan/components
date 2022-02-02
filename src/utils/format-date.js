const defaultOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}

const formatDateElement = (date, element, option) => {
  if (!option) {
    return null
  }

  const format = typeof option === 'string' ? option : defaultOptions[element]

  const result = date.toLocaleString('default', {
    [element]: format,
  })

  if (format === 'numeric' && ['day', 'month'].includes(element)) {
    return result.padStart(2, '0')
  } else {
    return result
  }
}
const formatDate = (date, options = defaultOptions) => {
  const d = new Date(date.replace(/-/g, '/'))

  const month = formatDateElement(d, 'month', options.month)
  const day = formatDateElement(d, 'day', options.day)
  const year = formatDateElement(d, 'year', options.year)

  return [month, day, year].filter(Boolean).join(options.separator ?? ' ')
}

export default formatDate
