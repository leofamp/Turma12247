import { useState } from "react"

export default function AddQuest(props){
    
    const [title, setTitle] = useState("")

    return(
        <div className="flex gap-4 w-full justify-center items-center">
            <input
            className="rounded-full pl-2 input-sm flex w-[70%]" 
            placeholder="Digite a missão"
            onChange={(evento)=> setTitle(evento.target.value)}
            type="text" />

            <button 
            onClick={()=>props.saveAddQuest(title)}
            className="runded-full px-3 text-lg">
            +
            </button>
        </div>
    )
}

