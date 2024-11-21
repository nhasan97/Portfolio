import { IProject } from "@/src/types/project.type";
import React from "react";
import ProjectCard from "./ProjectCard";

const DisplayProjects = ({ projectData }: { projectData: IProject[] }) => {
  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6"}>
      {projectData?.map((project: IProject) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default DisplayProjects;
