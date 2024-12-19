import { useEffect, useState } from "react";
import { TravelType } from "./types/travel.type";
import TravelFormAdd from "./components/TravelFormAdd";
import Typography from "./components/ui/Typography";
import TravelList from "./components/TravelList";

function App() {
  const [travelList, setTravelList] = useState<TravelType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTravelList();
  }, []);

  const fetchTravelList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/travels");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTravelList(data);
    } catch (error) {
      console.error("Error fetching travel list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <Typography level={1}>Travel App</Typography>
      <TravelFormAdd fetchTravelList={fetchTravelList} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TravelList travelList={travelList} setTravelList={setTravelList} />
      )}
    </div>
  );
}

export default App;
