import express from "express";
import {see, edit, deleteVideo, upload} from "../controlleres/videoController"

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:potato", see);
videoRouter.get('/:id/edit', edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;