# Git Repository Management Project

Replace your personal access token in the `.env.local` file so that the push will work without any issue
The branch name is by default main, Please change the branch name in the `.env.local` file

Run `npm install` cmd to install the dependencies.
Run `npm run dev` cmd to start the project in your localhost
Run `npm run test` cmd to start the jest unit tests 

Application runs in `http://localhost:3000/`

## Overview
This project is for performing Git tasks like cloning and pushing changes back to the remote repository.

## Features
1. Input Handling: Accepts a Git repository URL and local directory as an input.
2. Repository Cloning: Clones the specified Git repository to the local directory given.
3. Modification: Makes a demonstrable change to the cloned repository.
4. Push Changes: Pushes the modifications back to the original repository.

## Technical Implementation
**Framework and Language**: React with TypeScript, nodejs utilizing the Next.js framework.
Utilizes the simple-git library within a Next.js API route to clone the repository to a local directory and push the changes to the repository.

**Design System**: Tailwind Material for react is chosen as the Design system for consistency and efficiency in design implementation.

**Error Handling**: Error handling is implemented to handle potential issues such as cloning failures, and push errors.

# Troubleshooting 
If you face any issue in pushing the changes to Git Remote Repository, please check the `.env.local` file for the branch name and personal access token variables. Pushing to Git remote repository requires authentication and branch name as expected.

# Demo
For a quick preview check the video in `demo/preview` file

<video src='demo/preview.mov' width=180></video>