import React from 'react'

// 1. success
// const loadStatus = () => 'success - ready'
// 2. error
// const loadStatus = () => {
//   throw new Error('something went wrong')
// }
//3. promise
const loadStatus = () => {
  console.log('load status')
  throw new Promise((resolves) => setTimeout(resolves, 3000))
}

export default function Status() {
  const status = loadStatus()
  return <h1>status: {status}</h1>
}
