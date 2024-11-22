import PropTypes from "prop-types";
import "./Project.css";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { IProject } from "@/src/types/project.type";
import { Button } from "@nextui-org/button";

const ProjectCard = ({
  project,
  index,
}: {
  project: IProject;
  index: number;
}) => {
  const { _id, name, images, live_link, client_link, server_link } = project;

  const thumbnail = images?.[0] || "default-placeholder-image-url.jpg";

  return (
    <div className="flex">
      <div className="w-full md:w-[50%] lg:w-[40%] project-card rounded-lg relative">
        <h1 className="text-white text-8xl opacity-50 absolute left-0 md:translate-x-[-50%]">
          0{index + 1}
        </h1>
        <div className="overflow-hidden">
          <div className="background-overlay flex flex-col justify-center items-center p-20 pt-10 rounded-lg relative">
            <h3 className="text-white text-2xl mb-24">{name}</h3>
            <Image
              removeWrapper
              radius="none"
              src={thumbnail}
              className="w-[70%] md:w-[70%] h-[60%] rounded-t-lg object-cover absolute bottom-0"
            />

            <div className="hover-overlay w-[50%] h-full bg-[#ffffff42] flex flex-col justify-center items-center gap-3 rounded-lg absolute right-0 z-20">
              <div className="grid grid-cols-2 gap-4">
                <Link href={`/project-details/${_id}`}>
                  <Button className="col-span-1 text-[#010018] text-base font-medium bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                    <i className="fa-solid fa-circle-info" />
                  </Button>
                </Link>
                <Link href={live_link}>
                  <Button className="col-span-1 text-[#010018] text-base font-medium bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                    <i className="fa-solid fa-globe" />
                  </Button>
                </Link>
                <Link href={client_link} className="col-span-2">
                  <Button className="w-full text-[#010018] text-base font-medium bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                    <i className="fa-brands fa-github" />
                    Client Code
                  </Button>
                </Link>
                <Link href={server_link} className="col-span-2">
                  <Button className="w-full text-[#010018] text-base font-medium bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                    <i className="fa-brands fa-github" />
                    Server Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:w-[50%] lg:w-[60%]"></div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
export default ProjectCard;
