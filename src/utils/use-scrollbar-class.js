import { useEffect, useState } from 'react'

import getScrollbarWidth from './get-scrollbar-width'

const useScrollbarClass = () => {
  const [className, setClassName] = useState(null)

  useEffect(() => {
    if (document && getScrollbarWidth(document) > 0) {
      setClassName('custom-scrollbar')
    }
  }, [])

  return className
}

export default useScrollbarClass
