import React from 'react'
import './Square.css'
import { useState, useEffect } from 'react'

function Square({
  pieceId,
  BW,
  rowIndex,
  colIndex,
  lightCol,
  darkCol,
  Side1Col,
  Side2Col,
}) {
  const todo =
    (rowIndex + colIndex) % 2 ? darkCol || 'green' : lightCol || 'yellow'
  const [sideLength, setSideLength] = useState(
    Math.min(window.innerHeight, window.innerWidth) / 8
  )
  const change = () => {
    setSideLength(Math.min(window.innerHeight, window.innerWidth) / 8)
  }

  useEffect(() => {
    window.addEventListener('resize', change)
    return () => {
      window.removeEventListener('resize', change)
    }
  })
  const Color = BW === 1 ? Side2Col || 'black' : Side1Col || 'white'
  return (
    <div
      className='temp'
      id={`square-${rowIndex}-${colIndex}`}
      style={{
        height: sideLength,
        width: sideLength,
        backgroundColor: `${todo}`,
      }}
    >
      <div style={{ color: `${Color}` }}>{pieceId}</div>
    </div>
  )
}

export default Square
