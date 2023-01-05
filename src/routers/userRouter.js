import express from "express";
import {userHome, seeUser} from "../controllers/userController"

const userRouter = express.Router();

userRouter.get("/", userHome);
userRouter.get("/:id", seeUser);

export default userRouter;