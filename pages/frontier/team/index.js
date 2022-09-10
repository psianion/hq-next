import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../../src/components/Footer";
import TeamHero from "../../../src/components/Frontier/TeamHero";

import { useUser } from "../../../hooks/user/user";
import { useState, useEffect } from "react";
import Loading from "../../../src/components/Loading";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useGetTeam } from "../../../hooks/frontier/registration";
import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;

export default function FrontierHome() {
  const router = useRouter();
  const { data, isError, isLoading } = useUser();
  const [stage, setStage] = useState("");
  const [frontierTeam, setFrontierTeam] = useState({ team: "Sex" });

  useEffect(() => {
    if (!isLoading && !data?.data) {
      router.push("/login");
    } else if (!isLoading && !data?.data?.game.pokemongo.ign) {
      router.push("/profile/setup");
    } else if (!isLoading && !data.data.game.pokemongo.bf.s6.team) {
      router.push("/frontier");
    } else if (!isLoading && data.data.game.pokemongo.bf.s6.team) {
      fetchTeam(data.data.game.pokemongo.bf.s6.team);
    }
  }, [isLoading]);

  const fetchTeam = async (data) => {
    const res = await axios.get(URL + `/frontier/team?team=${data}`);
    setFrontierTeam(res.data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FrontierContainer>
      <Head>
        <title>{data.data.game.pokemongo.bf.s6.team} | Battle Frontier</title>
      </Head>
      <TeamHero />
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
