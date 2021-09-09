import React from 'react'

function AddColorForm({onNewColor = (f) => f}) {
  // const txtTitle = React.useRef()
  // const hexColor = React.useRef()
  const [title, setTitle] = React.useState('')
  const [color, setColor] = React.useState('#000000')

  const submit = (e) => {
    e.preventDefault()
    onNewColor(title, color)
    setTitle('')
    setColor('')
  }

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title"
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm
