import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import RegionHero from "../../../src/components/ToM/RegionHero";
import Footer from "../../../src/components/Footer";
import BackButton from "../../../src/components/BackButton";
import RegionGymList from "../../../src/components/ToM/RegionGymList";

function EUregion() {
  return (
    <Container>
      <Head>
        <title>Europe Region | PvP HQ</title>
      </Head>
      <RegionHero gymName={"Europe Region"} gymLocation={"TOWER OF MASTERY"} />
      <BackButton text={"Tower of Mastery"} path={"/tom/"} />
      <RegionGymList id={2} region={"eu"} />
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

export default EUregion;
