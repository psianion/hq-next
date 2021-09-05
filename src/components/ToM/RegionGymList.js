import styled from "styled-components";
import { motion } from "framer-motion";
import data from "../../assets/data/RegionData";
import Link from "next/link";

function RegionGymList({ id, region }) {
  return (
    <>
      <Container>
        {data[id].gyms.map((i) => (
          <Link href={`/tom/${region}/${i.number}`} key={i.number}>
            <Gym>
              <img src={i.flag} />
              <p>{i.location}</p>
            </Gym>
          </Link>
        ))}
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
  margin: 2rem 0;

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
  width: 15rem;
  background-color: ${({ theme }) => theme.primary1};

  p {
    font-size: 1.25rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  img {
    width: 7rem;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 9rem;
    margin: 0.5rem;
    p {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    img {
      width: 4rem;
    }
  }

  & :hover {
    background-color: ${({ theme }) => theme.highlight0};
    cursor: pointer;
  }
`;

export default RegionGymList;
