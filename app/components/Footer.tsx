import React from "react";
import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex items-center justify-center border-t border-blue-gray-50 py-6 bg-white text-center">
      <Typography color="blue-gray" className="font-normal">
        This application helps you manage your Git repositories by cloning them
        to your local directory and pushing changes back to the Git repository.
      </Typography>
    </footer>
  );
}
