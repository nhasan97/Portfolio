import { useQuery } from "@tanstack/react-query";
import { getAllExperiences } from "../services/ExperienceServices";

//hook for retrieving all experiences
export const useGetAllExperiences = () => {
  return useQuery({
    queryKey: ["GET_All_EXPERIENCES"],
    queryFn: async () => await getAllExperiences(),
    enabled: true,
  });
};
