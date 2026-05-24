import React from 'react'

function Triangle() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <polygon
        points="50,15 90,85 10,85"
        fill="royalblue"
        style={{ cursor: 'pointer' }}
      />
    </svg>
  )
}

export default Triangle
