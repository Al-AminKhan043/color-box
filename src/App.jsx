import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBox from './ColorBox'
import ColorBoxList from './ColorBoxList'

const colorList =[
  { color: "#FF0000" }, // Red
  { color: "#00FF00" }, // Green
  { color: "#0000FF" }, // Blue
  { color: "#FFFF00" }, // Yellow
  { color: "#00FFFF" }, // Cyan
  { color: "#FF00FF" }, // Magenta
  { color: "#FFA500" }, // Orange
  { color: "#800080" }, // Purple
  { color: "#FFC0CB" }, // Pink
  { color: "#A52A2A" }, // Brown
  { color: "#808080" }, // Gray
  { color: "#000000" }  // Black
]

function App() {
 

  return (
    <div>
    {/* <ColorBox colorList={colorList} /> */}
    <ColorBoxList colorList={colorList}/>
    </div>
  )
}

export default App
