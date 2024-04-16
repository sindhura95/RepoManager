"use client";
import { Button, Input } from "@material-tailwind/react";
import React from "react";

export default function RepositoryForm(props: any) {

  const [repositoryUrl, setRepositoryUrl] = React.useState<string>("");
  const [destinationDir, setDestinationDir] = React.useState<string>("");

  const onUrlChange = ({ target }: any) => setRepositoryUrl(target.value);
  const resetForm = () => [setRepositoryUrl(""), setDestinationDir("")];
  const onDestinationDirChange = ({ target }: any) => setDestinationDir(target.value);

  return (
    <form className="flex mt-6 justify-center items-center">
      <div className="pr-6 min-width-cls">
        <Input
          type="text"
          label="Git Repo Url"
          placeholder="Provide GitHub https link to clone "
          value={repositoryUrl}
          onChange={onUrlChange}
        />
      </div>
      <div className="pr-6 min-width-cls">
        <Input
          type="text"
          label="Destination Dir"
          placeholder="Provide full path to your folder"
          value={destinationDir}
          onChange={onDestinationDirChange}
        />
      </div>
      <div>
        <Button
          id="cloneBtn"
          color={repositoryUrl ? "gray" : "blue-gray"}
          disabled={!repositoryUrl || !destinationDir}
          onClick={() =>
            props.handleClone(repositoryUrl, destinationDir, resetForm)
          }
        >
          Clone Repository
        </Button>
      </div>
    </form>
  );
}
