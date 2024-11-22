import { IBlog } from "@/src/types/blog.type";
import React from "react";
import BlogCard from "./BlogCard";

const DisplayBlogs = ({ blogData }: { blogData: IBlog[] }) => {
  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6"}>
      {blogData?.map((blog: IBlog) => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  );
};

export default DisplayBlogs;
