import styled from "styled-components";
import { motion } from "framer-motion";

import Hero from "../src/components/Home/Hero";
import Events from "../src/components/Home/Events";
import Tournaments from "../src/components/Home/Tournaments";

import Footer from "../src/components/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | PvP HQ</title>
      </Head>
      <Hero />
      <Tournaments />
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
