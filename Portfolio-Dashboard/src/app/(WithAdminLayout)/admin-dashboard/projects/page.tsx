"use client";

import DashboardContainer from "@/src/components/layouts/DashboardContainer";
import AddProjectModal from "@/src/components/modals/AddProjectModal";
import Browser from "@/src/components/modules/projects/Browser";
import DisplayProjects from "@/src/components/modules/projects/DisplayProjects";
import Pagination from "@/src/components/modules/projects/Pagination";
import DashboardPageTitle from "@/src/components/Shared/DashboardPageTitle";
import LoadingSection from "@/src/components/Shared/LoadingSection";
import NoData from "@/src/components/Shared/NoData";
import { useProjectProvider } from "@/src/context/projects.provider";
import React, { useEffect } from "react";

const ProjectsPage = () => {
  const { loadingProjects, projectData, resetBrowser, resetPagination } =
    useProjectProvider();

  useEffect(() => {
    resetBrowser();
    resetPagination();
  }, []);

  const title = {
    mainTitle: "Projects",
  };

  return (
    <div className="h-screen ">
      {/* bg-[url('/assets/images/dashboard-recipes-bg-mobileTab.png')] xl:bg-[url('/assets/images/dashboard-recipes-bg-pc.png')] bg-cover bg-center bg-no-repeat */}
      <DashboardContainer>
        <DashboardPageTitle title={title} />

        <div className="w-full flex gap-3 justify-between relative">
          <AddProjectModal />
          <div className="md:flex-1">
            <Browser />
          </div>
        </div>

        <div className="w-full h-[calc(80%-48px)] my-6 overflow-y-auto z-0">
          {loadingProjects ? (
            <LoadingSection />
          ) : projectData?.length ? (
            <DisplayProjects projectData={projectData} />
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

export default ProjectsPage;
