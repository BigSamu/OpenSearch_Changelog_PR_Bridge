// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

import express from "express";
import fileRouter from "./routes/file.routes.js";
import {
  errorRequestHandler,
  ensureGitHubAppInstalled,
} from "./middlewares/index.js";

import {
  PORT,
  API_PATH_SUFFIX,
} from "./config/constants.js";


// 2) Intiliazing express instance
const app = express(); // Express server

// 3) Setup body-parsing  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4) Ensure GitHub App is installed in the repository
app.use(ensureGitHubAppInstalled);

// 5) Suscribe API routes
app.use(API_PATH_SUFFIX, fileRouter);

// 8) Setup error handlers middlewares for requests
app.use(errorRequestHandler);

// 9) Running instance of Express server in selected port
app.listen(PORT, () => {
  console.log(`Server is listening in port: ${PORT}`);
  console.log("Press Ctrl + C to quit.");
});
