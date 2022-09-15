import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const useGBL = () => {
  const fetchGBLLB = async () => {
    const res = await axios.get(URL + "/trainer", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    return res.data;
  };

  const { data: gbllbdata, isError, isLoading } = useQuery("gbl", fetchGBLLB);

  return {
    gbllbdata,
    isError,
    isLoading,
  };
};
