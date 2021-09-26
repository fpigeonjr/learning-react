import React from 'react'
import { useIterator } from './useIterator'

export function RepoMenu({ repositories, onSelect = (f) => f }) {
  const [{ name }, prev, next] = useIterator(repositories)

  React.useEffect(() => {
    if (!name) return
    onSelect(name)
  }, [name])

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={prev}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  )
}
