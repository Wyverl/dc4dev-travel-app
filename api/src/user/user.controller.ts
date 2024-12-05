import { Router } from "express";
import { findAll,findOne,remove,create,update } from "./user.service";
const router = Router();

// Get all user
router.get("/", async (req,res) => {
    const users = await findAll();
    res.send(users);
})

// Get one user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await findOne(+id);
  
    res.send(user);
  });
  
// Create a user
router.post("/", async (req, res) => {
    const userInfo = req.body;
      
    const user = await create(userInfo);
    res.send(user);
  });
  
// Update a user
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const userInfo = req.body;
      
    const user = await update(+id,userInfo);
    res.send(user);
  });

  // Delete a user
router.delete("/:id", async (req,res) => {
    const {id} = req.params;
    const user = await remove(+id);
    res.send(user);
  })

export default router;