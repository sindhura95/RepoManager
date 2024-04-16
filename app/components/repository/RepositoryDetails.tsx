"use client";
import React from "react";
import Repository from "./Repository";
import RepositoryForm from "./RepositoryForm";
import { RepositoryConfig } from "../../models/RepositoryConfig";
import {
  getClonedRepository,
  getRepositoryChanges,
  pushToRepository,
} from "@/app/services/RepositoryService";
import getToasterMsg from "../utils/ToasterMsg";
import { Typography } from "@material-tailwind/react";
import Preloader from "../utils/Preloader";

export default function RepositoryDetails() {
  const [repos, setRepos] = React.useState<RepositoryConfig[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //Checking if a repository with the provided URL already exists
  const isRepoExist = (repositoryUrl: string, resetForm: Function) => {
    const existingRepo = repos.find(
      (repo) => repo.repositoryUrl === repositoryUrl
    );
    if (existingRepo) {
      getToasterMsg("Repository already cloned.");
      resetForm();
      return true;
    }
    return false;
  };

  //Clones a repository from the provided URL to the specified destination directory
  const cloneRepository = async (
    repositoryUrl: string,
    destinationDir: string,
    resetForm: Function
  ) => {
    if (!isRepoExist(repositoryUrl, resetForm)) {
      setIsLoading(true);
      const response = await getClonedRepository(repositoryUrl, destinationDir);
      if (!response.error) {
        setRepos([
          {
            id: Math.random(),
            repositoryName: response.repositoryName,
            repositoryDescription: response.repositoryDescription,
            repositoryUrl,
            destinationDir,
          },
          ...repos,
        ]);
        getToasterMsg("Repository cloned successfully !");
      } else {
        getToasterMsg(`Failed to clone repository: ${response.error}`);
      }
      resetForm();
      setIsLoading(false);
    }
  };

  //Handles changes in the repository by fetching modified files and pushing them to the repository.
  const handleChanges = async (repoDetails: RepositoryConfig) => {
    setIsLoading(true);
    const response = await getRepositoryChanges(
      repoDetails.repositoryUrl!,
      repoDetails.destinationDir!
    );
    if (response.success) {
      response.modifiedFiles.length > 0
        ? pushChangesToRepository(response.modifiedFiles, repoDetails)
        : getToasterMsg(
            "No file changes to push. Please make some changes and try again !"
          );
    } else {
      getToasterMsg(`Error: ${response.error}`);
    }
    setIsLoading(false);
  };

  //Pushes modified files to a specified repository
  const pushChangesToRepository = async (
    modifiedFiles: string[],
    repoDetails: RepositoryConfig
  ) => {
    const commitMessage = `Automatic commit by Repo Manager app: ${new Date().toISOString()}`;
    const response = await pushToRepository(
      repoDetails.repositoryUrl!,
      repoDetails.destinationDir!,
      modifiedFiles,
      commitMessage
    );
    if (response.success) {
      getToasterMsg("Successfully pushed the changes to Repository");
    } else {
      getToasterMsg(`Error: ${response.error}`);
    }
  };

  return (
    <main>
      <RepositoryForm handleClone={cloneRepository} />
      {repos.length === 0 ? (
        <Typography className="flex mt-6 justify-center items-center font-medium">
          No repository added to track. Please clone to add repositories
        </Typography>
      ) : null}
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="grid grid-cols-3 col-span-3">
          {repos.map((repo: RepositoryConfig) => (
            <Repository
              key={repo.id}
              repoDetails={repo}
              onPushChanges={handleChanges}
            />
          ))}
        </div>
      )}
    </main>
  );
}
