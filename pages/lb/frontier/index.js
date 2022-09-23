import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useBF } from "../../../hooks/lb/frontier";
import Image from "next/image";
import Loading from "../../../src/components/Loading";
import { useForm } from "react-hook-form";
import Link from "next/link";

function GBLLBIndia() {
  const { bflbdata, isError, isLoading } = useBF();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Heading>Battle Frontier S6</Heading>
      <Head>Group Stages Individual Leaderboard</Head>

      {bflbdata.map((player, index) => (
        <LBContainer
          key={index}
          background={`${
            process.env.NEXT_PUBLIC_API_URL
          }/images/frontier/${player.game.pokemongo.bf.s6.team.trim()}.png`}
        >
          <Rank>#{index + 1}</Rank>
          <p>●</p>
          <Avatar
            team={
              player.game.pokemongo.trainerTeam === "Valor"
                ? "#FF0000"
                : player.game.pokemongo.trainerTeam === "Mystic"
                ? "#0000FF"
                : player.game.pokemongo.trainerTeam === "Instinct"
                ? "#FFFF00"
                : "none"
            }
          >
            <Sprite>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/trainer/sprites/${player.sprites.activeAvatar}.png`}
                layout="fill"
              />
            </Sprite>
          </Avatar>
          <MMRSection2>
            <IGN>{player.game.pokemongo.ign}</IGN>
            <TeamScore>
              <Score>{player.game.pokemongo.bf.s6.groupWins}</Score>⁄
              {player.game.pokemongo.bf.s6.groupMatches}
            </TeamScore>
          </MMRSection2>
        </LBContainer>
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const LBContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-top: 0.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.1s ease-in-out;
  border-radius: 0.25rem;
  border-left: solid 1rem ${({ theme }) => theme.highlight0};

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: -10px;
    width: 60%;
    height: 100%;
    opacity: 0.25;
    z-index: -1;
    background-image: url(${({ background }) => background});
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:hover {
    background-color: ${({ theme }) => theme.highlight0};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 2rem;
    background-size: 2.5rem;
  }
`;

const Head = styled(motion.h1)`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary1};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Heading = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0rem;
  }
`;

const IGN = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0.25rem;
  }
`;

const Rank = styled(motion.div)`
  width: 3rem;
  margin-left: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0.25rem;
    width: 2rem;
  }
`;

const MMRSection2 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 26rem;
  @media (max-width: 768px) {
    width: 12rem;
  }
`;

const Score = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 500;
  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const TeamScore = styled(motion.div)`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-weight: 400;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const MMR2 = styled(motion.div)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 0.25rem;
  }
`;

const Avatar = styled(motion.div)`
  border: solid 0.1rem ${({ team }) => team};
  background-color: ${({ theme }) => theme.primary1};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Flag = styled(motion.div)`
  position: relative;
  width: 1.4rem;
  height: 1.05rem;
  transform: translateY(-1rem);

  @media (max-width: 768px) {
    margin-left: 0rem;
    width: 2rem;
    height: 1.5rem;
    transform: translateY(-1rem);
  }
`;

const Sprite = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default GBLLBIndia;
