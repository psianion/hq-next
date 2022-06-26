import styled from "styled-components";
import { motion } from "framer-motion";

import Hero from "../src/components/Home/Hero";
import Events from "../src/components/Home/Events";
import Tournaments from "../src/components/Home/Tournaments";

import Footer from "../src/components/Footer";

import Head from "next/head";
import Formats from "../src/components/Home/Formats";
import Teams from "../src/components/Home/Teams";

import { useUser } from "../hooks/user/user";
import { useState, useEffect } from "react";
import Loading from "../src/components/Loading";
import Profile from "../src/components/Home/Profile";

export default function Home() {
  const { data, isError, isLoading } = useUser();
  const [stage, setStage] = useState("NOT-LOGGED-IN");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !data?.data) {
      return;
    } else if (!isLoading && !data?.data?.ign) {
      setStage("PROFILE-NOT-SET");
    } else if (!isLoading && data.data.ign) {
      setStage("PROFILE-SET");
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [isLoading]);

  if (loading) {
    return <Loading />;
  }

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
      <Hero stage={stage} />
      <Profile stage={stage} data={data} />
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
