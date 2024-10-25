import { Link } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import Button from "./ui/Button";

type TravelCardItemProps = {
    travel: TravelType
    travelList: TravelType[]
    setTravelList: (travelList: TravelType[]) => void
}

const TravelCardItem = ({ travel, travelList, setTravelList } : TravelCardItemProps) => {

  const handleDelete = () => {
      const index = travelList.indexOf(travel)
      travelList.splice(index, 1)
      setTravelList([...travelList])
  }

    return ( 
        <div className="shadow-md rounded-md">
          <Link to={`/travels/${travel.id}`}>
            <img src={travel.image} alt="" className="w-full" />
          </Link>
          
          
          <div className="p-4">
            <h3 className="text-xl text-red-400">
                {travel.name}
            </h3>
            <p>{travel?.description?.substring(10)}...</p>
          </div>

          <Link to={`/travels/${travel.id}`}>
            <Button
              text="Show travel"
              variant="primary"
            />
          </Link>


          <Button 
            text="Delete"
            variant="danger"
            onClick={handleDelete}
          />
        </div>
     );
}
 
export default TravelCardItem;