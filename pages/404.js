import styled from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

export default function FourOFour() {
  const router = useRouter();
  return (
    <Container>
      <Head>
        <title>404 | PvP HQ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TextDiv>404</TextDiv>
      <ImageDiv></ImageDiv>
      <ContentDiv>
        <h1>Look like you're lost...</h1>
        <p>Gengar hid the page you're looking for!</p>
        <button onClick={() => router.back()}>Go Back</button>
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

const TextDiv = styled(motion.div)`
  font-size: 7rem;
  font-family: "Arvo", "Open Sans", serif;
  color: ${({ theme }) => theme.secondary1};

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ContentDiv = styled(motion.div)`
  font-family: "Arvo", "Open Sans", serif;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.secondary1};
  align-items: center;

  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  button {
    width: 9rem;
    height: 3rem;
    font-weight: 600;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.2rem;
    transition: all 0.2s ease-in-out;
    font-family: "Arvo", "Open Sans", serif;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary1};
    background-color: ${({ theme }) => theme.highlight0};
    margin-top: 1rem;
  }

  button:hover {
    background-color: #bc4236;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.8rem;
    }
    button {
      width: 6rem;
      height: 2rem;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;
const ImageDiv = styled(motion.div)`
  width: 20rem;
  height: 18rem;
  background: url("/gengar.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 15rem;
    height: 12rem;
  }
`;
