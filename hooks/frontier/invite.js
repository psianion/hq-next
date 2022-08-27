import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const useInvite = () => {
  const queryClient = useQueryClient();

  const sendInvite = async (teamName, data) => {
    try {
      const res = await axios.post(URL + "/frontier/invite", {
        teamName: teamName,
        inviteeName: data,
      });

      queryClient.invalidateQueries("user");
      return { isSuccess: res.data.success, errorMessage: res.data.message };
    } catch (e) {
      console.log(e);
      return { isSuccess: res.data.success, errorMessage: res.data.message };
    }
  };

  return sendInvite;
};

export const useAcceptInvite = () => {
  const queryClient = useQueryClient();

  const acceptInvite = async (id, data) => {
    try {
      const res = await axios.post(URL + "/frontier/invite/accept", {
        id: id,
        data: data,
      });

      queryClient.invalidateQueries("user");
      return { isSuccess: res.data.success, errorMessage: res.data.message };
    } catch (e) {
      console.log(e);
      return { isSuccess: res.data.success, errorMessage: res.data.message };
    }
  };

  return acceptInvite;
};
