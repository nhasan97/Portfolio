"use client";

import DashboardContainer from "@/src/components/layouts/DashboardContainer";
import AddBlogModal from "@/src/components/modals/AddBlogModal";
import Browser from "@/src/components/modules/blogs/Browser";
import DisplayBlogs from "@/src/components/modules/blogs/DisplayBlogs";
import Pagination from "@/src/components/modules/blogs/Pagination";
import DashboardPageTitle from "@/src/components/Shared/DashboardPageTitle";
import LoadingSection from "@/src/components/Shared/LoadingSection";
import NoData from "@/src/components/Shared/NoData";
import { useBlogProvider } from "@/src/context/blogs.provider";
import React, { useEffect } from "react";

const BlogsPage = () => {
  const { loadingBlogs, blogData, resetBrowser, resetPagination } =
    useBlogProvider();

  useEffect(() => {
    resetBrowser();
    resetPagination();
  }, []);

  const title = {
    mainTitle: "Blogs",
  };

  return (
    <div className="h-screen">
      {/* bg-[url('/assets/images/dashboard-recipes-bg-mobileTab.png')] xl:bg-[url('/assets/images/dashboard-recipes-bg-pc.png')] bg-cover bg-center bg-no-repeat */}
      <DashboardContainer>
        <DashboardPageTitle title={title} />

        <div className="w-full flex gap-3 justify-between relative">
          <AddBlogModal />
          <div className="md:flex-1">
            <Browser />
          </div>
        </div>

        <div className="w-full h-[calc(80%-48px)] my-6 overflow-y-auto z-0">
          {loadingBlogs ? (
            <LoadingSection />
          ) : blogData?.length ? (
            <DisplayBlogs blogData={blogData} />
          ) : (
            <NoData text={"No Data Found"} />
          )}
        </div>

        <div className="w-full">
          <Pagination />
        </div>
      </DashboardContainer>
    </div>
  );
};

export default BlogsPage;
