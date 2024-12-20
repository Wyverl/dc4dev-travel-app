import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import Typography from "./ui/Typography";
import TravelList from "./TravelList";
import Button from "./ui/Button";
import Input from "./ui/Input"

const SingleTravelPage = () => {

    const url =  "http://localhost:8000/travels"; 
    const { id } = useParams()
    const [travel, setTravel] = useState<TravelType>({})
    const [travelList, setTravelList] = useState<TravelType[]>([])
    const [limit, setLimit] = useState<number>(3)    
    const [travelNewData, setTravelNewData] = useState<TravelType>({})
   

    useEffect(() => {
        // Uniquement lorsque l'id change
        fetchTravel()
    }, [id])

    useEffect(() => {
        // Chargement des travels si l'id change (changement de page) ou  si on appuis sur le bouton show more
        fetchTravelList()
    }, [id, limit])

    const fetchTravelList = async () => {
        const response = await fetch(url)
        const data = await response.json()

        const filterTravelList = data.filter((travel: TravelType) => travel.id !== Number(id))
        const limitTravelList = filterTravelList.slice(0, limit)

        setTravelList(limitTravelList)
    }

    const fetchTravel = async () => {
       
        const response = await fetch(url+`/${id}`)
        const travel = await response.json()
        setTravel(travel)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()        

        const response = await fetch(url+`/${travel.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
         
          body: JSON.stringify(travelNewData),
        })
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to add the new information for the travel")
      }
      fetchTravel();
    }




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
    
        const newtravel = {
          ...travelNewData,
          [name]: value
        }
        
        setTravelNewData(newtravel)
      }


    return ( 
        <div  className="container mx-auto">
            <Typography
                level={1}
            >
                {travel.name}
            </Typography>

            <img src={travel.image} alt="" />

            <p>
                {travel.description}
            </p>
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 shadow-md p-10 mb-10">
                <Input type="text" placeholder="name" onChange={handleChange} name="name" />
                <Input type="text" placeholder="city" onChange={handleChange} name="city" />
                <Input type="text" placeholder="country" onChange={handleChange} name="country" />
                <Input type="text" placeholder="image" onChange={handleChange} name="image" />
                <Input type="text" placeholder="description" onChange={handleChange} name="description" />
                <Button 
                    text="Change travel info"
                    type="submit"
                />
            </form>
            
            <div className="mt-20 flex items-center flex-col gap-10">
                <TravelList 
                    travelList={travelList}
                    setTravelList={setTravelList}
                />
                <Button 
                    text="Load more"
                    onClick={() => setLimit(limit + 3)}
                />
            </div>
        </div>
     );
}

export default SingleTravelPage;