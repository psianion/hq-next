import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import RegionHero from "../../../src/components/ToM/RegionHero";
import Footer from "../../../src/components/Footer";
import RegionGymList from "../../../src/components/ToM/RegionGymList";
import BackButton from "../../../src/components/BackButton";

function NAregion() {
  return (
    <Container>
      <Head>
        <title>North America Region | PvP HQ</title>
      </Head>
      <RegionHero
        gymName={"North America Region"}
        gymLocation={"TOWER OF MASTERY"}
      />
      <BackButton text={"Tower of Mastery"} path={"/tom/"} />
      <RegionGymList id={0} region={"na"} />
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

export default NAregion;
