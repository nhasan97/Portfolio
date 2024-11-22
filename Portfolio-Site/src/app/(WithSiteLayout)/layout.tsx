import { Navbar } from "@/src/components/navbar";
import { TChildren } from "@/src/types/children.type";

import React from "react";

const layout = ({ children }: TChildren) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default layout;
