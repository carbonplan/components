import React from 'react'
import { Link } from 'theme-ui'

const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const TaggedLink = ({ action, category, href, children, ...props }) => {
  const onClick = (e) => {
    event({
      action: action,
      category: category,
      label: href,
    })
  }

  return (
    <Link onClick={onClick} href={href} {...props}>
      {children}
    </Link>
  )
}

export default TaggedLink
