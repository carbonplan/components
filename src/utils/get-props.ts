const getProps =
  (test: (key: string) => boolean) =>
  (props: Record<string, any>): Record<string, any> => {
    const next: Record<string, any> = {}
    for (const key in props) {
      if (test(key || '')) next[key] = props[key]
    }
    return next
  }

export default getProps
