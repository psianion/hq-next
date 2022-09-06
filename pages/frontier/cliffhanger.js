import styled from "styled-components";
import { motion } from "framer-motion";
import CliffhangerPokemon from "../../src/assets/data/FrontierS6/pointsData";
import Image from "next/image";

function Cliffhanger() {
  {
    /*
.filter(function (el) {
          return el.points == 8;
        })

*/
  }

  return (
    <Box>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 8;
        }).map((p) => (
          <PokemonSpriteEight>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
            <p>{p.pokemonName}</p>
          </PokemonSpriteEight>
        ))}
      </Container>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 4;
        }).map((p) => (
          <PokemonSpriteFour>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
            <p>{p.pokemonName}</p>
          </PokemonSpriteFour>
        ))}
      </Container>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 2;
        }).map((p) => (
          <PokemonSpriteTwo>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
            <p>{p.pokemonName}</p>
          </PokemonSpriteTwo>
        ))}
      </Container>
      <Container>
        {CliffhangerPokemon.filter(function (el) {
          return el.points == 0;
        }).map((p) => (
          <PokemonSpriteZero>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/pokemonsprites/${p.pokemonSprite}`}
              layout="fill"
            />
            <p>{p.pokemonName}</p>
          </PokemonSpriteZero>
        ))}
      </Container>
    </Box>
  );
}

const Box = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  width: 70rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    width: 90%;
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

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export default Cliffhanger;
