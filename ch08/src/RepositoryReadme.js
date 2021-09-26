import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function RepositoryReadme({ repo, login }) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState()
  const [markdown, setMarkdown] = React.useState('')

  const loadReadme = React.useCallback(async (login, repo) => {
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`
    const { download_url } = await fetch(uri).then((res) => res.json())
    const markdown = await fetch(download_url).then((res) => res.text())
    setMarkdown(markdown)
    setLoading(false)

    console.log(`Markdown for ${repo}\n\n${markdown}`)
  }, [])

  React.useEffect(() => {
    if (!repo || !login) return
    loadReadme(login, repo).catch(setError)
  }, [repo])

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (loading) return <p>loading...</p>

  return <ReactMarkdown children={markdown} />
}
