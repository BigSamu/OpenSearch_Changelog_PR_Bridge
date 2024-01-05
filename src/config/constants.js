
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const API_PATH_SUFFIX = "/api/v1";
export const GITHUB_APP_IDENTIFIER = process.env.GITHUB_APP_IDENTIFIER;
export const GITHUB_APP_PRIVATE_KEY = process.env.GITHUB_APP_PRIVATE_KEY;
export const CHANGESET_PATH = "changelogs/fragments";

