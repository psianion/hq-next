import styled from "styled-components";
import { motion } from "framer-motion";
import CliffhangerPokemon from "../../src/assets/data/FrontierS6/pointsData";
import Image from "next/image";
import { useEffect, useState } from "react";

function Cliffhanger() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [points, setPoints] = useState(0);

  const onSelect = (pokemon) => {
    if (selectedPokemon.length > 5) {
      return;
    } else {
      setSelectedPokemon((selectedPokemon) => [
        ...selectedPokemon,
        {
          pokemonName: pokemon.pokemonName,
          pokemonSprite: pokemon.pokemonSprite,
          points: pokemon.points,
        },
      ]);
      setPoints(points + pokemon.points);
    }
  };

  const onDeSelect = (pokemon) => {
    setSelectedPokemon((selectedPokemon) =>
      selectedPokemon.filter((mon) => mon.pokemonName !== pokemon.pokemonName)
    );
    setPoints(points - pokemon.points);
  };

  return (
    <Box>
      <SubmitBox>
        <NewHeading>Pokémon Points Calculator</NewHeading>
        <Text>
          Click on the Pokémon below to add them to calculator, click on them
          again to remove.
        </Text>
        <Selected>
          {selectedPokemon.map((p) => (
            <PokemonSpriteFour
              key={p.pokemonName}
              onClick={() => {
                onDeSelect(p);
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
                layout="fill"
              />
            </PokemonSpriteFour>
          ))}
        </Selected>
        <NewHeader>{points} Points</NewHeader>
      </SubmitBox>
      <Heading>Cliffhangger Meta Points List</Heading>
      <Header>8 Points Pokémon</Header>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 8;
        }).map((p) => (
          <PokemonSpriteEight
            key={p.pokemonName}
            onClick={() => {
              const found = selectedPokemon.some(
                (el) => el.pokemonName === p.pokemonName
              );
              if (found) {
                onDeSelect(p);
              } else {
                onSelect(p);
              }
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
          </PokemonSpriteEight>
        ))}
      </Container>
      <Header>4 Points Pokémon</Header>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 4;
        }).map((p) => (
          <PokemonSpriteFour
            key={p.pokemonName}
            onClick={() => {
              const found = selectedPokemon.some(
                (el) => el.pokemonName === p.pokemonName
              );
              if (found) {
                onDeSelect(p);
              } else {
                onSelect(p);
              }
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
          </PokemonSpriteFour>
        ))}
      </Container>
      <Header>2 Points Pokémon</Header>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 2;
        }).map((p) => (
          <PokemonSpriteTwo
            key={p.pokemonName}
            onClick={() => {
              const found = selectedPokemon.some(
                (el) => el.pokemonName === p.pokemonName
              );
              if (found) {
                onDeSelect(p);
              } else {
                onSelect(p);
              }
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
          </PokemonSpriteTwo>
        ))}
      </Container>
      <Header>0 Points Pokémon</Header>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 0;
        }).map((p) => (
          <PokemonSpriteZero
            key={p.pokemonName}
            onClick={() => {
              const found = selectedPokemon.some(
                (el) => el.pokemonName === p.pokemonName
              );
              if (found) {
                onDeSelect(p);
              } else {
                onSelect(p);
              }
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
          </PokemonSpriteZero>
        ))}
      </Container>
    </Box>
  );
}

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem;
`;

const SubmitBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  width: 100%;
  height: fit-content;
  padding: 1rem 0rem;
  background-color: ${({ theme }) => `${theme.primary0}`};

  box-shadow: 0px 22px 18px -1px rgba(0, 0, 0, 0.34);
  z-index: 1;
`;

const Selected = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0rem 5rem;
  }
`;

const Container = styled(motion.div)`
  width: 70rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Header = styled(motion.div)`
  font-size: 1.8rem;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

const NewHeader = styled(motion.div)`
  font-size: 1.8rem;
  color: ${({ theme }) => `${theme.highlight0}`};
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 0.1rem 1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => `${theme.primary1}`};
`;

const Text = styled(motion.div)`
  font-size: 1rem;
  color: ${({ theme }) => `${theme.highlight0}`};
  font-weight: 400;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    width: 90%;
    text-align: center;
  }
`;

const Heading = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.secondary0};
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
  border-bottom: solid 2px ${({ theme }) => theme.highlight0};
  margin: 2rem 0rem;
`;

const NewHeading = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.secondary0};
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PokemonSpriteEight = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 8rem;
  height: 8rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const PokemonSpriteFour = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 6rem;
  height: 6rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const PokemonSpriteTwo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 5rem;
  height: 5rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const PokemonSpriteZero = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 4rem;
  height: 4rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export default Cliffhanger;
