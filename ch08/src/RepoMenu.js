import React from 'react'
import RepositoryReadme from './RepositoryReadme'
import { useIterator } from './useIterator'

export function RepoMenu({ repositories, login }) {
  const [{ name }, prev, next] = useIterator(repositories)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={prev}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  )
}
