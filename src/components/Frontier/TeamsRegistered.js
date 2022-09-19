import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInTop,
  stagger2,
  stagger3,
} from "../../animations/animations";
import Image from "next/image";
import { useFrontierData } from "../../../hooks/frontier/registration";
import Loading from "../Loading";
import Heading from "../Heading";
import Link from "next/link";

function Teams() {
  const { frontierTeamsData, isError, isLoading } = useFrontierData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Heading head={"Group Stage Leaderboard"} />
      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        {frontierTeamsData.map((team) => (
          <Link href={`/frontier/team/${team.logo}`} key={team._id}>
            <Team
              background={`${process.env.NEXT_PUBLIC_API_URL}/images/frontier/${team.logo}.png`}
            >
              <TeamName>
                <FrontierTeam>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/images/frontier/${team.logo}.png`}
                    layout="fill"
                  ></Image>
                </FrontierTeam>
                <Name>{team.team}</Name>
              </TeamName>
              <TeamScore>
                <Score>{team.groupWins}</Score>/
                <Score>{team.groupMatches}</Score>
              </TeamScore>
            </Team>
          </Link>
        ))}
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: fit-content;
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const Team = styled(motion.div)`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0rem 1rem;
  background-color: ${({ theme }) => `${theme.primary1}50`};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    opacity: 0.1;
    z-index: -1;
    background-image: url(${({ background }) => background});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:hover {
    background-color: ${({ theme }) => `${theme.primary1}`};
  }

  @media (max-width: 1024px) {
    width: 98%;
    height: 2rem;
    margin-bottom: 0.5rem;
    padding: 0rem 0.5rem;
  }
`;

const TeamName = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-left: 0.5rem;
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
  justify-content: center;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-weight: 400;
  font-size: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const FrontierTeam = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 6rem;
  width: 6rem;

  @media (max-width: 1024px) {
    height: 3rem;
    width: 3rem;
  }
`;

export default Teams;
