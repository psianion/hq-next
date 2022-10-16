import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInTop,
  stagger2,
  stagger3,
} from "../../animations/animations";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFetchTeam } from "../../../hooks/frontier/registration";
import { useUser } from "../../../hooks/user/user";
import Loading from "../Loading";
import { useForm } from "react-hook-form";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInvite } from "../../../hooks/frontier/invite";
import BackButton from "../BackButton";

function KnockoutsPage({ data }) {
  return (
    <>
      <PlayerSection>
        <Heading>Battle Frontier | {data.qf}</Heading>
        <BackButton text={"Frontier Home"} path={"/frontier"} />
        {data.data.map((p) => (
          <PlayerBox key={p.game.pokemongo.ign}>
            <Player>
              <Sprite
                team={
                  p.game.pokemongo.trainerTeam === "Valor"
                    ? "#FF0000"
                    : p.game.pokemongo.trainerTeam === "Mystic"
                    ? "#0000FF"
                    : p.game.pokemongo.trainerTeam === "Instinct"
                    ? "#FFFF00"
                    : "none"
                }
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/trainer/sprites/${p.sprites.activeAvatar}.png`}
                  layout="fill"
                />
              </Sprite>
              <TextBox>
                <IGN>{p.game.pokemongo.ign}</IGN>
                <Team>
                  {p.game.pokemongo.bf.s6.team}{" "}
                  <b>
                    {p.game.pokemongo.bf.s6.knockoutWins}/
                    {p.game.pokemongo.bf.s6.knockoutMatches}
                  </b>
                </Team>
              </TextBox>
            </Player>
            <PokemonsBox>
              {p.game.pokemongo.bf.s6.knockoutPokemon.map((pokemon) => (
                <PokemonBox key={pokemon._id}>
                  <PokemonSprite>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${pokemon.sprite}`}
                      layout="fill"
                    />
                  </PokemonSprite>
                  <ShadowBox>
                    {pokemon.isShadow && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/icons/shadow.png`}
                        width="30px"
                        height="30px"
                      />
                    )}
                  </ShadowBox>
                  <PokemonName>{pokemon.name}</PokemonName>
                </PokemonBox>
              ))}
            </PokemonsBox>
          </PlayerBox>
        ))}
      </PlayerSection>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: -1;
    background-image: url(${({ background }) => background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 1024px) {
    padding: 2rem 0rem;
  }
`;

const Player = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5rem;
  width: 100%;
`;

const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const Team = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 400;
  font-size: 0.9rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: 0rem 0.25rem;
    font-size: 0.75rem;
  }
`;

const PlayerSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;

const ShadowBox = styled(motion.div)`
  position: absolute;
  transform: translateX(-1rem) translateY(1rem);
`;

const PokemonsBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 45rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

const PokemonBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonSprite = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 6rem;
  height: 6rem;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0rem;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin: 0.5rem 1rem;
  }
`;

const ScoreSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

const PokemonName = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-transform: uppercase;
  padding: 0rem 0.5rem;
  background-color: ${({ theme }) => `${theme.primary1}`};

  @media (max-width: 768px) {
    padding: 0rem 0.25rem;
    font-size: 0.75rem;
    margin-top: 0rem;
  }
`;

const Text = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const SmallImageSection = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const ImageSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20rem;
  height: 20rem;
  margin-top: 0;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const Heading = styled(motion.h1)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.75rem;
  color: ${({ theme }) => `${theme.secondary0}`};
  letter-spacing: 0.02rem;
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;

const Sprite = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.primary1};
  border: 2px solid ${({ team }) => `${team}`};

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Avatar = styled(motion.div)`
  border: solid 0.25rem ${({ team }) => team};
  background-color: ${({ theme }) => theme.primary1};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const PlayerBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  width: 50rem;
  background-color: ${({ theme }) => `${theme.primary2}20`};

  @media (max-width: 768px) {
    padding: 0.75rem;
    width: 90%;
  }
`;

const IGN = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 500;
  font-size: 1.5rem;
`;

export default KnockoutsPage;
