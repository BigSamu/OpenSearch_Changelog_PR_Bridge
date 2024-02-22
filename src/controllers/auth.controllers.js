import { authServices } from "../services/index.js";

const getGitHubAppInstallationInformation = async (req, res, next) => {
  const { owner, repo } = req.query;

  try {
    const installationInformation = await authServices.checkAppInstallation(
      owner,
      repo
    );
    res.json({ data: installationInformation });
  } catch (error) {
    next(error);
  }
};

export const authControllers = {
  getGitHubAppInstallationInformation,
};
