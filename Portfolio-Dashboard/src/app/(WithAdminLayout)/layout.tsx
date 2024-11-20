import Sidebar from "@/src/components/UI/SideBar/Sidebar";
import { TChildren } from "../../types/children.type";
import React from "react";

const layout = ({ children }: TChildren) => {
  return (
    <div className="bg-[#010018] relative flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:ml-64 relative border">{children}</div>
    </div>
  );
};

export default layout;

{
  /* <div className="relative flex flex-col h-screen">
<Navbar />
<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
  {children}
</main>
<footer className="w-full flex items-center justify-center py-3">
  <Link
    isExternal
    className="flex items-center gap-1 text-current"
    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
    title="nextui.org homepage"
  >
    <span className="text-default-600">Powered by</span>
    <p className="text-primary">NextUI</p>
  </Link>
</footer>
</div> */
}
