import styled from "styled-components";
import { motion } from "framer-motion";

function GymLeaderPokemon({ leaderMonsImage }) {
  return (
    <>
      <Container>
        {leaderMonsImage.map((i) => (
          <Pokemon key={i}>
            <img width="150px" height="150px" src={i} />
          </Pokemon>
        ))}
      </Container>
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

  & :hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
  }
`;

export default GymLeaderPokemon;
