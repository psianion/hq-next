import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const useBF = () => {
  const fetchBFData = async () => {
    const res = await axios.get(URL + "/trainer/frontier", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    return res.data;
  };

  const { data: bflbdata, isError, isLoading } = useQuery("bf", fetchBFData);

  return {
    bflbdata,
    isError,
    isLoading,
  };
};
