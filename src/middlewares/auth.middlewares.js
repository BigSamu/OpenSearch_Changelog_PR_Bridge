import { authServices } from "../services/index.js"; // Adjust the path as necessary
import { CHANGELOG_PR_BRIDGE_API_KEY as AuthorizedAPIKey } from "../config/constants.js";

export async function ensureGitHubAppInstalled(req, res, next) {
  const { owner, repo } = req.query;

  try {
    const { installed, suspended } = await authServices.checkAppInstallation(
      owner,
      repo
    );
    if (!installed) {
      return res.status(403).json({
        error: {
          status: 403,
          message: `GitHub App is not installed in the specified repository (owner: '${owner}' and repo: '${repo}'). Access forbidden.`,
        },
      });
    }
    if (suspended) {
      return res.status(403).json({
        error: {
          status: 403,
          message: `GitHub App is installed in the specified repository but suspended (owner: '${owner}' and repo: '${repo}'). Access forbidden.`,
        },
      });
    }
    next();
  } catch (error) {
    console.error("Error checking GitHub App installation:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const { APP_GITHUB_IDENTIFIER } = process.env;

export const verifyReceivedApiKey = (req, res, next) => {
  const receivedApiKey = req.headers["x-api-key"];
  if (!receivedApiKey || receivedApiKey !== AuthorizedAPIKey) {
    const errorMessage = !receivedApiKey
      ? `API Key is missing. Access unauthorized.`
      : `Incorrect API Key. Access unauthorized.`;
    console.error(errorMessage);
    return res.status(401).json({
      error: {
        status: 401,
        message: errorMessage,
      },
    });
  }
  next();
};
