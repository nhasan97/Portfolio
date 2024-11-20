import { TChildren } from "@/src/types/children.type";
import React from "react";

const layout = ({ children }: TChildren) => {
  return (
    <div className="bg-[#010018] relative flex flex-col justify-center h-screen">
      {/* <Navbar /> */}
      <main>{children}</main>
    </div>
  );
};

export default layout;
