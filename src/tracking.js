import React from 'react'

const Tracking = ({ domain = 'carbonplan.org' }) => {
  return (
    <script
      defer
      data-domain={domain}
      src='https://plausible.io/js/script.js'
    />
  )
}

export default Tracking
