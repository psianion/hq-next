import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";

function Loading() {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Content>
        <ImageDiv />
        <Text>Slowpoke..Loading</Text>
      </Content>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    height: 95vh;
    margin-top: 1rem;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary0};
  border-radius: 0.5rem;
  width: 90rem;
  height: 50rem;

  @media (max-width: 768px) {
    width: 95%;
    height: 98%;
    margin-top: 3rem;
  }
`;

const ImageDiv = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background: url("/gif/slowpoke.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 12rem;
    height: 12rem;
  }
`;

const Text = styled.div`
  font-family: "Arvo", serif;
  color: ${({ theme }) => theme.secondary1};
  font-size: 2rem;
  margin-top: 0.5rem;
`;

export default Loading;
