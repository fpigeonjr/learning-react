import React from 'react'

function GithubUser({ login }) {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    if (!login) return

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error)
  }, [login])

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>

  return null
}

function App() {
  return <GithubUser login="fpigeonjr" />
}

export default App
