import React from 'react'
import StarRating from './StarRating'
import colorData from './color-data.json'
import ColorList from './ColorList'

function App() {
  const [colors, SetColors] = React.useState(colorData)
  return (
    // <StarRating
    //   style={{ backgroundColor: 'lightblue' }}
    //   onDoubleClick={(e) => alert('double click')}
    // />
    <ColorList colors={colors} />
  )
}

export default App
