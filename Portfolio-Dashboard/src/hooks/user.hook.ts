import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { changeUserPassword } from "../services/UserServices";

// export const useGetLoggedInUserProfile = () => {
//   return useQuery({
//     queryKey: ["GET_USER_PROFILE"],
//     queryFn: async () => await getLoggedInUserProfile(),
//   });
// };

// export const useUpdateUserProfile = () => {
//   return useMutation<any, Error, FormData>({
//     mutationKey: ["UPDATE_USER_PROFILE"],
//     mutationFn: async (userData) => await updateUserProfile(userData),
//     onSuccess: () => {
//       toast.success("Profile updated successfully");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });
// };

export const useChangePassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CHANGE_PASSWORD"],
    mutationFn: async (passwordData) => await changeUserPassword(passwordData),
    onSuccess: () => {
      toast.success("Password updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
