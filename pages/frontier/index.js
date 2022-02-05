import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import Hero from "../../src/components/Frontier/Hero";
import Roles from "../../src/components/Frontier/Roles";

export default function FrontierHome() {
  return (
    <FrontierContainer>
      <Head>
        <title>Battle Frontier | PvP HQ</title>
      </Head>
      <Hero />
      <Roles />
      <Footer />
    </FrontierContainer>
  );
}

const FrontierContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
