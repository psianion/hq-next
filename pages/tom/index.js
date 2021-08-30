import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import Hero from "../../src/components/ToM/Hero";
import Links from "../../src/components/ToM/Links";
import GymNews from "../../src/components/ToM/GymNews";

export default function TOMHome() {
  return (
    <ToMContainer>
      <Head>
        <title>Tower of Mastery | PvP HQ</title>
      </Head>
      <Hero />
      <Links />
      <GymNews />
      <Footer />
    </ToMContainer>
  );
}

const ToMContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
