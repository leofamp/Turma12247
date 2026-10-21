import { useState } from "react"

export default function Calculadora(){

    const [input, setInput] = useState("")
    const handleClick = (value) => {setInput(input + value)}

    return(
        <div className="bg-[#CCD5AE] text-white min-h-[180px] flex flex-col justify-end items-end p-8 gap-4">
            <span className="text-xl">{input}</span>

            <div className="flex justify-between w-full items-center text-5xl">
                <span>=</span>
            </div>
            <div className="flex gap-2">
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("1")}>1</button>
            </div>
        </div>
    )
}