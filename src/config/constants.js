import dotenv from "dotenv";
import path from "path";

// Determine the current environment based on NODE_ENV, defaulting to 'development'
const env = process.env.NODE_ENV || "development";

// Build the .env file name based on the current environment
const envPath = path.resolve(process.cwd(), `.env.${env}`);

// Load environment variables from the corresponding .env file
dotenv.config({ path: envPath });

export const {
  PORT = 8080,
  APP_GITHUB_IDENTIFIER,
  APP_GITHUB_PRIVATE_KEY,
  CHANGELOG_PR_BRIDGE_API_KEY,
} = process.env;

const requiredVariables = [
  "APP_GITHUB_IDENTIFIER",
  "APP_GITHUB_PRIVATE_KEY",
  "CHANGELOG_PR_BRIDGE_API_KEY",
];

const missingVariables = requiredVariables.filter(
  (variable) => !process.env[variable]
);

if (missingVariables.length > 0) {
  console.error(
    `${missingVariables.join(", ")} ${
      missingVariables.length > 1 ? "are" : "is"
    } required env values`
  );
  process.exit(1);
}

export const API_PATH_SUFFIX = "/api/v1";
export const CHANGESET_PATH = "changelogs/fragments";
