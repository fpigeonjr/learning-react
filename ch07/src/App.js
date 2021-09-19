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

function App() {
  const [val, setVal] = React.useState('')
  const [phrase, setPhrase] = React.useState('example phrase')

  const createPhrase = () => {
    setPhrase(val)
    setVal('')
  }

  React.useEffect(() => {
    console.log(`typing "${val}"`)
  }, [val])

  React.useEffect(() => {
    console.log(`saved phrase: "${phrase}"`)
  }, [phrase])

  return (
    <div className="App">
      <h1>Hello Chapter 7</h1>
      <label htmlFor="phrase">Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </div>
  )
}

export default App
