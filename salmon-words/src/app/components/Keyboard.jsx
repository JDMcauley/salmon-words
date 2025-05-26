"use client"
import {useState} from "react"

const Keyboard = ({onClick}) => {

    const alphabetRowOne = "qwertyuiop".split("")
    const alphabetRowTwo = "asdfghjkl".split("")
    const alphabetRowThree = "zxcvbnm".split("")
    
    return (
        <div className="flex-col p-2 text-2xl space-y-2 justify-center text-white">
            <div className="flex space-x-5 h-10">
                {alphabetRowOne.map((value, index) => {
                    return (<button onClick={() => onClick(value)} className="flex bg-slate-600 rounded-md justify-center items-center aspect-square" key={index}>
                        {value}
                    </button>)
                })}
            </div>
            <div className="flex space-x-5 h-10 justify-center">
                {alphabetRowTwo.map((value, index) => {
                    return (<button onClick={() => onClick(value)} className="flex bg-slate-600 rounded-md justify-center items-center aspect-square" key={index}>
                        {value}
                    </button>)
                })}
            </div>
            <div className="flex space-x-5 h-10 justify-center">
                {alphabetRowThree.map((value, index) => {
                    return (<button onClick={() => onClick(value)} className="flex bg-slate-600 rounded-md justify-center items-center aspect-square" key={index}>
                        {value}
                    </button>)
                })}
            </div>
            <div className="flex justify-evenly space-x-5">
                <button className="bg-slate-600 rounded-md p-2 w-1/4">⌫</button>
                <button className="bg-slate-600 rounded-md p-2 w-1/4">Enter</button>
            </div>
        </div>
    )

}

export default Keyboard