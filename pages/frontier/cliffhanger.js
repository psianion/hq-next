import styled from "styled-components";
import { motion } from "framer-motion";
import CliffhangerPokemon from "../../src/assets/data/FrontierS6/pointsData";
import Image from "next/image";

function Cliffhanger() {
  return (
    <Box>
      <Heading>Cliffhangger Meta Points List</Heading>
      <Header>8 Points Pokémon</Header>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 8;
        }).map((p) => (
          <PokemonSpriteEight key={p}>
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
          <PokemonSpriteFour key={p}>
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
          <PokemonSpriteTwo key={p}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
          </PokemonSpriteTwo>
        ))}
      </Container>
      <Header>Everything else is 0 points!</Header>
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

const Heading = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.secondary0};
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
  border-bottom: solid 2px ${({ theme }) => theme.highlight0};
  margin-bottom: 2rem;
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

export default Cliffhanger;
