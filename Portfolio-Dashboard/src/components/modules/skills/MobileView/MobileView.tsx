import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import NoData from "@/src/components/Shared/NoData";
import { ISkill } from "@/src/types/skill.type";
import MobileViewSkillCard from "./MobileViewSkillCard";

const MobileView = ({
  skillData,
  refetchSkills,
}: {
  skillData: { data: ISkill[] };
  refetchSkills: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[80%] overflow-y-auto rounded-lg">
      {skillData!.data?.length > 0 ? (
        skillData!.data?.map((skill: ISkill) => (
          <MobileViewSkillCard
            key={skill?._id}
            skill={skill}
            refetchSkills={refetchSkills}
          />
        ))
      ) : (
        <NoData text={"No Admin Found"} />
      )}
    </div>
  );
};

export default MobileView;
