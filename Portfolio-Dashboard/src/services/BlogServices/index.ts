"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { toast } from "sonner";

//server action for retrieving all blogs
export const getAllBlogs = async (
  searchTerm: string,
  sort: string,
  page: number,
  limit: number
) => {
  try {
    const params = new URLSearchParams();

    if (searchTerm) {
      params.append("searchTerm", searchTerm);
    }
    if (sort) {
      params.append("sort", sort);
    }
    if (page) {
      params.append("page", page.toString());
    }
    if (limit) {
      params.append("limit", limit.toString());
    }

    const res = await axiosInstance.get(`/blogs/getAllBlogs?${params}`);

    return res.data;
  } catch (error) {
    toast.error("Failed to fetch data: " + error);
    throw new Error("Failed to fetch data");
  }
};

//server action for counting blogs
export const getBlogCount = async () => {
  try {
    const res = await axiosInstance.get("/blogs/count-blogs");

    return res.data;
  } catch (error) {
    toast.error("Failed to fetch data: " + error);
    throw new Error("Failed to fetch data");
  }
};
