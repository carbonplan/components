import React from 'react'
import { Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

const InternalLink = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link {...props}>{children}</Link>
    </NextLink>
  )
}

export default InternalLink
