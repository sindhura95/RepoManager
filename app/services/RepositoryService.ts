//Clones a repository from the specified URL to the destination directory
export const getClonedRepository = async (
  repositoryUrl: string,
  destinationDir: string
) => {
  try {
    const response = await fetch("/api/clone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ repositoryUrl, destinationDir }),
    });

    return response.json();
  } catch (error) {
    return error;
  }
};

//Fetches changes in the specified repository.
export const getRepositoryChanges = async (
  repositoryUrl: string,
  destinationDir: string
) => {
  try {
    const response = await fetch("/api/changes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ repositoryUrl, destinationDir }),
    });

    return response.json();
  } catch (error) {
    return error;
  }
};

//Pushes modified files to the specified repository
export const pushToRepository = async (
  repositoryUrl: string,
  destinationDir: string,
  modifiedFiles: any,
  commitMessage: string
) => {
  try {
    const response = await fetch("/api/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        repositoryUrl,
        destinationDir,
        modifiedFiles,
        commitMessage,
      }),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
