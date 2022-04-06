import React from 'react'
import { useState, useEffect } from 'react'
import Square from './Square'
import './Board.css'

const rows = 8
const cols = 8

function Board() {
  const [grid, setGrid] = useState([])
  useEffect(() => {
    initializeGrid()
  }, [])

  const initializeGrid = () => {
    const grid = new Array(rows)
    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols)
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Box(i, j)
      }
    }
    setGrid(grid)
  }
  function Box(i, j) {
    this.x = i
    this.y = j
    this.BW = 0
    if (i > 3) this.BW = 1
    this.pieceId = ''
    if (i === 1 || i === 6) {
      this.pieceId = 'Pawn'
    }
    if (i === 0 || i === 7) {
      if (j === 0 || j === 7) {
        this.pieceId = 'Rook'
      }
      if (j === 1 || j === 6) {
        this.pieceId = 'Knight'
      }
      if (j === 2 || j === 5) {
        this.pieceId = 'Bishop'
      }
      if (j === 3) {
        this.pieceId = 'Queen'
      }
      if (j === 4) {
        this.pieceId = 'King'
      }
    }
  }

  const [darkC, setDarkC] = useState('green')
  const [lightC, setLightC] = useState('yellow')
  const [side1col, setSide1Col] = useState('black')
  const [side2col, setSide2Col] = useState('white')

  return (
    <div className='any'>
      <div className='main'>
        {grid.map((row, rowIndex) => {
          return (
            <div className='board' key={rowIndex}>
              {row.map((col, colIndex) => {
                return (
                  <Square
                    key={colIndex}
                    pieceId={col.pieceId}
                    BW={col.BW}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    lightCol={darkC}
                    darkCol={lightC}
                    Side1Col={side1col}
                    Side2Col={side2col}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='Inputs'>
        <div className='input'>
          <h1>Color Inputs</h1>
          <input
            type='text'
            placeholder='Dark Square Color'
            onChange={(e) => {
              setDarkC(e.target.value)
            }}
          />
          <input
            id='2'
            type='text'
            placeholder='Light Square Color'
            onChange={(e) => {
              setLightC(e.target.value)
            }}
          />
          <input
            id='3'
            type='text'
            placeholder='Side 1 Color'
            onChange={(e) => {
              setSide1Col(e.target.value)
            }}
          />
          <input
            id='4'
            type='text'
            placeholder='Side 2 Color'
            onChange={(e) => {
              setSide2Col(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Board
