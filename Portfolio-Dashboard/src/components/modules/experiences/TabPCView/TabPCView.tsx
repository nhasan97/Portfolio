import React from "react";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { IExperience } from "@/src/types/experience.type";
import NoData from "@/src/components/Shared/NoData";
import ExperienceTableRow from "./ExperienceTableRow";
import "../../../../styles/Project.css";

const TabPCView = ({
  experienceData,
  refetchExperiences,
}: {
  experienceData: { data: IExperience[] };
  refetchExperiences: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) => {
  return (
    <div className="background-overlay hidden sm:block w-full h-[80%] p-6 overflow-y-auto rounded-lg">
      {experienceData!.data?.length > 0 ? (
        <table className="w-full h-full bg-white/40 backdrop-blur-lg rounded-lg">
          {/* head */}
          <thead>
            <tr className="flex justify-between items-center text-[#010018] text-base xl:text-lg p-5 border-b">
              <th className="w-[40%] xl:flex-1">Company</th>
              <th className="w-[20%] xl:flex-1">Designation</th>
              <th className="w-[20%] xl:flex-1">Duration</th>
              <th className="w-[20%] xl:flex-1">Job Type</th>
              <th className="w-[20%] xl:flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {experienceData!.data?.map((experience: IExperience) => (
              <ExperienceTableRow
                key={experience?._id}
                experience={experience}
                refetchExperiences={refetchExperiences}
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
