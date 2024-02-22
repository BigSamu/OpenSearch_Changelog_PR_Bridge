import express from "express";
import {
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
} from "../middlewares/auth.middlewares.js";
import { fileControllers } from "../controllers/file.controllers.js";

const fileRouter = express.Router();

// Route for GitHub webhooks
fileRouter.get(
  "/files",
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
  fileControllers.getFileByPath
);
fileRouter.get(
  "/directory/files",
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
  fileControllers.getAllFileByPath
);
fileRouter.post(
  "/files",
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
  fileControllers.createOrUpdateFile
);
fileRouter.delete(
  "/files",
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
  fileControllers.deleteFileByPath
);
fileRouter.delete(
  "/directory/files",
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
  fileControllers.deleteAllFilesByPath
);

export { fileRouter };
