import React from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import { v4 } from 'uuid'

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

  const addColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]
    setColors(newColors)
  }

  return (
    <>
      <AddColorForm onNewColor={addColor} />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  )
}

export default App
