import React from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue)
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ]
}

export default useInput
