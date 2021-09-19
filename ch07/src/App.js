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

const firstUser = {
  id: '1230123-123',
  firstName: 'Bill',
  lastName: 'Wilson',
  city: 'Missoula',
  state: 'Montana',
  email: 'bwilson@mtnwilson.com',
  admin: false,
}

function User() {
  const [user, setUser] = React.useReducer(
    (user, newDetails) => ({
      ...user,
      ...newDetails,
    }),
    firstUser
  )

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <p>Role: {user.admin ? 'admin' : 'user'}</p>
      <button
        onClick={() => {
          setUser({ admin: true })
        }}
      >
        Make Admin
      </button>
    </div>
  )
}

function App() {
  return <User />
}

export default App
