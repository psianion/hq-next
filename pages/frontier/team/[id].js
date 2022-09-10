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
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import PublicTeamPage from "../../../src/components/Frontier/PublicTeamPage";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const getStaticPaths = async () => {
  const res = await axios.get(`${URL}/frontier`);
  const data = await res.json();

  const paths = data.map((team) => {
    return { params: { id: team.logo.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`${URL}/frontier/` + id);
  const data = await res.json();

  return { props: { team: data } };
};

export default function FrontierTeam({ team }) {
  return (
    <FrontierContainer>
      <Head>
        <title>HQ | Battle Frontier</title>
      </Head>
      <PublicTeamPage teamData={team} />
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
