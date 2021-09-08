import React from 'react'

function AddColorForm(onNewColor = (f) => f) {
  const txtTitle = React.useRef()
  const hexColor = React.useRef()
  const submit = (e) => {
    e.preventDefault()
    const title = txtTitle.current.value
    const color = hexColor.current.value
    onNewColor(title, color)
    txtTitle.current.value = ''
    hexColor.current.value = ''
  }

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title" required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm
