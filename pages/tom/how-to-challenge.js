import styled from "styled-components";
import Head from "next/head";
import ToMHero from "../../src/components/ToM/ToMHero";
import Footer from "../../src/components/Footer";
import { motion } from "framer-motion";

export default function TOMHome() {
  return (
    <Container>
      <Head>
        <title>Europe Region | PvP HQ</title>
      </Head>
      <ToMHero
        firstLine="HOW TO CHALLENGE IN THE"
        secondLine="Tower of Mastery"
        thirdLine="Step by Step"
      />
      <Footer />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
