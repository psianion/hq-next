import styled from "styled-components";
import { motion } from "framer-motion";

import Hero from "../src/components/Home/Hero";
import Events from "../src/components/Home/Events";
import Tournaments from "../src/components/Home/Tournaments";

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Tournaments />
      <Events />
    </HomeContainer>
  );
}

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
