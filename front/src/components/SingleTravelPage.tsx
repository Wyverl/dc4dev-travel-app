import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import { useState } from "react";
import Typography from "./ui/Typography";
import TravelList from "./TravelList";
import Button from "./ui/Button";

const SingleTravelPage = () => {
    const { id } = useParams()
    const [travel,setTravel] = useState<TravelType>({})
    const [travelList,setTravelList] = useState<TravelType[]>({})
    const [limit,setLimit] = useState<number>(3)

    useEffect(() => {
        fetchTravel()
    }, [id])

    useEffect(() => {
        fetchTravelList()
    }, [id,limit])

    const fetchTravelList =  async() => {
        // fetch travel.json
        const response = await fetch("/travels.json")
        const data = await response.json()
        const filterTravelList = data.filter((travel: TravelType)=> travel.id !== Number(id))
        const limitTravelList = filterTravelList.slice(0,limit)
        setTravelList(limitTravelList)
    }

    const fetchTravel =  async() => {
        // fetch travel.json
        const response = await fetch("/travels.json")
        const travelList = await response.json()
        // find travel with id
        const findTravel =travelList.find((travel: TravelType) => travel.id === Number(id)) 
        // set travel into state
        console.log("findTravel : ", findTravel)
        setTravel(findTravel)
    }

    return ( 
        <div className="container mx-auto">
            <Typography level={1}>

                {travel.name}
            </Typography>
            <img src= {travel.image}></img>
            <p> {travel.description}</p>
           <div className="mt-20 flex items-center flex-col gap-10">
                <TravelList
                        travelList={travelList}
                        setTravelList= {setTravelList}
                />
                <Button
                    text="Load more"
                    onClick={() => setLimit(limit+3)}
                />
           </div>
        </div>
     );
}
 
export default SingleTravelPage;