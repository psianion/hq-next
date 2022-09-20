import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useGBL } from "../../../hooks/lb/gbl";
import Loading from "../Loading";
import Image from "next/image";

const GBLLB = () => {
  const { gbllbdata, isError, isLoading } = useGBL();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {gbllbdata.slice(0, 5).map((player, index) => (
        <LBContainer
          background={`${process.env.NEXT_PUBLIC_API_URL}/icons/gbl/${player.game.pokemongo.gbl.s12.rank}.png`}
          key={index}
        >
          <Rank>#{index + 1}</Rank>
          <p>●</p>
          <Avatar
            team={
              player.game.pokemongo.trainerTeam === "Valor"
                ? "#FF0000"
                : player.game.pokemongo.trainerTeam === "Mystic"
                ? "#0000FF"
                : player.game.pokemongo.trainerTeam === "Instinct"
                ? "#FFFF00"
                : "none"
            }
          >
            <Sprite>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/trainer/sprites/${player.sprites.activeAvatar}.png`}
                layout="fill"
              />
            </Sprite>
          </Avatar>
          <MMRSection2>
            <IGN>{player.game.pokemongo.ign}</IGN>
            <MMR2>{player.game.pokemongo.gbl.s12.currentMMR}</MMR2>
          </MMRSection2>
        </LBContainer>
      ))}
    </>
  );
};

function Profile({ stage, data }) {
  return (
    <Container>
      <Section>
        <WelcomeText>Welcome to PvP HQ</WelcomeText>
        {stage === "NOT-LOGGED-IN" && (
          <>
            <WelcomeText>Top 5 Indian GBL Leaderboard</WelcomeText>
            <GBLLB />
            <span style={{ marginTop: "1rem" }}>
              <Link href="/lb/gbl">
                <SetupButton>VIEW INDIAN GBL LB</SetupButton>
              </Link>
            </span>
          </>
        )}
        {stage === "PROFILE-NOT-SET" && (
          <>
            <NameText>{data.data.discordName}</NameText>
            <Link href="/profile">
              <SetupButton>SETUP YOUR PROFILE</SetupButton>
            </Link>
            <Link href="/lb/gbl/">
              <SetupButton>Indian GBL LB</SetupButton>
            </Link>
          </>
        )}
        {stage == "PROFILE-SET" && (
          <>
            <NameText>{data.data.game.pokemongo.ign}</NameText>
            <WelcomeText>Top 5 Indian GBL Leaderboard</WelcomeText>
            <GBLLB />
            <span style={{ marginTop: "1rem" }}>
              <Link href="/profile">
                <SetupButton>VIEW FULL PROFILE</SetupButton>
              </Link>
              <Link href="/lb/gbl/">
                <SetupButton>VIEW INDIAN GBL LB</SetupButton>
              </Link>
            </span>
          </>
        )}
      </Section>
    </Container>
  );
}

const Container = styled(motion.div)`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    width: 98%;
    height: fit-content;
  }
`;

const LBContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 25rem;
  height: 2.25rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-top: 0.25rem;
  background-image: url(${({ background }) => background});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 3rem;
  transition: all 0.1s ease-in-out;
  border-radius: 0.25rem;
  border-left: solid 0.5rem ${({ theme }) => theme.highlight0};

  &:hover {
    background-color: ${({ theme }) => theme.highlight0};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 98%;
  }
`;

const Section = styled(motion.div)`
  width: 45rem;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => `${theme.primary1}`};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
  }
`;

const WelcomeText = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => `${theme.secondary1}`};
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NameText = styled.h1`
  font-size: 2.25rem;
  color: ${({ theme }) => `${theme.highlight0}`};
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Avatar = styled(motion.div)`
  border: solid 0.1rem ${({ team }) => team};
  background-color: ${({ theme }) => theme.primary1};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Sprite = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const IGN = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Rank = styled(motion.div)`
  width: 2.5rem;
  margin-left: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 1.5rem;
    margin-left: 0.25rem;
  }
`;

const MMRSection2 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

const MMR2 = styled(motion.div)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary0};

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const SetupButton = styled(motion.button)`
  color: #fff;
  cursor: pointer;
  padding: 0.25rem 1rem;
  margin: 0.5rem 0.25rem;
  font-size: 1rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 500;
  background-color: ${({ theme }) => `${theme.highlight0}`};
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};

  border-radius: 2rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    padding: 0.25rem 1rem;
    font-size: 0.8rem;
  }
`;

const EditButton = styled(motion.button)`
  cursor: pointer;
  padding: 0.25rem 2rem;
  font-size: 1rem;
  font-family: "Poppins";
  font-style: normal;
  letter-spacing: 0.05rem;
  font-weight: 500;
  color: ${({ theme }) => `${theme.highlight0}`};
  background-color: transparent;
  border: 1px solid ${({ theme }) => `${theme.highlight0}`};
  border-radius: 2rem;
  margin-top: 2rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight0}`};
    border: 1px solid ${({ theme }) => `${theme.highlight0}`};
    color: ${({ theme }) => `${theme.primary0}`};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
`;

const FriendCode = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => `${theme.primary1}80`};
  color: ${({ theme }) => theme.secondary1};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.primary1};
    border-right: 0.5rem solid ${({ theme }) => theme.highlight0};
  }

  @media (max-width: 768px) {
    width: 80%;
    border-radius: 0.1rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.secondary1};
    background-color: ${({ theme }) => theme.primary1};
    border-right: 0.5rem solid ${({ theme }) => theme.highlight0};
  }
`;

export default Profile;
