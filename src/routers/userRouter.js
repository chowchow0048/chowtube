import express from "express";
import {userHome, seeUser, startGithubLogin, finishGithubLogin} from "../controllers/userController"

const userRouter = express.Router();

userRouter.get("/", userHome);
userRouter.get("/:id", seeUser);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);

export default userRouter;