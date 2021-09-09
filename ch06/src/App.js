import React from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'

function App() {
  const [colors, setColors] = React.useState(colorData)

  // const removeColor = (id) => {
  //   const newColors = colors.filter((color) => color.id !== id)
  //   SetColors(newColors)
  // }

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id)
    setColors(newColors)
  }

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    )
    setColors(newColors)
  }

  // const addColor = (hash = '2138721634', title, color) =>
  //   setColors({ hash, title, color })

  return (
    <>
      <AddColorForm />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  )
}

export default App
