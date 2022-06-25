import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

export const useUser = () => {
  const fetchUser = async () => {
    const res = await axios.get("http://localhost:3001/profile", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    return res.data;
  };

  const { data: data, isError, isLoading } = useQuery("user", fetchUser);

  return {
    data,
    isError,
    isLoading,
  };
};

export const useSetupProfile = () => {
  const queryClient = useQueryClient();

  const setupProfile = async (id, data) => {
    try {
      const res = await axios.post(`http://localhost:3001/profile/setup`, {
        id: id,
        data: data,
      });
      queryClient.invalidateQueries("user");
      console.log(res);
      return { isSuccess: true };
    } catch (e) {
      console.log(e);
      return {
        isSuccess: false,
        errorMessage: "Something went wrong. Please try again!",
      };
    }
  };

  return setupProfile;
};
