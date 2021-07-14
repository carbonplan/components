const MAPPING = {
  xs: [2, 2, 2, 3],
  sm: [3, 3, 3, 4],
  md: [4, 4, 4, 5],
  lg: [5, 5, 6, 7],
  xl: [6, 7, 8, 9],
}
const getFontSize = (size) => {
  if (!MAPPING.hasOwnProperty(size)) {
    throw new Error('Size must be xs, sm, md, lg, or xl')
  }

  return MAPPING[size]
}

export default getFontSize
