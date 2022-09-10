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
      <Heading head={"Registered Teams"} />
      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        {frontierTeamsData.map((team) => (
          <FrontierTeam key={team._id}>
            <Link href={`/frontier/team/${team.logo}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/frontier/${team.logo}.png`}
                width="200px"
                height="200px"
                placeholder="blur"
                loading="eager"
              ></Image>
            </Link>
          </FrontierTeam>
        ))}
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: fit-content;
  width: 70rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    height: fit-content;
    width: 100%;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const FrontierTeam = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Teams;
