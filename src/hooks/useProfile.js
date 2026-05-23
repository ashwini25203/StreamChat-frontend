// hooks/useProfile.js

import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../lib/user";

const useProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });

  return {
    profile: data?.user,
    isLoading,
    error,
  };
};

export default useProfile;