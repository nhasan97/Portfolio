"use client";

import { useUser } from "@/src/context/user.provider";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { toast } from "sonner";
import "../../../../styles/Project.css";
import SkillDetailsModal from "@/src/components/modals/SkillDetailsModal";
import { ISkill } from "@/src/types/skill.type";

const MobileViewSkillCard = ({
  skill,
  refetchSkills,
}: {
  skill: ISkill;
  refetchSkills: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) => {
  // -------handling delete user-------------------------------------------------------------------------
  // const { mutate: deleteUser, isPending: pendingDeleteUser } = useDeleleUser();

  // const handleDeleteUser = () => {
  //   toast.warning(
  //     "Are you sure to delete user? You won't be able to revert this!",
  //     {
  //       action: {
  //         label: "Yes",
  //         onClick: () => {
  //           try {
  //             deleteUser(
  //               {
  //                 userId: user?._id,
  //               },
  //               { onSuccess: () => refetchAdmins() }
  //             );
  //           } catch (err: any) {
  //             toast.error(err.data.message, { duration: 2000 });
  //           }
  //         },
  //       },
  //       cancel: {
  //         label: "Cancel",
  //         onClick: () => toast.info("Cancelled!", { duration: 2000 }),
  //       },
  //     }
  //   );
  // };

  return (
    <div className="background-overlay h-fit p-1 gap-6 rounded-lg shadow-md">
      <div className="bg-[#0a0b29] backdrop-blur-md flex flex-col gap-6 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="text-small text-default-500 relative">
            <Image
              src={skill?.icon}
              alt="nextui logo"
              width={60}
              height={60}
              radius="sm"
              className="object-cover object-center"
              isBlurred
            />
          </div>

          <div className="flex flex-col">
            <p className="text-base text-[#c4c6d3]">{skill?.skillName}</p>

            <div className="flex items-center gap-1 text-xs text-default-500">
              <p>Proficiency Level | {skill?.proficiencyLevel}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-default-500">
              <p>{skill?.experienceYears} Years of experience</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center gap-3">
          <SkillDetailsModal />

          <Button isIconOnly size="sm" className="bg-[#c4c6d3] text-[#0a0b29]">
            <i className="fa-solid fa-file-pen" />
          </Button>
          <Button isIconOnly size="sm" className="bg-[#c4c6d3] text-[#0a0b29]">
            <i className="fa-solid fa-trash" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileViewSkillCard;
