import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const data = require("../../assets/data/EventsData");

function Links() {
  const [isActive, setIsActive] = useState(1);
  const active = data.find(({ id }) => id === isActive);

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
    </>
  );
}

const TextContainer = styled(motion.div)`
  width: 80rem;
  height: 22.5rem;
  margin-bottom: 2rem;
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
