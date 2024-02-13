import dotenv from "dotenv";
import path from "path";

// Determinar el entorno actual basándose en NODE_ENV, con un valor predeterminado de 'development'
const env = process.env.NODE_ENV || "development";

// Construir el nombre del archivo .env basado en el entorno actual
const envPath = path.resolve(process.cwd(), `.env.${env}`);

// Cargar variables de entorno desde el archivo .env correspondiente
dotenv.config({ path: envPath });

export const PORT = 3000;
export const API_PATH_SUFFIX = "/api/v1";
export const APP_GITHUB_IDENTIFIER = process.env.APP_GITHUB_IDENTIFIER;
export const APP_GITHUB_PRIVATE_KEY = process.env.APP_GITHUB_PRIVATE_KEY;
export const CHANGELOG_PR_BRIDGE_API_KEY =
  process.env.CHANGELOG_PR_BRIDGE_API_KEY;
export const CHANGESET_PATH = "changelogs/fragments";
