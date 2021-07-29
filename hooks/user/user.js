import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const useUser = () => {
  const id = typeof window !== "undefined" ? localStorage.getItem("me") : null;

  const meQuery = async () => {
    const some = await axios.get(`/user/${id}`);
    return some.data.data;
  };

  const { data: data, isLoading, isError } = useQuery("me", meQuery);

  return {
    me: data || [],
    isLoading,
    isError,
  };
};

export const useSetupProfile = () => {
  const queryClient = useQueryClient();
  const id = typeof window !== "undefined" ? localStorage.getItem("me") : null;

  const setupProfile = async (data) => {
    try {
      await axios.post(`/user/setup`, {
        id: id,
        data: data,
      });
      queryClient.invalidateQueries("me");
      return { isSuccess: true };
    } catch (e) {
      return {
        isSuccess: false,
        errorMessage:
          e.response?.data?.error || "Something went wrong. Please try again!",
      };
    }
  };

  return setupProfile;
};
