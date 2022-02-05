import styled from "styled-components";
import { motion } from "framer-motion";

import Hero from "../src/components/Home/Hero";
import Events from "../src/components/Home/Events";
import Tournaments from "../src/components/Home/Tournaments";

import Footer from "../src/components/Footer";

import Head from "next/head";
import Formats from "../src/components/Home/Formats";
import Teams from "../src/components/Home/Teams";

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | PvP HQ</title>
        <meta
          name="description"
          content="India's largest Pokémon PvP community"
        />
        <meta
          name="keywords"
          content="Pokémon, Pokemon, Pokémon GO, Pokemon GO, Pokémon GO PvP, Pokémon GO India, Pokémon Unite, Pokémon Unite India, Pokémon Esports"
        />
      </Head>
      <Hero />
      <Formats />
      <Teams />
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
