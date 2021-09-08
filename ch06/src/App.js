import React from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'

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

  return <ColorList colors={colors} onRemoveColor={removeColor} />
}

export default App
