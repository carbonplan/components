import React from 'react'
import { Link as ThemedLink } from 'theme-ui'
import { default as NextLink } from 'next/link'

const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const Link = ({
  href,
  children,
  internal = false,
  tracking = false,
  ...props
}) => {
  if (internal || (href && href.startsWith('/'))) {
    return (
      <NextLink href={href} passHref>
        <ThemedLink {...props}>{children}</ThemedLink>
      </NextLink>
    )
  } else if (tracking) {
    let action
    let category
    if (href && href.includes('pdf')) {
      action = 'PDF'
      category = 'download'
    } else {
      action = 'website'
      category = 'external'
    }
    const onClick = (e) => {
      event({
        action: action,
        category: category,
        label: href,
      })
    }
    return (
      <ThemedLink onClick={onClick} href={href} {...props}>
        {children}
      </ThemedLink>
    )
  } else {
    return (
      <ThemedLink href={href} {...props}>
        {children}
      </ThemedLink>
    )
  }
}

export default Link
