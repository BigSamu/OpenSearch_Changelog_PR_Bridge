import express from "express";
import {verifyReceivedApiKey} from "../middlewares/auth.middlewares.js";
import { fileControllers } from "../controllers/file.controllers.js";

const fileRouter = express.Router();

// Route for GitHub webhooks
fileRouter.get("/files", verifyReceivedApiKey,fileControllers.getFileByPath);
fileRouter.get("/directory/files", verifyReceivedApiKey,fileControllers.getAllFileByPath);
fileRouter.post("/files", verifyReceivedApiKey, fileControllers.createOrUpdateFile);
fileRouter.delete("/files", verifyReceivedApiKey, fileControllers.deleteFileByPath);
fileRouter.delete("/directory/files", verifyReceivedApiKey, fileControllers.deleteAllFilesByPath);

export default fileRouter;
