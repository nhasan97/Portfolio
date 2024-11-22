import { useQuery } from "@tanstack/react-query";
import { getAllProjects, getProjectCount } from "../services/ProjectServices";

//hook for retrieving all projects
export const useGetAllProjects = (
  searchTerm: string,
  sort: string,
  page: number,
  limit: number
) => {
  return useQuery({
    queryKey: ["GET_All_PROJECTS", searchTerm, sort, page, limit],
    queryFn: async () => await getAllProjects(searchTerm, sort, page, limit),
    enabled: true,
  });
};

//hook for counting projects
export const useGetProjectCount = () => {
  return useQuery({
    queryKey: ["GET_PROJECT_COUNT"],
    queryFn: async () => await getProjectCount(),
  });
};
