import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const useUser = () => {
  const fetchUser = async () => {
    if (window.localStorage.getItem("server-cache")) {
      const res = await axios.get(
        URL + `/profile?id=${window.localStorage.getItem("server-cache")}`
      );

      return res.data;
    } else {
      const res = await axios.get(URL + "/profile", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      return res.data;
    }
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
      console.log(data);
      const res = await axios.post(URL + "/profile/setup", {
        id: id,
        data: data,
      });
      queryClient.invalidateQueries("user");
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

export const useSetGBL = () => {
  const queryClient = useQueryClient();

  const setGBL = async (id, data) => {
    try {
      const res = await axios.post(URL + "/profile/set/gbl", {
        id: id,
        mmr: data.rating,
      });
      queryClient.invalidateQueries("user");
      queryClient.invalidateQueries("gblin");
      return { isSuccess: true };
    } catch (e) {
      console.log(e);
      return {
        isSuccess: false,
        errorMessage: "Something went wrong. Please try again!",
      };
    }
  };

  return setGBL;
};
