import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInTop,
  stagger2,
  stagger3,
} from "../../animations/animations";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFetchTeam } from "../../../hooks/frontier/registration";
import { useUser } from "../../../hooks/user/user";
import Loading from "../Loading";
import { useForm } from "react-hook-form";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInvite } from "../../../hooks/frontier/invite";

function TeamHero() {
  const { data, isError, isLoading } = useUser();
  const [teamData, setTeamData] = useState();
  const [inviteError, setInviteError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchTeam = useFetchTeam();
  const sendInvite = useInvite();

  const onSubmit = async (data) => {
    const { isSuccess, errorMessage } = await sendInvite({
      teamName: teamData.teamData.team,
      data: data.bfinvite,
    });
    if (isSuccess) {
      const res = await fetchTeam(teamData.teamData.team);
      setTeamData(res);
      setInviteError();
      console.log("Invite Sent");
    } else {
      console.log(errorMessage);
      setInviteError(errorMessage);
    }
  };

  useEffect(async () => {
    const res = await fetchTeam(data.data.game.pokemongo.bf.s6.team);
    setTeamData(res);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeroContainer
        variants={stagger3}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <SmallImageSection>
          <Image
            src="/Images/battle.png"
            width="75px"
            height="75px"
            placeholder="blur"
            loading="eager"
          ></Image>
        </SmallImageSection>
        {teamData && (
          <>
            <ImageSection variants={fadeInBottom}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/frontier/${teamData.teamData.logo}.png`}
                width="300px"
                height="300px"
                placeholder="blur"
                loading="eager"
              ></Image>
            </ImageSection>
            <TextSection variants={fadeInBottom}>
              <Heading>Team {teamData.teamData.team}</Heading>
            </TextSection>

            <PlayerSection>
              {teamData.players.map((p) => (
                <PlayerBox>
                  <Avatar
                    team={
                      p.game.pokemongo.trainerTeam === "Valor"
                        ? "#FF0000"
                        : p.game.pokemongo.trainerTeam === "Mystic"
                        ? "#0000FF"
                        : p.game.pokemongo.trainerTeam === "Instinct"
                        ? "#FFFF00"
                        : "none"
                    }
                  >
                    <Sprite>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/trainer/sprites/${p.sprites.activeAvatar}.png`}
                        layout="fill"
                      />
                    </Sprite>
                  </Avatar>
                  <IGN>
                    {p.game.pokemongo.bf.s6.isCaptain && (
                      <FontAwesomeIcon
                        style={{ fontSize: "0.8rem", marginBottom: "0.2rem" }}
                        icon={faCrown}
                      />
                    )}{" "}
                    {p.game.pokemongo.ign}
                  </IGN>
                </PlayerBox>
              ))}
            </PlayerSection>
            <InvitedSection>
              {teamData.invitedPlayers.map((p) => (
                <Invited>{p.game.pokemongo.ign} invited!</Invited>
              ))}
            </InvitedSection>
            {teamData.players.length + teamData.invitedPlayers.length < 8 ? (
              data.data.game.pokemongo.bf.s6.isCaptain ? (
                <InviteSection onSubmit={handleSubmit(onSubmit)}>
                  <IGN>Enter IGN to Invite Player</IGN>
                  <InviteInput className="form-control">
                    <input
                      autoComplete="off"
                      {...register("bfinvite", {
                        required: "IGN is required to invite!",
                      })}
                    />
                  </InviteInput>
                  <Error>{inviteError}</Error>
                  <InviteInput className="form-control">
                    <button type="submit">Invite Player</button>
                  </InviteInput>
                </InviteSection>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </>
        )}
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(motion.div)`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 2rem 0rem;
  }
`;

const TextSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    width: 45rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const PlayerSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SmallImageSection = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const ImageSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20rem;
  height: 20rem;
  margin-top: 0;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const Heading = styled(motion.h1)`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 3.75rem;
  color: ${({ theme }) => `${theme.secondary0}`};
  letter-spacing: 0.02rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;

const Sprite = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  width: 5rem;
  height: 5rem;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Avatar = styled(motion.div)`
  border: solid 0.25rem ${({ team }) => team};
  background-color: ${({ theme }) => theme.primary1};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const PlayerBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  min-width: 10rem;
  background-color: ${({ theme }) => `${theme.primary2}20`};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const IGN = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: ${({ theme }) => `${theme.secondary0}`};
  font-weight: 400;
  font-size: 1.15rem;
  margin-top: 0.5rem;
`;

const Error = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 400;
  color: #ff3131;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const Invited = styled(motion.div)`
  width: 20rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
  background-color: ${({ theme }) => `${theme.primary2}20`};
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: #00ff7f;
  font-weight: 400;
  font-size: 1.15rem;
`;

const InviteSection = styled(motion.form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const InvitedSection = styled(motion.form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;

const InviteInput = styled(motion.div)`
  margin-top: 0.5rem;
  input {
    height: 2.5rem;
    width: 15rem;
    background-color: ${({ theme }) => theme.primary1};
    border: solid 1px ${({ theme }) => theme.secondary1};
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 1rem;
    border-radius: 0.25rem;
    font-weight: 500;
    text-align: center;

    &:focus {
      background-color: ${({ theme }) => theme.primary0};
      outline: none;
    }
  }

  button {
    height: 2.5rem;
    width: fit-content;
    background-color: ${({ theme }) => theme.highlight0};
    border: solid 1px ${({ theme }) => theme.highlight0};
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    padding: 0 1rem;
    border-radius: 0.25rem;
    font-weight: 500;
    text-align: center;
    margin-left: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      height: 2rem;
      width: 15rem;
      font-size: 0.75rem;
    }

    button {
      height: 2rem;
      font-size: 0.75rem;
      margin-left: 0rem;
    }
  }
`;
export default TeamHero;
