import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useSignIn } from "../hooks/auth/login";

export default function Login() {
  // const { isLoading, userInfo, discordLogin } = useSignIn();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  async function fetchData() {
    let response = await axios.get("http://localhost:3001/auth/login/success", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    let user = await response.data;
    console.log(user);
  }

  useEffect(() => {
    fetchData();
    {
      /*axios
      .get("http://localhost:3001/auth/login/success", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        console.log(responseJson);
        isAuth(true);
        setUser(responseJson.user);
      })
      .catch((error) => {
        setError(error);
      });*/
    }
  }, []);

  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ImageDiv></ImageDiv>
      <ContentDiv>
        {!isAuth ? (
          <h1>Authorize yourself to join HQ</h1>
        ) : (
          <h1>AuthorizeD yourself to join HQ</h1>
        )}
        <p>Squirtle welcomes you to the squad!</p>
        {!isAuth ? (
          <button
            onClick={() => {
              window.open("http://localhost:3001/auth", "_self");
            }}
          >
            Login thorugh Discord{" "}
            <FontAwesomeIcon
              icon={faDiscord}
              style={{ marginLeft: "0.5rem" }}
            />
          </button>
        ) : (
          <button
            onClick={() => {
              window.open("http://localhost:3001/auth/logout", "_self");
              setIsAuth(false);
            }}
          >
            Logout
          </button>
        )}
      </ContentDiv>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary0};
  height: 100vh;
`;

const ContentDiv = styled(motion.div)`
  font-family: "Arvo", "Open Sans", serif;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.secondary1};
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 2rem;
  }
  button {
    width: 26rem;
    height: 3.5rem;
    font-size: 1.5rem;
    border: none;
    transition: all 0.1s ease-in-out;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #eee;
    background-color: #6985d9;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #5e77c2;
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 0.5rem;
      margin-bottom: 0rem;
      font-size: 1.1rem;
    }
    p {
      font-size: 1.2rem;
    }
    button {
      width: 18rem;
      height: 2.5rem;
      font-size: 1rem;
    }
  }
`;
const ImageDiv = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background: url("/gif/squirtle.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 12rem;
    height: 12rem;
  }
`;
