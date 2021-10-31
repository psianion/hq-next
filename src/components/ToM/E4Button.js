import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

function E4Button({ region }) {
  return (
    <>
      <Container>
        <Link href={`/tom/${region}/e4`}>
          <Gym>
            <p>{region} ELITE 4</p>
          </Gym>
        </Link>
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  width: 80rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    margin: 1rem 0;
  }
`;

const Gym = styled(motion.div)`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  background-color: transparent;
  padding: 0.5rem 2rem;
  border: 1px solid ${({ theme }) => theme.highlight0};

  p {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.highlight0};
  }

  @media (max-width: 768px) {
    width: 9rem;
    margin: 0.5rem;
    p {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
  }

  & :hover {
    cursor: pointer;
  }
`;

export default E4Button;
