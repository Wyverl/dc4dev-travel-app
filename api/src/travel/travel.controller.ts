import Router from "express";
import { findAll, findOne, create , update ,remove} from "./travel.service";
const router = Router();

// Get all travel
router.get("/", async (req, res) => {
  const travels = await findAll();

  res.send(travels);
});

// Get one travel
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const travel = await findOne(+id);

  res.send(travel);
});

// Create a travel
router.post("/", async (req, res) => {
  const travelInfo = req.body;
    
  const travel = await create(travelInfo);
  res.send(travel);
});

// Update a travel
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const travelInfo = req.body;
    
  const travel = await update(+id,travelInfo);
  res.send(travel);
});

router.delete("/:id", async (req,res) => {
  const {id} = req.params;
  const travel = await remove(+id);
  res.send(travel);
})

export default router;