import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { IExperience } from "@/src/types/experience.type";
import MobileViewExperienceCard from "./MobileViewExperienceCard";
import NoData from "@/src/components/Shared/NoData";

const MobileView = ({
  experienceData,
  refetchExperiences,
}: {
  experienceData: { data: IExperience[] };
  refetchExperiences: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[80%] overflow-y-auto rounded-lg">
      {experienceData!.data?.length > 0 ? (
        experienceData!.data?.map((experience: IExperience) => (
          <MobileViewExperienceCard
            key={experience?._id}
            experience={experience}
            refetchExperiences={refetchExperiences}
          />
        ))
      ) : (
        <NoData text={"No Admin Found"} />
      )}
    </div>
  );
};

export default MobileView;
