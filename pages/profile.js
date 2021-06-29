import styled from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSignIn } from "../hooks/auth/login";

export default function Profile() {
  const { isAuth, user } = useSignIn();

  const router = useRouter();
  return (
    <Container>
      <Head>
        <title>Profile | PvP HQ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Content>
        <Cover></Cover>
        <FlexBox>
          <Avatar></Avatar>
          <IGN>{user.discordName}</IGN>
          <Role>{user.role === "USER" ? "Trainer" : "HQ Staff"}</Role>
        </FlexBox>
      </Content>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary0};
  border: solid 2px ${({ theme }) => theme.primary1};
  border-radius: 0.5rem;
  width: 90rem;
  height: 50rem;
`;

const Cover = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary1};
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  height: 10rem;
`;

const FlexBox = styled(motion.div)`
  display: flex;
  transform: translateY(-6rem);
  margin-left: 2rem;
  align-items: center;
`;

const Avatar = styled(motion.div)`
  border: solid 0.5rem ${({ theme }) => theme.primary0};
  background-color: ${({ theme }) => theme.primary1};
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

const IGN = styled(motion.h1)`
  margin-left: 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  transform: translateY(-1.5rem);
`;

const Role = styled(motion.p)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.primary2};
  font-weight: 400;
  transform: translateY(-1rem);
`;
