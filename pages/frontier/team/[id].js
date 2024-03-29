import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../../src/components/Footer";
import axios from "axios";
import PublicTeamPage from "../../../src/components/Frontier/PublicTeamPage";
const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await axios.get(`${URL}/frontier/team?id=${id}`);
  const data = await res.data;

  return { props: { team: data } };
}

export default function FrontierTeam({ team }) {
  return (
    <FrontierContainer>
      <Head>
        <title>{team.teamData.team} | Battle Frontier</title>
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
