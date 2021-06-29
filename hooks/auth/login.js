import { useState, useEffect } from "react";
import axios from "axios";

export const useSignIn = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  async function fetchData() {
    let response = await axios.get(
      `${process.env.PROXY_URL}` + "/auth/login/success",
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    try {
      let data = await response.data;
      setIsAuth(true);
      setUser(data.user);
    } catch (error) {
      setIsAuth(false);
      setError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isAuth,
    setIsAuth,
    user,
    error,
  };
};
