import { NextApiRequest, NextApiResponse } from "next";
import simpleGit, { ResetMode } from "simple-git";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { destinationDir } = req.body;

  // Initialize simple-git with the provided destination directory
  const git = simpleGit(destinationDir);

  try {

    // Fetch latest changes from the repository
    await git.fetch();

    // Get the status of the repository
    const status = await git.status();

    // Extract paths of modified files from the status
    const modifiedFiles = status.files.map((file) => file.path);
    
    res.status(200).json({ success: true, modifiedFiles });
  } catch (error) {
    console.error("Error checking changes in the repository:", error);
    res.status(500).json({ error: " " + error });
  }
}
