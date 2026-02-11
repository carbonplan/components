import React, { useEffect } from 'react'
import getScrollbarWidth from './utils/get-scrollbar-width'

const Scrollbar = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const delta = getScrollbarWidth(document)
      if (delta > 0) {
        document.body.classList.add('custom-scrollbar')
        document
          .getElementsByTagName('html')[0]
          .classList.add('custom-scrollbar')
      }
    }
  }, [])
  return null
}

export default Scrollbar
