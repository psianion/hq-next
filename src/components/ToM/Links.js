import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const regionData = require("../../assets/data/RegionData");

function Links() {
  return (
    <>
      <Heading head={"TOWER OF MASTERY"} highhead={""} />
      <TextContainer>
        <h1>
          <Highlight>Tower of Mastery </Highlight>
          is a unique PvP format wherein a trainer tries to defeat{" "}
          <Highlight>Pokemon Gyms </Highlight>
          like the Main Series Pokemon Games and the Anime.
          <br />
          <br />
          Here, every Gym has a particular <Highlight>Dual Typing </Highlight>
          with a few bans! There are <Highlight>5 Regions </Highlight>across the
          world and every region has <Highlight>8 Gyms </Highlight>spread
          throughout. Battlers can select the region you want to battle and they
          can then challenge the Gyms there. While Gym Leaders can only use
          Pokemon of only either of those typings, Challengers can use anything
          other than the few Banned Pokemon. To know about the typings and bans,
          you can see the Gym Pages from the menu below. <br />
          <br />
          The challengers challenge the Gyms one by one and defeat them to get
          the badges, getting all the badges takes you to a higher league with
          the <Highlight>Elite Fours</Highlight>.
        </h1>
      </TextContainer>
      <Heading head={"NEAR YOU"} highhead={"LOCATE GYMS"} />
      <Regions>
        {regionData.map((region) => (
          <Link href={`/tom/${region.id}`} key={region.name}>
            <Region>{region.name}</Region>
          </Link>
        ))}
      </Regions>
      {/*<ImageContainer>
        <Image width="300px" height="240px" src="/logo/tomlogo.png" />
      </ImageContainer>*/}
    </>
  );
}

const Regions = styled(motion.div)`
  width: 90%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    height: 12rem;
    margin-top: 0rem;
  }
`;

const Region = styled(motion.div)`
  width: 18%;
  text-align: center;
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  border-radius: 0.2rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.highlight0};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondary1};
    background-color: ${({ theme }) => theme.primary2};
    border-right: 0.5rem solid ${({ theme }) => theme.highlight0};
  }

  @media (max-width: 768px) {
    width: 15rem;
    border-radius: 0.1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.highlight0};
    border-right: 0.3rem solid ${({ theme }) => theme.highlight0};
  }
`;

const ImageContainer = styled(motion.div)`
  width: 300px;
  opacity: 0.3;
  height: 240px;
  margin-top: 6rem;

  @media (max-width: 760px) {
    width: 150px;
    height: 120px;
  }
`;

const TextContainer = styled(motion.div)`
  width: 80rem;
  height: 22.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    // text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
    height: fit-content;

    h1 {
      font-size: 0.9rem;
    }
  }
`;

const Highlight = styled(motion.span)`
  color: ${({ theme }) => theme.highlight0};
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Links;
