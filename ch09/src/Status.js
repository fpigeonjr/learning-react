import React from 'react'

// 1. success
// const loadStatus = () => 'success - ready'
// 2. error
// const loadStatus = () => {
//   throw new Error('something went wrong')
// }
//3. promise
// function loadStatus() {
//   if (error) throw error
//   if (response) return response
//   throw promise
// }

// closure example
const loadStatus = (function () {
  let error, response
  const promise = new Promise((resolves) => setTimeout(resolves, 3000)).then(
    () => (response = 'success').catch((e) => (error = e))
  )

  return function () {
    if (error) throw error
    if (response) return response
    throw pending
  }
})()

export default function Status() {
  const status = loadStatus()
  return <h1>status: {status}</h1>
}
