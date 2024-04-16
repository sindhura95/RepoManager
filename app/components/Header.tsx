import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function Header() {
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex justify-center items-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-extrabold"
        >
          Git Repository Management
        </Typography>
      </div>
    </Navbar>
  );
}
