import { NextApiRequest, NextApiResponse } from "next";
import simpleGit from "simple-git";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { repositoryUrl, destinationDir, modifiedFiles, commitMessage } =
    req.body;
  const git = simpleGit(destinationDir);
  const remoteUrlWithAuth = repositoryUrl.replace(
    "https://",
    `https://${process.env.PAT_TOKEN}@`
  );
  try {
    // Add files to the repository
    await git.add(modifiedFiles);

    // Commit changes
    await git.commit(commitMessage);

    await git.removeRemote("origin"); // Remove the existing remote if needed
    await git.addRemote("origin", remoteUrlWithAuth);

    // Push changes to the remote repository
    await git.push("origin", process.env.BRANCH_NAME);

    console.log("Changes pushed successfully!");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error Pushing repository:", error);
    res.status(500).json({ error: " " + error });
  }
}
