import express from "express";
import {edit, remove, seeUser, logout} from "../controlleres/userController"

const userRouter = express.Router();


userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", seeUser);
userRouter.get("/logout", logout);

export default userRouter;