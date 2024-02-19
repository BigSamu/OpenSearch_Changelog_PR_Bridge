// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

import express from "express";
import fileRouter from "./routes/file.routes.js";
import {
  errorRequestHandler,
  ensureGitHubAppInstalled,
  verifyReceivedApiKey,
} from "./middlewares/index.js";

import { PORT, API_PATH_SUFFIX } from "./config/constants.js";

// Initialize express instance
const app = express(); // Express server

// Set up body-parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Verify incoming API key in request headers
app.use(verifyReceivedApiKey);

// Ensure GitHub App is installed in the repository
app.use(ensureGitHubAppInstalled);

// Suscribe API routes
app.use(API_PATH_SUFFIX, fileRouter);

// Setup error handlers middlewares for requests
app.use(errorRequestHandler);

// Run Express server instance in selected port
if (!process.env.AWS_LAMBDA_FUNCTION_NAME) {
  // Run Express server instance in selected port only if not in AWS Lambda
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    console.log("Press Ctrl + C to quit.");
  });
}
