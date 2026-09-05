import express from 'express';
const userRoute = express.Router();
const {createUser , deleteUser , getSingleUser , updateUser} = 
require('../controller/userController');

userRoute.post("/new-student", createUser)
userRoute.get("/get-one-student/:id", getSingleUser)
userRoute.delete("/delete-student/:id", deleteUser)
userRoute.patch("/update-student/:id", updateUser)


export default userRoute

//finById camel casing
//find_by_id snake casing
