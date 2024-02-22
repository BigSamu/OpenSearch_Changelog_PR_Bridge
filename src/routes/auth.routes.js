import express from "express";
import { authControllers } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

// Route for GitHub webhooks
authRouter.get(
  "/auth/github-app-information",
  authControllers.getGitHubAppInstallationInformation
);

export { authRouter };
