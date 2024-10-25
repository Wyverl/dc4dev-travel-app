import { useEffect, useState } from "react"
import { TravelType } from "./types/travel.type"
import TravelFormAdd from "./components/TravelFormAdd"
import TravelList from "./components/TravelList"

function App() {
  const [counter, setCounter] = useState(0)
  const [travelList, setTravelList] = useState<TravelType[]>([])
  
  useEffect(() => {
    console.log("Mounted")

    fetchTravelList()
  }, [])

  const fetchTravelList = async () => {
    const response = await fetch("/travels.json")
    const data = await response.json()
    setTravelList(data)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-red-400 my-10">Travel App</h1>

      <TravelFormAdd 
        travelList={travelList}
        setTravelList={setTravelList}
      />

      <button 
        onClick={() => {
          console.log("Click button")
          setCounter(counter + 1)
          console.log(counter)
        }}
      >
        Number counter : {counter}
      </button>

      <TravelList
        travelList={travelList}
        setTravelList={setTravelList}
      
      />
    </div>
  )
}

export default App
