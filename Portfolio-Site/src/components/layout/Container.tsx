import { TChildren } from "@/src/types/children.type";
import React from "react";

const Container = ({ children }: TChildren) => {
  return (
    <section
      className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20"
      //   id={`${id && id}`}
    >
      {children}
    </section>
  );
};

export default Container;
