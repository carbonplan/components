import { ThemeUIStyleObject } from 'theme-ui'

const getSxColor = (sx?: ThemeUIStyleObject, fallback = 'primary'): string =>
  sx && typeof sx === 'object' && 'color' in sx && typeof sx.color === 'string'
    ? sx.color
    : fallback

export default getSxColor
