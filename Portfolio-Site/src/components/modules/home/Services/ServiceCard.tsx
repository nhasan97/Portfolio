import { Link } from "@nextui-org/link";
import "./Services.css";
import { IService } from "@/src/types/service.type";
import { Button } from "@nextui-org/button";

const ServiceCard = ({ service }: { service: IService }) => {
  const { _id, sln, name } = service;

  return (
    <div className="card text-[#c4c6d3] rounded-xl relative z-10">
      <div className="w-full h-fit bg-[#0a0b29] flex flex-col lg:flex-row justify-between items-center gap-3 px-5 py-14 rounded-xl">
        <div>
          <h1 className="text-7xl opacity-10">0{sln}</h1>
        </div>
        <div>
          <p className="text-lg text-center md:text-left">{name}</p>
        </div>
        <div>
          <Link href={`/service-details/${_id}`}>
            <Button
              isIconOnly
              size="md"
              radius="full"
              className="bg-[#0a0b29] hover:bg-[#c4c6d3] text-2xl text-[#c4c6d3] hover:text-[#010018] border border-[#c4c6d3] "
            >
              <i className="fa-solid fa-arrow-right" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
