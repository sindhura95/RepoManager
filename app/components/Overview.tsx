import React from "react";
import { Header } from "./Header";
import { Toaster } from "react-hot-toast";
import RepositoryDetails from "./repository/RepositoryDetails";
import { Footer } from "./Footer";

export function Overview() {
  return (
    <div>
      <Header />
      <RepositoryDetails />
      <Toaster />
      <Footer />
    </div>
  );
}
