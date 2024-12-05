import express, { request } from "express"
import cors from "cors"

let travelList = [
    {
      id: 1,
      name: "Paris",
      city: "Paris",
      country: "France",
      image:
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      description:
        "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere.",
    },
    {
      id: 2,
      name: "New York City",
      city: "New York",
      country: "USA",
      image:
        "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
      description:
        "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life.",
    },
    {
        "id": 3,
        "name": "Tokyo",
        "city": "Tokyo",
        "country": "Japan",
        "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D",
        "description": "Tokyo is a bustling metropolis with cutting-edge technology, traditional temples, and an exciting nightlife."
    },
    {
        "id": 4,
        "name": "Rome",
        "city": "Rome",
        "country": "Italy",
        "image": "https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg",
        "description": "Rome is a city filled with ancient history, from the Colosseum to the Roman Forum, and delicious Italian cuisine."
    },
    {
        "id": 5,
        "name": "Sydney",
        "city": "Sydney",
        "country": "Australia",
        "image": "https://www.planetware.com/photos-large/AUS/australia-sydney-opera-house.jpg",
        "description": "Sydney is known for its iconic Opera House, beautiful beaches, and the stunning Sydney Harbour."
    },
    {
        "id": 6,
        "name": "London",
        "city": "London",
        "country": "United Kingdom",
        "image": "https://babylontours.fr/wp-content/uploads/2016/09/london-441853_960_720.jpg",
        "description": "London is a cultural hub with historic landmarks like Big Ben, the Tower of London, and a vibrant arts scene."
    },
  ];

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ("http://localhost:5173"),
        methods: ["GET","POST","DELETE","PUT"]
    }
))

app.get('/', (request,response) => {
    response.send("Hello API");
})

app.get('/travels', (req,res) => {
    res.send(travelList);
})

app.post('/travels', (req,res) => {
    console.log("POST request : "+ req.body);
    const travel =  req.body;
    travel.id = travelList[travelList.length-1].id + 1 ;
    travelList.push(travel);
    // create const travel with body
    // add id param to object travel
    // insert travel in travelList
    // send back add travel object 
    res.send(travelList);
})

app.delete('/travels/:id', (req,res) => {
    console.log("DELETE REQUEST : " + req.params);
    const id = req.params.id;
    travelList = travelList.filter((travel) => travel.id !== Number(id));
    // Create conts id with req.params.id
    // delete travel with id in to travelList
    //send back succes to delete
    res.send(travelList);
})

app.get('/travels/:id', (req,res) => {
    const id = req.params.id;
    const travel = travelList.find((travel) => travel.id === Number(id));
    
    res.send(travel);
})

app.put('/travels/:id', (req,res) => {
    // Contain to change
    const info = req.body;
    // The id of the travel to change
    const id = req.params.id;
    // Get the travel by is id
    let travelIndex = travelList.findIndex((travel) => travel.id === Number(id))
    // Replace with the new information
    travelList[travelIndex] = {
        ...travelList[travelIndex],
        ...info,
    }
    // push the travelList
    res.send(travelList);
})

app.get('/test', (req,res) => {
    res.send("This is a test page");
})

app.listen(8000, () => {
    console.log("Serveur is running to port 8000");
})

