import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useUser } from "../hooks/user/user";
import { useState, useEffect } from "react";
import Loading from "../src/components/Loading";

export default function Login() {
  const { data, isError, isLoading } = useUser();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLoading]);

  const LOGurl = process.env.NEXT_PUBLIC_API_URL;

  if (loading) {
    return <Loading />;
  }

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
        {data?.data?.discordName ? (
          <h1>Hello, {data?.data?.discordName}</h1>
        ) : (
          <h1>Authorize yourself to join HQ</h1>
        )}
        <p>Squirtle welcomes you to the squad!</p>
        {!isLoading && !data.data ? (
          <button
            onClick={() => {
              window.open(LOGurl + "/auth/discord", "_self");
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
              window.open(LOGurl + "/auth/logout", "_self");
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
