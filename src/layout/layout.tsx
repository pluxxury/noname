import React from "react";
import { Header } from "../components/navigation/header";
import { Sidebar } from "../components/navigation/sidebar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={"container mx-auto p-4"}>
        <div className={"flex items-start w-full space-x-4"}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </main>
    </>
  );
};
