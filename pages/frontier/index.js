import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import Hero from "../../src/components/Frontier/Hero";
import Roles from "../../src/components/Frontier/Roles";

import { useUser } from "../../hooks/user/user";
import { useState, useEffect } from "react";
import Loading from "../../src/components/Loading";
import Register from "../../src/components/Frontier/Register";
import { useForm } from "react-hook-form";
import Teams from "../../src/components/Frontier/TeamsRegistered";

export default function FrontierHome() {
  const { data, isError, isLoading } = useUser();
  const [stage, setStage] = useState("NOT-LOGGED-IN");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !data?.data) {
      return;
    } else if (!isLoading && data.data.game.pokemongo.ign) {
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
    <FrontierContainer>
      <Head>
        <title>Battle Frontier | PvP HQ</title>
      </Head>
      <Hero />
      <Register stage={stage} info={data} />
      <Teams />
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
