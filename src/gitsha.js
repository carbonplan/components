import React from 'react'
import { Box, Text, Link, useThemeUI } from 'theme-ui'

const GitSha = () => {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  const owner = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
  const slug = process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG

  const { theme } = useThemeUI()

  const color = theme.rawColors.secondary

  if (sha && owner && slug) {
    const shortSha = sha.substring(0, 7)
    const href = 'https://github.com/' + owner + '/' + slug + '/tree/' + sha

    return (
      <Box sx={{ display: 'inline-block', width: '87px' }}>
        <Separator color={color} />
        <Link
          href={href}
          sx={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            ml: [2],
            fontFamily: 'mono',
            letterSpacing: 'body',
            color: color,
            fontSize: [1],
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          {shortSha}
        </Link>
      </Box>
    )
  } else {
    // fallback
    return (
      <Box sx={{ display: 'inline-block', width: '87px' }}>
        <Separator color={color} />
        <Text
          sx={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            ml: [2],
            fontFamily: 'mono',
            letterSpacing: 'body',
            color: color,
            fontSize: [1],
            textTransform: 'uppercase',
          }}
        >
          {color}
        </Text>
      </Box>
    )
  }
}

const Separator = ({ color }) => {
  return (
    <svg fill={color} opacity='0.8' viewBox='0 0 24 24' width='24' height='24'>
      <circle r={5} cx={19} cy={19} />
    </svg>
  )
}

export default GitSha
