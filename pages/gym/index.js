import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import Hero from "../../src/components/ToM/Hero";
import Links from "../../src/components/ToM/Content";

export default function TOMHome() {
  return (
    <ToMContainer>
      <Head>
        <title>Tower of Mastery | PvP HQ</title>
      </Head>
      <Hero />
      <Links />
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
