import React from 'react'

export function useFetch(uri) {
  const [data, setData] = React.useState()
  const [error, setError] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (!uri) return
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [uri])

  return {
    loading,
    data,
    error,
  }
}
