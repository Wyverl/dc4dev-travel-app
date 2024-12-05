import { useEffect, useState } from "react";
import { TravelType } from "./types/travel.type";
import TravelFormAdd from "./components/TravelFormAdd";
import Typography from "./components/ui/Typography";
import TravelList from "./components/TravelList";

function App() {
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  useEffect(() => {
    console.log("Mounted");

    fetchTravelList();
  }, []);

  const fetchTravelList = async () => {
    const response = await fetch("http://localhost:8000/travels");
    const data = await response.json();
    setTravelList(data);
  };

  return (
    <div className="container mx-auto">
      <Typography level={1}>Travel App</Typography>

      <TravelFormAdd travelList={travelList} setTravelList={setTravelList} />

      <TravelList travelList={travelList} setTravelList={setTravelList} />
    </div>
  );
}

export default App;
