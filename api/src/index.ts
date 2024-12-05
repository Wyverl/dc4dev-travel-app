import express, { request } from "express"
import cors from "cors"
import travelController from "../src/travel/travel.controller"

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ("http://localhost:5173"),
        methods: ["GET","POST","DELETE","PUT"]
    }
))

app.use("/travels", travelController);

app.get("/",(req,res) =>{
    res.send("Get all travel");
})
app.post("/",(req,res) => {
    res.send("Create a travel");
})


app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})


/* 

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

 */
