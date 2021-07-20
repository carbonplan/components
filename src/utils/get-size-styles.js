const getSizeStyles = (size) => {
  if (!['xs', 'sm', 'md', 'lg', 'xl'].includes(size)) {
    throw new Error('Size must be xs, sm, md, lg, or xl')
  }

  let fontSize, fontFamily, letterSpacing, lineHeight

  if (size === 'xs') {
    fontSize = [2, 2, 2, 3]
    fontFamily = 'body'
    letterSpacing = 'body'
    lineHeight = [1.2]
  }

  if (size === 'sm') {
    fontSize = [3, 3, 3, 4]
    fontFamily = 'body'
    letterSpacing = 'body'
    lineHeight = [1.2]
  }

  if (size === 'md') {
    fontSize = [4, 4, 4, 5]
    fontFamily = 'body'
    letterSpacing = 'body'
    lineHeight = [1.2]
  }

  if (size === 'lg') {
    fontSize = [5, 5, 6, 7]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    lineHeight = [1.2, 1.2, 1.25, 1.25]
  }

  if (size === 'xl') {
    fontSize = [6, 7, 8, 9]
    fontFamily = 'heading'
    letterSpacing = 'heading'
    lineHeight = [1.25]
  }

  return { fontSize, fontFamily, letterSpacing, lineHeight }
}

export default getSizeStyles
