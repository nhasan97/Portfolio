import { useQuery } from "@tanstack/react-query";
import { getAllSkills } from "../services/SkillServices";

//hook for retrieving all skills
export const useGetAllSkills = () => {
  return useQuery({
    queryKey: ["GET_All_SKILLS"],
    queryFn: async () => await getAllSkills(),
    enabled: true,
  });
};
