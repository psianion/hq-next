import { useState, useEffect } from "react";
import axios from "axios";

export const useSignIn = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  async function fetchData() {
    const url = `${process.env.PROXY_URL}/auth/login/success`;
    axios
      .get(url, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setIsAuth(true);
          setUser(response.data.user);
        } else {
          setIsAuth(false);
          return;
        }
      })
      .catch((e) => {
        setError(e);
      });
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
