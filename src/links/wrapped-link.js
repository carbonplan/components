import React from 'react'
import { Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import TaggedLink from './tagged-link'

const WrappedLink = ({ href, children, tracking = true, ...props }) => {
  if (href.startsWith('/')) {
    return (
      <NextLink href={href} passHref>
        <Link {...props}>{children}</Link>
      </NextLink>
    )
  } else if (tracking) {
    let action = 'website'
    let category = 'external'
    if (href.includes('pdf')) {
      action = 'PDF'
      category = 'download'
    }
    return (
      <TaggedLink action={action} category={category} href={href} {...props}>
        {children}
      </TaggedLink>
    )
  } else {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }
}

export default WrappedLink
