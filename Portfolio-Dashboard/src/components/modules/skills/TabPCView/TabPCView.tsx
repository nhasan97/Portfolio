import React from "react";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import NoData from "@/src/components/Shared/NoData";
import "../../../../styles/Project.css";
import { ISkill } from "@/src/types/skill.type";
import SkillTableRow from "./SkillTableRow";

const TabPCView = ({
  skillData,
  refetchSkills,
}: {
  skillData: { data: ISkill[] };
  refetchSkills: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) => {
  return (
    <div className="background-overlay hidden sm:block w-full h-[80%] p-6 overflow-y-auto rounded-lg">
      {skillData!.data?.length > 0 ? (
        <table className="w-full h-full bg-white/40 backdrop-blur-lg rounded-lg">
          {/* head */}
          <thead>
            <tr className="flex justify-between items-center text-[#010018] text-base xl:text-lg p-5 border-b">
              <th className="w-[40%] xl:flex-1">Skill</th>
              <th className="w-[20%] xl:flex-1">Proficiency Level</th>
              <th className="w-[20%] xl:flex-1">Experience Years</th>
              <th className="w-[20%] xl:flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {skillData!.data?.map((skill: ISkill) => (
              <SkillTableRow
                key={skill?._id}
                skill={skill}
                refetchSkills={refetchSkills}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <NoData text={"No Admin Found"} />
      )}
    </div>
  );
};

export default TabPCView;
