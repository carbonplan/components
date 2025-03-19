import React, { forwardRef } from 'react'
import { Link as ThemedLink, LinkProps as ThemedLinkProps } from 'theme-ui'
import { default as NextLink } from 'next/link'

export type LinkProps = ThemedLinkProps & {
  href: string
  internal?: boolean
}

const Link = (
  { href, children, internal = false, ...props }: LinkProps,
  ref: React.Ref<HTMLAnchorElement>
) => {
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
