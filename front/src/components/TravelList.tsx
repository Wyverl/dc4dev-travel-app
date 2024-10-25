import { useEffect, useState } from "react"
import { TravelType } from "../types/travel.type"
import TravelCardItem from "./TravelCardItem"

type TravelListProps = {
    travelList: TravelType[],
    setTravelList: (travelList:TravelType[])=>void
}


const travelList = ({travelList,setTravelList}: TravelListProps) => {


    return (
        <div className="grid grid-cols-3 gap-4">
        {travelList.map((travel) => 
          <TravelCardItem 
            travel={travel} 
            key={travel.id} 
            travelList={travelList}
            setTravelList={setTravelList}
          />
        )}
      </div>
    );
}

export default travelList