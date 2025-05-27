"use client"
import { useState } from "react"

const WordRow = ({letter, box}) => {

    const letterBoxes = ["box1", "box2", "box3", "box4", "box5"]

    return (
        <div className="flex justify-center space-x-4">
            {letterBoxes.map((value) => {
                return (
                <div id={value} key={value} className="size-15 aspect-square text-center content-center text-4xl bg-slate-600 rounded-sm text-white">
                    {value === box ? letter : ""}
                </div>
            )})}
        </div>
    )
}

export default WordRow