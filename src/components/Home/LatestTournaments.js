import styled from "styled-components";
import { motion } from "framer-motion";

import Heading from "../Heading";

function LatestTournaments() {
  return (
    <>
      <Heading head={"TOURNAMENTS"} highhead={"LATEST"} />
      <TournamentsSection>
        <Section1></Section1>
        <Section2></Section2>
      </TournamentsSection>
    </>
  );
}

const TournamentsSection = styled(motion.div)`
  width: 80rem;
  height: 40rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
  }
`;

const Section1 = styled(motion.div)`
  width: 49%;
  background-color: aliceblue;
`;

const Section2 = styled(motion.div)`
  width: 49%;
  background-color: #437eb3;
`;

export default LatestTournaments;
