import styled from "styled-components";
import { motion } from "framer-motion";

import Heading from "../Heading";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faExternalLinkAlt,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const data = require("../../assets/data/TournamentData");


function Tournaments() {
  
  return (
    <>
      <Heading head={"TOURNAMENTS"} highhead={"FEATURED"} />
      <Container>
        {data.map((i) => (
          <ContentBox key={i.id}>
            <ImageBox>
              <img src={i.image} />
            </ImageBox>
            <InfoBox>
              <Name>{i.name}</Name>
              <FlexBox>
                <div>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {i.date}
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} /> {i.time}
                </div>
                <div>
                  <FontAwesomeIcon icon={faStopwatch} /> {i.duration}
                </div>
              </FlexBox>
              <h5></h5>
              <Button>{i.status}!</Button>
            </InfoBox>
          </ContentBox>
        ))}
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  width: 100rem;
  height: 24rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-bottom: 0rem;
  }
`;

const ContentBox = styled(motion.div)`
  border-radius: 0.5rem;
  height: fit-content;
  background-color: ${({ theme }) => theme.primary1};
  width: 19.25%;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  align-items: center;

  &:hover {
    border-bottom: ${({ theme }) => theme.highlight0} 0.3rem solid;
  }

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 1rem;
  }
`;

const ImageBox = styled(motion.div)`
  height: 16rem;
  width: calc(100% - 0.66rem);
  border-radius: 0.5rem;
  margin-top: 0.33rem;
  background-color: ${({ theme }) => theme.primary2};

  img {
    width: 100%;
    height: 16rem;
    border-radius: 0.5rem;
  }
`;

const InfoBox = styled(motion.div)`
  width: calc(100% - 0.66rem);
  margin-top: 0.33rem;
  padding-bottom: 0.5Irem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled(motion.div)`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 0.33rem;
  margin-bottom: 0.33rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => `${theme.secondary0}20`};
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    width: 85%;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const Name = styled(motion.h1)`
  color: ${({ theme }) => theme.secondary0};
  max-width: 96%;
  font-size: 1.3rem;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Org = styled(motion.h1)`
  color: ${({ theme }) => theme.secondary1};
  max-width: 96%;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.secondary0};
  background-color: ${({ theme }) => `${theme.primary2}`};
  width: 8rem;
  height: 2rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
  }

  @media (max-width: 768px) {
    width: 7rem;
    font-size: 0.8rem;
    background-color: ${({ theme }) => `${theme.highlight0}`};
    height: 2rem;
    color: white;
  }
`;

export default Tournaments;
