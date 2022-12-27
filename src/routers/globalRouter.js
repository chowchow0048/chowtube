import express from "express";
import {join, login} from "../controlleres/userController";
import {trending, search} from "../controlleres/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;