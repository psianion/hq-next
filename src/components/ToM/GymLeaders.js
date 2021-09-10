import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../Heading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GymLeaderPokemon from "./GLPokemon";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function GymLeaders({
  gymLeaders,
  gymLocation,
  gymName,
  bans,
  typings,
  leaderMonsImage,
}) {
  const leadersData = [
    {
      name: gymLeaders.gymLeader1Name,
      code: gymLeaders.gymLeader1Code,
    },
    {
      name: gymLeaders.gymLeader2Name,
      code: gymLeaders.gymLeader2Code,
    },
    {
      name: gymLeaders.gymLeader3Name,
      code: gymLeaders.gymLeader3Code,
    },
    {
      name: gymLeaders.gymLeader4Name,
      code: gymLeaders.gymLeader4Code,
    },
  ];

  return (
    <>
      <TextContainer>
        <h1>
          <Highlight>{gymName} </Highlight>
          is the Gym from {gymLocation}.<br /> The Gym is defended by leaders
          who master the{" "}
          <Highlight>
            {typings.gymTyping1} and {typings.gymTyping2}{" "}
          </Highlight>
          typings. <br /> The Pokemon <Highlight>trained </Highlight>in this gym
          are as follows :
        </h1>
      </TextContainer>
      <GymLeaderPokemon leaderMonsImage={leaderMonsImage} />
      <TextContainer>
        <h1>
          The <Highlight>Gym Leaders </Highlight>defending this gym will be :
        </h1>
      </TextContainer>
      {/*
          <Link href={`/tom/${leader.name}`} key={leader.code}>
            <Region >{leader.name}</Region>
          </Link>
         */}
      <Regions>
        {leadersData.map((leader) => (
          <Region
            key={leader.code}
            onClick={() => {
              navigator.clipboard.writeText(leader.code);
            }}
          >
            <div>{leader.name}</div>
            <LeaderCode>
              <div>{leader.code}</div>
              <FontAwesomeIcon
                style={{ marginLeft: "0.5rem", fontSize: "1rem" }}
                icon={faCopy}
              />
            </LeaderCode>
          </Region>
        ))}
      </Regions>
      <TextContainer>
        <h1>
          The Pokemon <Highlight>banned </Highlight>in this gym are :
        </h1>
      </TextContainer>
      <Bans>
        <BanText>BANNED TYPING</BanText>
        <Ban>{bans.banTyping} Type</Ban>
        <BanText>BANNED POKEMON</BanText>
        <Ban>
          {bans.banPokemon1}, {bans.banPokemon2}, and {bans.banPokemon3}
        </Ban>
        <BanText>
          LEGENDARIES:{" "}
          {bans.legendaryBan === "TRUE" ? (
            <Banned>Banned</Banned>
          ) : (
            <Banned>Not Banned</Banned>
          )}
        </BanText>
        <BanText>
          MYTHICALS:{" "}
          {bans.mythicalBan === "TRUE" ? (
            <Banned>Banned</Banned>
          ) : (
            <Banned>Not Banned</Banned>
          )}
        </BanText>
        <BanText>
          SHADOWS:{" "}
          {bans.shadowBan === "TRUE" ? (
            <Banned>Banned</Banned>
          ) : (
            <Banned>Not Banned</Banned>
          )}
        </BanText>
        <BanText>
          MEGAS:{" "}
          {bans.megaBan === "TRUE" ? (
            <Banned>Banned</Banned>
          ) : (
            <Banned>Not Banned</Banned>
          )}
        </BanText>
      </Bans>
    </>
  );
}

const Bans = styled(motion.div)`
  padding: 1rem;
  background-color: ${({ theme }) => `${theme.primary1}80`};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 95%;
    margin: 1rem 0;
  }
`;

const BanText = styled(motion.h2)`
  color: ${({ theme }) => theme.secondary2};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Ban = styled(motion.h1)`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  padding: 0.1rem 0.5rem;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Banned = styled(motion.span)`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 0rem 0.5rem;
  color: ${({ theme }) => theme.secondary1};
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  font-weight: 400;
`;

const Regions = styled(motion.div)`
  width: 80%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3rem 0rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    height: 20rem;
    margin: 1rem 0rem;
  }
`;

const LeaderCode = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => `${theme.primary0}`};
  padding: 0rem 1rem;
  margin-bottom: 0.2rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.secondary1};

  &:hover {
    color: ${({ theme }) => theme.highlight0};
  }
`;

const Region = styled(motion.div)`
  width: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => `${theme.primary1}80`};
  color: ${({ theme }) => theme.highlight0};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.2rem 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.primary1};
    border-right: 0.5rem solid ${({ theme }) => theme.highlight0};
  }

  @media (max-width: 768px) {
    width: 15rem;
    border-radius: 0.1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.highlight0};
    border-right: 0.3rem solid ${({ theme }) => theme.highlight0};
  }
`;

const TextContainer = styled(motion.div)`
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    // text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
    height: fit-content;

    h1 {
      font-size: 0.9rem;
    }
  }
`;

const Highlight = styled(motion.span)`
  color: ${({ theme }) => theme.highlight0};
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default GymLeaders;
