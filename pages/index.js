import styled from "styled-components";
import { motion } from "framer-motion";

import Hero from "../src/components/Home/Hero";
import LatestNews from "../src/components/Home/LatestNews";

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <LatestNews />
    </HomeContainer>
  );
}

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
