import dotenv from "dotenv";
import path from "path";

// Determinar el entorno actual basándose en NODE_ENV, con un valor predeterminado de 'development'
const env = process.env.NODE_ENV || "development";

// Construir el nombre del archivo .env basado en el entorno actual
const envPath = path.resolve(process.cwd(), `.env.${env}`);

// Cargar variables de entorno desde el archivo .env correspondiente
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
