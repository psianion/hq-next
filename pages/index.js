import styled from "styled-components";
import { motion } from "framer-motion";

import Hero from "../src/components/Home/Hero";
import LatestTournaments from "../src/components/Home/LatestTournaments";

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <LatestTournaments />
    </HomeContainer>
  );
}

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
