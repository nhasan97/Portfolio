import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/navbar";
import { TChildren } from "@/src/types/children.type";

import React from "react";

const layout = ({ children }: TChildren) => {
  return (
    <div className="bg-[#010018] relative flex flex-col">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
