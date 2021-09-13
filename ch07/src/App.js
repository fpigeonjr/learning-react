import React from 'react'
import './App.css'

function CheckBox() {
  const [checked, setChecked] = React.useState(false)
  alert(`checked: ${checked.toString()}`)

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
  return (
    <div className="App">
      <h1>Hello Chapter 7</h1>
      <CheckBox />
    </div>
  )
}

export default App
