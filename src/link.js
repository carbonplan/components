import React, { forwardRef } from 'react'
import { Link as ThemedLink } from 'theme-ui'
import { default as NextLink } from 'next/link'

const Link = ({ href, children, internal = false, ...props }, ref) => {
  if (internal || (href && href.startsWith('/'))) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <ThemedLink ref={ref} {...props}>
          {children}
        </ThemedLink>
      </NextLink>
    )
  } else {
    return (
      <ThemedLink ref={ref} href={href} {...props}>
        {children}
      </ThemedLink>
    )
  }
}

export default forwardRef(Link)
