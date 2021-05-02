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

export default getScrollbarWidth
