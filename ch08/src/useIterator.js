import React from 'react'

export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = React.useState(initialIndex)

  const prev = React.useCallback(() => {
    if (i === 0) return setIndex(items.length - 1)
    setIndex(i - 1)
  }, [i])

  const next = React.useCallback(() => {
    if (i === items.length - 1) return setIndex(0)
    setIndex(i + 1)
  }, [i])

  const item = React.useMemo(() => items[i], [i])

  return [item || items[0], prev, next]
}
