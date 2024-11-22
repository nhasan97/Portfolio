"use client";

import { useEffect } from "react";

import Title from "../../../shared/Title";
import ProjectCard from "./ProjectCard";
import Container from "@/src/components/layout/Container";
import { useProjectProvider } from "@/src/context/projects.provider";
import LoadingSection from "@/src/components/shared/LoadingSection";
import NoData from "@/src/components/shared/NoData";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const Projects = () => {
  const {
    loadingProjectCount,
    projectCount,
    loadingProjects,
    setItemsPerPage,
    projectData,
    resetBrowser,
    resetPagination,
  } = useProjectProvider();

  useEffect(() => {
    resetBrowser();
    resetPagination();
  }, []);

  setItemsPerPage(projectCount);

  //setting the title
  const title = {
    mainTitle: "Projects",
    subTitle1: "Projects",
    subTitle2: "Projects List",
  };

  return (
    <Container>
      <div className="h-fit py-10 my-10">
        <Title title={title} align={"m"} />

        {loadingProjectCount || loadingProjects ? (
          <LoadingSection />
        ) : projectData.length > 0 ? (
          <div>
            <div
              className={`grid grid-cols-1 gap-6 lg:gap-0 md:[&>*:nth-child(even)]:flex-row-reverse md:px-12 lg:px-20 py-10`}
            >
              {projectData.slice(0, 3).map((project, index) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
            <div className="flex justify-center py-6">
              {projectData.length > 3 && (
                <Link href="">
                  <Button className="w-1/5 mx-auto bg-[#c4c6d3] text-[#010018] font-medium text-lg">
                    View All
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <NoData text="No Data Found" />
        )}
      </div>
    </Container>
  );
};

export default Projects;
