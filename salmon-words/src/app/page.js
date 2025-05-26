"use client"
import Image from "next/image";
import Keyboard from "./components/Keyboard";
import { useState, useEffect } from "react"

export default function Home() {

  const [currentLetter, setCurrentLetter] = useState("")
  
  const handleKeyPress = (letter) => {
    setCurrentLetter(letter)
  }

  return (
    <div>
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-4xl">Salmon-Words</h1>
        <p className="text-xl">A wordle clone</p>
      </div>
      <div className="text-2xl text-slate-500 text-center mt-20">
        {currentLetter}
      </div>
      <div className="flex justify-center mt-20 w-3/4 mx-auto">
        <Keyboard onClick={handleKeyPress}/>
      </div>
    </div>
  );
}
