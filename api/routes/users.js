import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import express from "express";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

 const router=express.Router();

 
 //update
 //verifyUser,Admin  are varification middle layer
 router.put("/update/:id",verifyUser,updateUser);

 //delete
 router.delete("/:id",verifyUser,deleteUser);

 //get
 router.get("/:id",verifyUser,getUser);

 //get all
 router.get("/",verifyAdmin,getUsers);


 

 export default router