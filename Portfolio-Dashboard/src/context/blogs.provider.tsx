"use client";

import React, { createContext, useContext, useState } from "react";
import { IBlogContext } from "../types/blog.type";
import { TChildren } from "../types/children.type";
import { useGetAllBlogs, useGetBlogCount } from "../hooks/blog.hook";

const BlogContext = createContext<IBlogContext | undefined>(undefined);

const BlogsProvider = ({ children }: TChildren) => {
  //retrieving total number of blogs
  const { isLoading: loadingBlogCount, data: loadedBlogCount } =
    useGetBlogCount();

  //States for browsing
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  //retrieving all blogs
  const {
    isLoading: loadingBlogs,
    data: loadedBlogData,
    refetch: refetchAllBlogs,
  } = useGetAllBlogs(searchTerm, sort, currentPage, itemsPerPage);

  const resetBrowser = () => {
    setSearchTerm("");
    setSort("");
  };

  const resetPagination = () => {
    setItemsPerPage(5);
    setCurrentPage(0);
  };

  const blogInfo: IBlogContext = {
    loadingBlogCount,
    blogCount: loadedBlogCount?.data,
    searchTerm,
    setSearchTerm,
    sort,
    setSort,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    loadingBlogs,
    blogData: loadedBlogData?.data,
    refetchAllBlogs,
    resetBrowser,
    resetPagination,
  };

  return (
    <BlogContext.Provider value={blogInfo}>{children}</BlogContext.Provider>
  );
};

export const useBlogProvider = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error("context invalid");
  }

  return context;
};

export default BlogsProvider;
