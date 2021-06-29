import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useSignIn } from "../hooks/auth/login";

export default function Login() {
  const { isAuth, user, setIsAuth } = useSignIn();
  const url = process.env.PROXY_URL;
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
        {isAuth ? (
          <h1>Hello, {user.discordName}</h1>
        ) : (
          <h1>Authorize yourself to join HQ</h1>
        )}
        <p>Squirtle welcomes you to the squad!</p>
        {isAuth == false ? (
          <button
            onClick={() => {
              window.open(url + "/auth", "_self");
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
              window.open(url + "/auth/logout", "_self");
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
