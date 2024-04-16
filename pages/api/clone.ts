import { NextApiRequest, NextApiResponse } from "next";
import simpleGit from "simple-git";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { repositoryUrl, destinationDir } = req.body;

  // Initialize simple-git
  const git = simpleGit();
  try {
    const repositoryName =
      repositoryUrl.split("/").pop()?.replace(".git", "") || "";
    const repositoryDescription = "";
    // Clone the repository to the specified destination directory
    await git.clone(repositoryUrl, destinationDir);

    res
      .status(200)
      .json({ success: true, repositoryName, repositoryDescription });
  } catch (error) {
    console.error("Error cloning repository:", error);
    res.status(500).json({ error: " " + error });
  }
}
