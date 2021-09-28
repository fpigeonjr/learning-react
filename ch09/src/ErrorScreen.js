import React from 'react'

function ErrorScreen({ error }) {
  // handle or track error before rendering
  return (
    <div
      className="error"
      style={{
        backgroundColor: '#efacac',
        border: 'double, 4px, darkred',
        color: 'darkred',
        padding: '1em',
      }}
    >
      <h3>We are sorry....something went wrong</h3>
      <p>We cannot process your request at this moment</p>
      <p>ERROR: {error.message}</p>
    </div>
  )
}

export default ErrorScreen
