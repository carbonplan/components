import React, { useEffect } from 'react'

const getScrollbarWidth = (document) => {
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  document.body.appendChild(outer)
  outer.style.overflow = 'scroll'
  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)
  const delta = outer.offsetWidth - inner.offsetWidth
  outer.parentNode.removeChild(outer)
  return delta
}

const Scrollbar = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const delta = getScrollbarWidth(document)
      if (delta > 0) {
        document.body.classList.add('custom-scrollbar')
        document.getElementsByTagName('html')[0].classList.add('custom-scrollbar')
      }
    }
  }, [])
  return null
}

export default Scrollbar