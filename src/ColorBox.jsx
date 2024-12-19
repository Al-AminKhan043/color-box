import { useState } from "react"
import "./ColorBox.css"
export default function ColorBox({colorList}) {

        const[currentIndex,setCurrentIndex] = useState(0)

const changeColor = (() => { 
    setCurrentIndex((currentIndex+1)%colorList.length)
})

   return (
    <div className="pointer">
       
   <div style={{ backgroundColor: colorList[currentIndex].color || "teal", width:"100px", height:"100px"}}  onClick={changeColor}>
  
   </div>

    </div>
   ) 
}
