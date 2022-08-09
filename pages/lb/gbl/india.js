import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useGBLIndia } from "../../../hooks/lb/gblin";
import Image from "next/image";
import Loading from "../../../src/components/Loading";

function GBLLBIndia() {
  const { data, isError, isLoading } = useGBLIndia();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {data.map((player, index) => (
        <LBContainer
          background={`${process.env.NEXT_PUBLIC_API_URL}/icons/gbl/${player.game.pokemongo.gbl.s11.rank}.png`}
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
          <MMRSection>
            <IGN>{player.game.pokemongo.ign}</IGN>
            <MMR>{player.game.pokemongo.gbl.s11.currentMMR}</MMR>
          </MMRSection>
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
  margin-top: 3.5rem;

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
  background-image: url(${({ background }) => background});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 4rem;
  transition: all 0.1s ease-in-out;
  border-radius: 0.25rem;
  border-left: solid 1rem ${({ theme }) => theme.highlight0};

  &:hover {
    background-color: ${({ theme }) => theme.highlight0};
    cursor: pointer;
  }
`;

const IGN = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0rem;
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
    font-size: 1.5rem;
    margin-left: 0rem;
  }
`;

const MMRSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22rem;
`;

const MMR = styled(motion.div)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0rem;
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
    width: 7rem;
    border: solid 0.3rem ${({ team }) => team};
    height: 7rem;
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
    width: 5rem;
    height: 5rem;
  }
`;

export default GBLLBIndia;
