// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

import express from "express";
import fileRouter from "./routes/file.routes.js";
import {
  errorRequestHandler,
  ensureGitHubAppInstalled,
} from "./middlewares/index.js";

import { PORT, API_PATH_SUFFIX } from "./config/constants.js";

// Initialize express instance
const app = express(); // Express server

// Set up body-parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure GitHub App is installed in the repository
app.use(ensureGitHubAppInstalled);

// Subscribe API routes
app.use(API_PATH_SUFFIX, fileRouter);

// Setup error handlers middlewares for requests
app.use(errorRequestHandler);

// Run Express server instance in selected port
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
  console.log("Press Ctrl + C to quit.");
});
