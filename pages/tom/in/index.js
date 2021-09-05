import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import RegionHero from "../../../src/components/ToM/RegionHero";
import Footer from "../../../src/components/Footer";
import RegionGymList from "../../../src/components/ToM/RegionGymList";
import BackButton from "../../../src/components/BackButton";

function INregion() {
  return (
    <Container>
      <Head>
        <title>India Region | PvP HQ</title>
      </Head>
      <RegionHero gymName={"India Region"} gymLocation={"TOWER OF MASTERY"} />
      <BackButton text={"Tower of Mastery"} path={"/tom/"} />
      <RegionGymList id={4} region={"in"} />
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

export default INregion;
