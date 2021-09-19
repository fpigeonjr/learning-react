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
  return (
    <div className="App">
      <h1>Hello Chapter 7</h1>
      <CheckBox />
    </div>
  )
}

export default App
