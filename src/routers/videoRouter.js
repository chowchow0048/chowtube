import express from "express";
import {watch, edit, deleteVideo, upload} from "../controlleres/videoController"

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:potato", watch);
videoRouter.get('/:id/edit', edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;