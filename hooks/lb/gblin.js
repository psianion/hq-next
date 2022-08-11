import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export const useGBLIndia = () => {
  const fetchGBLIndiaLB = async () => {
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

  const {
    data: gbllbindata,
    isError,
    isLoading,
  } = useQuery("gblin", fetchGBLIndiaLB);

  return {
    gbllbindata,
    isError,
    isLoading,
  };
};
