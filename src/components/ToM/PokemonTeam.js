import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GymLeaderPokemon from "./GLPokemon";
import axios from "axios";

function PokemonTeam({ pokemon }) {
  const pokemonName = pokemon.split(",");
  const [monsImage, setMonsImage] = useState([]);

  const sendPokemonImage = async (name) => {
    if (name === "cherrim-sunny") {
      setMonsImage((monsImage) => [
        ...monsImage,
        "https://i.imgur.com/DrwGClJ.png",
      ]);
    } else {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => {
            setMonsImage((monsImage) => [
              ...monsImage,
              response.data.sprites.other["official-artwork"].front_default,
            ]);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setMonsImage([]);
    pokemonName.forEach((i) => {
      sendPokemonImage(i);
    });
  }, []);

  return (
    <>
      <GymLeaderPokemon leaderMonsImage={monsImage} />
    </>
  );
}

const Container = styled(motion.div)`
  width: 90rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Pokemon = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.primary1}80`};
  transition: all 0.2s ease-in-out;

  img {
    width: 150px;
    height: 150px;
  }

  & :hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export default PokemonTeam;
