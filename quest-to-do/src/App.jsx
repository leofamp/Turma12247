import AddQuest from "./components/AddQuest"
import { useState } from "react"
import QuestList from "./components/QuestList"

export default function App(){

  const [quests, setQuests] = useState([])

  function saveAddQuest(title){
    
    const newQuest = {
      id: Date.now(),
      title: title,
      status: "aberto",
      created_at: new Date().toISOString()
    }

    setQuests((currentQuests)=> {
      const updatedQuests = [
        ...currentQuests, newQuest
      ]

    localStorage.setItem(
      "quests",
      JSON.stringify(updatedQuests)
    )
    return updatedQuests
    getQuests()
    })

    
  }
  function getQuests(){
      const savedQuests = localStorage.getItem("quests")
      if (savedQuests) {
        setQuests(JSON.parse(savedQuests))
      }
    }
    
  return(
    <div className="flex h-screen justify-center items-center">
      <div className="w-[80%] lg:w-[50%] h-[70%] shadow-md rounded-sm p-10">
        <h1 className="text-5x1 font-bold text-center">
          Quest to do
        </h1>

        <AddQuest saveAddQuest={saveAddQuest}/>
        <QuestList quests={quests}/>

      </div>
    </div>
  )
}
