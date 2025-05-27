"use client"
import Image from "next/image";
import Keyboard from "./components/Keyboard";
import WordRow from "./components/WordRow";
import { useState, useEffect } from "react"

export default function Home() {

  const [currentLetter, setCurrentLetter] = useState("")
  const [activeRow, setActiveRow] = useState("row1")
  const [activeBox, setActiveBox] = useState("box1")
  
  const handleKeyPress = (letter) => {
    setCurrentLetter(letter)
  }

  return (
    <div>
      <div className="text-center my-10 space-y-5">
        <h1 className="text-4xl">Salmon-Words</h1>
        <p className="text-xl">A wordle clone</p>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <WordRow 
        id="row1" 
        letter={currentLetter}
        box={activeBox}/>
        <WordRow id="row2"/>
        <WordRow id="row3"/>
        <WordRow id="row4"/>
        <WordRow id="row5"/>
        <WordRow id="row6"/>
      </div>
      <div className="flex justify-center mt-10 w-3/4 mx-auto">
        <Keyboard onClick={handleKeyPress}/>
      </div>
    </div>
  );
}
