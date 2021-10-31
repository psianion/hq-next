import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import GymHero from "../../../src/components/ToM/GymHero";
import Footer from "../../../src/components/Footer";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import BackButton from "../../../src/components/BackButton";
import EUE4 from "../../../src/assets/data/EUE4";
import GymLeaderPokemon from "../../../src/components/ToM/GLPokemon";
import PokemonTeam from "../../../src/components/ToM/PokemonTeam";

function EliteFour() {
  return (
    <Container>
      <Head>
        <title>EU Elite Four | PvP HQ</title>
      </Head>
      <GymHero gymName={"Elite Four"} gymLocation={"Europe Region"} />
      <BackButton text={"All EU Gyms"} path={"/tom/eu"} />
      <TextContainer>
        <h1>
          The <Highlight>Elite Four </Highlight>defending Europe will be :
        </h1>
      </TextContainer>
      {EUE4.map((E4) => (
        <Region key={E4.id}>
          <h4>{E4.name}</h4>
          <h5>
            {E4.typing1} and {E4.typing2}
          </h5>
          <PokemonTeam pokemon={E4.pokemon} />
          <LeaderCode>
            <div>{E4.trainerCode}</div>
            <FontAwesomeIcon
              style={{ marginLeft: "0.5rem", fontSize: "1rem" }}
              icon={faCopy}
            />
          </LeaderCode>
        </Region>
      ))}
      <Footer />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeaderCode = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => `${theme.primary0}`};
  padding: 0rem 1rem;
  margin-bottom: 0.2rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.secondary1};

  &:hover {
    color: ${({ theme }) => theme.highlight0};
  }
`;

const Region = styled(motion.div)`
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => `${theme.primary1}80`};
  color: ${({ theme }) => theme.highlight0};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    width: 20rem;
    border-radius: 0.1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.highlight0};
    border-right: 0.3rem solid ${({ theme }) => theme.highlight0};
  }
`;

const TextContainer = styled(motion.div)`
  width: 80rem;
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

export default EliteFour;
