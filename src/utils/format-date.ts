interface FormatDateOptions {
  month?: string | boolean
  day?: string | boolean
  year?: string | boolean
  separator?: string
}

const defaultOptions: FormatDateOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}

const formatDateElement = (
  date: Date,
  element: 'month' | 'day' | 'year',
  option: string | boolean | undefined
) => {
  if (!option) {
    return null
  }

  const format =
    typeof option === 'string' ? option : (defaultOptions[element] as string)

  const result = date.toLocaleString('default', {
    [element]: format,
  })

  if (format === 'numeric' && ['day', 'month'].includes(element)) {
    return result.padStart(2, '0')
  } else {
    return result
  }
}
const formatDate = (
  date: string,
  options: FormatDateOptions = defaultOptions
) => {
  const d = new Date(date.replace(/-/g, '/'))

  const month = formatDateElement(d, 'month', options.month)
  const day = formatDateElement(d, 'day', options.day)
  const year = formatDateElement(d, 'year', options.year)

  return [month, day, year].filter(Boolean).join(options.separator ?? ' ')
}

export default formatDate
