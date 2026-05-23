import { axiosInstance } from "./axios";

export const getMyProfile = async () => {
  const res = await axiosInstance.get("/users/me");
  return res.data;
};