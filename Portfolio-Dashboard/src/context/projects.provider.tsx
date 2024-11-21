"use client";

import React, { createContext, useContext, useState } from "react";
import { TChildren } from "../types/children.type";
import { IProjectContext } from "../types/project.type";
import { useGetAllProjects, useGetProjectCount } from "../hooks/project.hook";

const ProjectContext = createContext<IProjectContext | undefined>(undefined);

const ProjectsProvider = ({ children }: TChildren) => {
  //retrieving total number of projects
  const { isLoading: loadingProjectCount, data: loadedProjectCount } =
    useGetProjectCount();

  //States for browsing
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  //retrieving all projects
  const {
    isLoading: loadingProjects,
    data: loadedProjectData,
    refetch: refetchAllProjects,
  } = useGetAllProjects(searchTerm, sort, currentPage, itemsPerPage);

  const resetBrowser = () => {
    setSearchTerm("");
    setSort("");
  };

  const resetPagination = () => {
    setItemsPerPage(5);
    setCurrentPage(0);
  };

  const projectInfo: IProjectContext = {
    loadingProjectCount,
    projectCount: loadedProjectCount?.data,
    searchTerm,
    setSearchTerm,
    sort,
    setSort,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    loadingProjects,
    projectData: loadedProjectData?.data,
    refetchAllProjects,
    resetBrowser,
    resetPagination,
  };

  return (
    <ProjectContext.Provider value={projectInfo}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useRecipeProvider = () => {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error("context invalid");
  }

  return context;
};

export default ProjectsProvider;
