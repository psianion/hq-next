import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../../src/components/Footer";
import axios from "axios";
import GroupPage from "../../../src/components/Frontier/GroupPage";
const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServerSideProps(context) {
  const { params } = context;
  const { group } = params;
  const res = await axios.get(`${URL}/frontier/group?group=${group}`);
  const data = await res.data;

  return { props: { groupData: data } };
}

export default function FrontierTeam({ groupData }) {
  return (
    <FrontierContainer>
      <Head>
        <title>{groupData.group} | Battle Frontier</title>
      </Head>
      <GroupPage groupData={groupData} />
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
