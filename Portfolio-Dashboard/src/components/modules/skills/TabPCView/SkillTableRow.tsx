"use client";

import SkillDetailsModal from "@/src/components/modals/SkillDetailsModal";
import { ISkill } from "@/src/types/skill.type";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { toast } from "sonner";

const SkillTableRow = ({
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
    <tr className="flex justify-between items-center text-[#010018] text-sm xl:text-base text-center p-5">
      <td className="w-[40%] xl:flex-1">
        <div className="flex items-center gap-3">
          <div>
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
          <div className="text-left">
            <h1 className="font-semibold">{skill?.skillName}</h1>
          </div>
        </div>
      </td>

      <td className="w-[20%] xl:flex-1">{skill?.proficiencyLevel}</td>

      <td className="w-[20%] xl:flex-1">{skill?.experienceYears}</td>

      <td className="w-[20%] xl:flex-1 space-x-2">
        <SkillDetailsModal />

        <Button isIconOnly size="sm" className="bg-[#c4c6d3] text-[#0a0b29]">
          <i className="fa-solid fa-file-pen" />
        </Button>
        <Button isIconOnly size="sm" className="bg-[#c4c6d3] text-[#0a0b29]">
          <i className="fa-solid fa-trash" />
        </Button>
      </td>
    </tr>
  );
};

export default SkillTableRow;
