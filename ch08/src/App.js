import React, { useState, useEffect } from 'react'

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

function GitHubUser({ login }) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!login) return
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [login])

  if (loading) return <h1>loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null

  return (
    <div className="githubuser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p> {data.name} </p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  )
}

// render props

const tahoe_peaks = [
  {
    name: 'Feel Free',
    elevation: 10891,
  },
  {
    name: 'Mountain Peak',
    elevation: 10067,
  },
  {
    name: 'Pyramid Peak',
    elevation: 9983,
  },
  {
    name: 'Mt. Tallac',
    elevation: 9735,
  },
]

export default function App() {
  return (
    <>
      <GitHubUser login="fpigeonjr" />
      <h2>Tahoe Peaks</h2>
      <ul>
        {tahoe_peaks.map((peak, i) => (
          <li key={i}>
            {peak.name} - {peak.elevation.toLocaleString()}ft
          </li>
        ))}
      </ul>
    </>
  )
}
