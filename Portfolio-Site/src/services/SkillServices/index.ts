"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { toast } from "sonner";

//server action for retrieving all skills
export const getAllSkills = async () => {
  try {
    const res = await axiosInstance.get("/skills/getAllSkills");

    return res.data;
  } catch (error) {
    toast.error("Failed to fetch data: " + error);
    throw new Error("Failed to fetch data");
  }
};
