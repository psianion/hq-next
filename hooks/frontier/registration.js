import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const useRegisterTeam = () => {
  const queryClient = useQueryClient();

  const registerTeam = async (id, data) => {
    try {
      const res = await axios.post(URL + "/frontier/create", {
        id: id,
        data: data,
      });
      console.log(data, id);
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

  return registerTeam;
};

export const useFetchTeam = () => {
  const fetchTeam = async (teamName) => {
    const res = await axios.get(URL + `/frontier/team?team=${teamName}`);
    return res.data;
  };

  return fetchTeam;
};

export const useTeamData = (id) => {
  const fetchTeamData = async () => {
    const res = await axios.get(URL + `/frontier/${id}`);
    return res.data;
  };

  const {
    data: frontierTeamData,
    isError,
    isLoading,
  } = useQuery("bfteam", fetchTeamData);

  return {
    frontierTeamData,
    isError,
    isLoading,
  };
};

export const useFrontierData = () => {
  const fetchFrontierData = async () => {
    const res = await axios.get(URL + "/frontier");
    return res.data;
  };

  const {
    data: frontierTeamsData,
    isError,
    isLoading,
  } = useQuery("bfteams", fetchFrontierData);

  return {
    frontierTeamsData,
    isError,
    isLoading,
  };
};
