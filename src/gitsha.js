import React from 'react'
import { Box, Text, Link } from 'theme-ui'

const GitSha = ({ color }) => {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA

  if (sha == null) {
    // fallback
    return (
      <Box sx={{ display: 'inline-block' }}>
        <svg
          fill={color}
          opacity='0.8'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <circle r={5} cx={19} cy={19} />
        </svg>
        <Text
          sx={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            ml: [2],
            fontFamily: 'mono',
            letterSpacing: 'body',
            color: 'secondary',
            fontSize: [1],
            textTransform: 'uppercase',
          }}
        >
          {color}
        </Text>
      </Box>
    )
  } else {
    const shortSha = sha.substring(0, 7)
    const href =
      'https://github.com/' +
      process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER +
      '/' +
      process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG +
      '/tree/' +
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA

    return (
      <Box sx={{ display: 'inline-block' }}>
        {/* replace with git commit svg `-o-` ?*/}
        <svg
          fill={color}
          opacity='0.8'
          viewBox='0 0 24 24'
          width='24'
          height='24'
        >
          <circle r={5} cx={19} cy={19} />
        </svg>
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
  }
}

export default GitSha
