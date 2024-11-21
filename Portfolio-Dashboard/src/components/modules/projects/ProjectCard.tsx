import "../../../styles/Project.css";

import { Link } from "@nextui-org/link";
import { IProject } from "@/src/types/project.type";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const ProjectCard = ({ project }: { project: IProject }) => {
  const { _id, name, images, live_link, client_link, server_link } = project;

  const thumbnail = images?.[0] || "default-placeholder-image-url.jpg"; // Use a placeholder if images is empty

  return (
    <div className="project-card w-full rounded-lg relative">
      {/* <h1 className="text-white text-8xl opacity-50 absolute left-0 md:translate-x-[-50%]">
          01
        </h1> */}

      <div className="background-overlay flex flex-col justify-center items-center px-2 py-6 rounded-lg overflow-hidden relative">
        <h3 className="text-white text-2xl mb-6">{name}</h3>

        <Image src={thumbnail} className="h-[200px] object-cover bottom-0" />

        <div className="hover-overlay p-2 sm:w-[50%] h-full bg-[#ffffff42] flex flex-col justify-center items-center gap-3 rounded-lg absolute right-0">
          <div className="grid grid-cols-2 gap-4">
            <Link href={`/project-details/${_id}`}>
              <Button className="col-span-1 text-[#010018] text-base bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                <i className="fa-solid fa-circle-info" />
              </Button>
            </Link>
            <Link href={live_link}>
              <Button className="col-span-1 text-[#010018] text-base bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                <i className="fa-solid fa-globe" />
              </Button>
            </Link>
            <Link href={client_link} className="col-span-2">
              <Button className="w-full text-[#010018] text-base bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                <i className="fa-brands fa-github" />
                Client Code
              </Button>
            </Link>
            <Link href={server_link} className="col-span-2">
              <Button className="w-full text-[#010018] text-base bg-transparent border-none shadow-lg shadow-[#ffffff42]">
                <i className="fa-brands fa-github" />
                Server Code
              </Button>
            </Link>

            <Button className="col-span-1 text-[#010018] text-base bg-transparent border-none shadow-lg shadow-[#ffffff42]">
              <i className="fa-solid fa-file-pen" />
            </Button>

            <Button className="col-span-1 text-[#010018] text-base bg-transparent border-none shadow-lg shadow-[#ffffff42]">
              <i className="fa-solid fa-trash" />
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:w-[50%] lg:w-[60%]"></div> */}
    </div>
  );
};

export default ProjectCard;
