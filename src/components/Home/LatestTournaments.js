import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import Heading from "../Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const data = require("../../assets/data/LatestTournamentData");

function LatestTournaments({ theme }) {
  const [isActive, setIsActive] = useState(1);
  const active = data.find(({ id }) => id === isActive);

  return (
    <>
      <Heading head={"TOURNAMENTS"} highhead={"LATEST"} />
      <TournamentsSection>
        <Section1>
          {data.map((i) => (
            <Box
              key={i.id}
              style={i.id == isActive ? { backgroundColor: "#9147FF" } : {}}
              onClick={() => {
                setIsActive(i.id);
              }}
            >
              <ImageBox></ImageBox>
              <ContentBox>
                <h1>{i.name}</h1>
                <h5>{i.snippet}</h5>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {i.time}
                </p>
              </ContentBox>
            </Box>
          ))}
        </Section1>
        <Section2>
          <h1>{active.name}</h1>
        </Section2>
      </TournamentsSection>
    </>
  );
}

const TournamentsSection = styled(motion.div)`
  width: 80rem;
  height: 30rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
  }
`;

const Section1 = styled(motion.div)`
  border-radius: 0.5rem;
  width: 50%;
  background-color: ${({ theme }) => theme.primary1};
  height: 30rem;
  overflow-y: auto;
`;

const Box = styled(motion.div)`
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.secondary0};
  border-bottom: 1px solid ${({ theme }) => theme.primary2};
  height: 6rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.primary2};
  }
`;

const ImageBox = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.primary2};
  margin: 0.5rem;
  border-radius: 0.5rem;
`;

const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary0};
  }

  h5 {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: 0.2px;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.secondary1};
  }

  p {
    font-size: 0.9rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.secondary1};
    margin-top: 0.8rem;
  }
`;

const Section2 = styled(motion.div)`
  border-radius: 0.5rem;
  width: 50%;
  background-color: ${({ theme }) => theme.primary1};
`;

export default LatestTournaments;
