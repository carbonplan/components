import React, { forwardRef } from 'react'
import { Link as ThemedLink } from 'theme-ui'
import { default as NextLink } from 'next/link'

const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'function') {
    console.warn(`Missing window.gtag, skipping analytics action: '${action}'.`)
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const Link = (
  { href, children, internal = false, tracking = false, ...props },
  ref
) => {
  if (internal || (href && href.startsWith('/'))) {
    return (
      <NextLink href={href} passHref>
        <ThemedLink ref={ref} {...props}>
          {children}
        </ThemedLink>
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
    const track = (e) => {
      event({
        action: action,
        category: category,
        label: href,
      })
    }
    return (
      <ThemedLink
        ref={ref}
        onClick={track}
        onContextMenu={track}
        href={href}
        {...props}
      >
        {children}
      </ThemedLink>
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
