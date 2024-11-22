import { useQuery } from "@tanstack/react-query";
import { getAllBlogs, getBlogCount } from "../services/BlogServices";

//hook for retrieving all blogs
export const useGetAllBlogs = (
  searchTerm: string,
  sort: string,
  page: number,
  limit: number
) => {
  return useQuery({
    queryKey: ["GET_All_BLOGS", searchTerm, sort, page, limit],
    queryFn: async () => await getAllBlogs(searchTerm, sort, page, limit),
    enabled: true,
  });
};

//hook for counting blogs
export const useGetBlogCount = () => {
  return useQuery({
    queryKey: ["GET_BLOG_COUNT"],
    queryFn: async () => await getBlogCount(),
  });
};
