import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../../../src/components/Footer";
import axios from "axios";
import KnockoutsPage from "../../../../src/components/Frontier/KnockoutsPage";
const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServerSideProps(context) {
  const { params } = context;
  const { qf } = params;
  const res = await axios.get(`${URL}/frontier/qf?qf=${qf}`);
  const data = await res.data;

  return { props: { qfData: data } };
}

export default function FrontierTeam({ qfData }) {
  return (
    <FrontierContainer>
      <Head>
        <title>{qfData.qf} | Battle Frontier</title>
      </Head>
      <KnockoutsPage data={qfData} />
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
