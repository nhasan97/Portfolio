"use client";

import Container from "@/src/components/layout/Container";
import LoadingSection from "@/src/components/shared/LoadingSection";
import Title from "@/src/components/shared/Title";
import { useGetSingleProject } from "@/src/hooks/project.hook";
import { Link } from "@nextui-org/link";
import React from "react";

const ProjectDetailsPage = ({ params }: { params: any }) => {
  const {
    isLoading: loadingProjectData,
    data: projectData,
    refetch: refetchProject,
  } = useGetSingleProject(params.projectId);

  //setting the title
  const title = {
    mainTitle: "Project Details",
  };

  const style = {
    backgroundImage:
      "linear-gradient(to right bottom, #8080f1, #997bec, #af76e6, #c371de, #d46cd5, #e76ac5, #f66cb5, #ff70a5, #ff8091, #ff9382, #ffa77b, #f8bb7e)",
  };

  return (
    <Container>
      <div className="min-h-screen pt-28">
        <Title title={title} align={"m"} />

        {loadingProjectData ? (
          <LoadingSection />
        ) : (
          <div className="py-5">
            <h1 className="text-heading-text-color text-xl md:text-3xl mb-5">
              {projectData?.data?.name}
            </h1>

            <div className="flex flex-col justify-center items-start gap-6">
              <div className="w-full h-full lg:py-10 border rounded-lg">
                <div className="xl:w-[60%] mx-auto">
                  {/*<Carousel>
                  {images.map((image) => (
                    <div key={image}>
                      <img src={image} />
                      
                    </div>
                  ))}
                </Carousel> */}
                </div>
              </div>

              <div className="w-full  h-full bg-secondary-color p-6 rounded-lg space-y-6">
                <div className="text-heading-text-color font-light leading-7 space-y-6">
                  <p className="">
                    <span className="font-semibold">PanaPoll . Type || </span>
                    {projectData?.data?.type}
                  </p>
                  <p className="text-justify">
                    <span className="font-semibold">
                      PanaPoll . Description ||{" "}
                    </span>
                    {projectData?.data?.description}
                  </p>
                  <div>
                    <span className="font-semibold">
                      PanaPoll . Features ||{" "}
                    </span>
                    {projectData?.data?.features.map((feature: string) => (
                      <p key={feature}>
                        <i className="fa-solid fa-check" /> {feature}
                      </p>
                    ))}
                  </div>
                  <div>
                    <span className="font-semibold">
                      PanaPoll . Technologies Used ||{" "}
                    </span>

                    <div className="flex flex-wrap gap-3 py-3">
                      {projectData?.data?.technologies.map((tech: string) => (
                        <div
                          key={tech}
                          className={` bg-main-color p-5 text-center rounded-xl`}
                        >
                          <h3 className="text-heading-text-color text-lg font-medium">
                            {tech}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p>
                    <span className="font-semibold">
                      PanaPoll . Duration ||{" "}
                    </span>
                    {projectData?.data?.duration} Days
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Link
                    href={projectData?.data?.live_link}
                    style={style}
                    className=" btn text-white  text-base border-none"
                  >
                    <i className="fa-solid fa-globe" />
                  </Link>
                  <Link
                    href={projectData?.data?.client_link}
                    style={style}
                    className="btn text-white text-base border-none"
                  >
                    <i className="fa-brands fa-github" />
                    Client Code
                  </Link>
                  <Link
                    href={projectData?.data?.server_link}
                    style={style}
                    className="btn text-white text-base border-none"
                  >
                    <i className="fa-brands fa-github" />
                    Server Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProjectDetailsPage;
