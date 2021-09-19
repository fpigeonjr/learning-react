import React from 'react'
import './App.css'

function CheckBox() {
  const [checked, setChecked] = React.useState(false)

  React.useEffect(() => {
    alert(`checked: ${checked.toString()}`)
    console.log(checked ? 'yes checked' : 'No not checked')
    localStorage.setItem('checkbox-value', checked)
  })

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  )
}

const useAnyKeyToRender = () => {
  const [, forceRender] = React.useState()
  React.useEffect(() => {
    window.addEventListener('keydown', forceRender)
    return () => window.removeEventListener('keydown', forceRender)
  }, [])
}

// const words = ['sick', 'powder', 'day']

function WordCount({ children = '' }) {
  useAnyKeyToRender()

  const words = React.useMemo(() => children.split(' '), [children])

  React.useEffect(() => {
    console.log('fresh render')
  }, [words])

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  )
}

function App() {
  return <WordCount>You are not going to believe this but...</WordCount>
}

export default App
