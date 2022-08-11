import styled from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser, useSetGBL } from "../../hooks/user/user";
import Loading from "../../src/components/Loading";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  const router = useRouter();
  const { data, isError, isLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setGBL = useSetGBL();

  const [id, setID] = useState("");
  const [loading, setLoading] = useState(true);
  const [tcCopied, setTcCopied] = useState(false);

  const onSubmit = async (data) => {
    const { isSuccess } = await setGBL(id, data);
    if (isSuccess) {
      console.log("MMR set");
    } else {
      console.log("MMR set error!");
    }
  };

  useEffect(() => {
    if (!isLoading && !data?.data) {
      router.push("/login");
    } else if (!isLoading && !data.data.game.pokemongo.ign) {
      router.push("/profile/setup");
    } else if (!isLoading && data.data.game.pokemongo.ign) {
      setID(data.data._id);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Head>
        <title>Profile | PvP HQ</title>
      </Head>
      <ProfileContainer>
        {data?.data?.sprites.activeBanner && (
          <Cover
            background={`${process.env.NEXT_PUBLIC_API_URL}/banner/${data.data.sprites.activeBanner}.jpg`}
          />
        )}
        <AvatarSection>
          <Avatar
            team={
              data?.data?.game.pokemongo.trainerTeam === "Valor"
                ? "#FF0000"
                : data?.data?.game.pokemongo.trainerTeam === "Mystic"
                ? "#0000FF"
                : data?.data?.game.pokemongo.trainerTeam === "Instinct"
                ? "#FFFF00"
                : "none"
            }
          >
            <Sprite>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/trainer/sprites/${data.data.sprites.activeAvatar}.png`}
                layout="fill"
                unoptimized="true"
              />
            </Sprite>
          </Avatar>
          {data?.data?.nationality && (
            <Flag>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/countryFlags/80x80/${data.data.nationality}.png`}
                layout="fill"
              />
            </Flag>
          )}
          <IGN>{data.data.game.pokemongo.ign}</IGN>
          <Role>{data.data.role}</Role>
        </AvatarSection>
        <DetailsSection>
          <ProfileSection>
            <TrainerCodeSection>
              <SideHeading>Trainer Code</SideHeading>
              <TrainerCode
                onClick={() => {
                  navigator.clipboard.writeText(
                    data.data.game.pokemongo.trainerCode
                  );
                  setTcCopied(true);
                  setTimeout(() => {
                    setTcCopied(false);
                  }, 1000);
                }}
              >
                {data.data.game.pokemongo.trainerCode}
                <FontAwesomeIcon
                  icon={faLink}
                  style={{
                    fontSize: "1rem",
                    marginLeft: "0.5rem",
                    cursor: "pointer",
                  }}
                />
              </TrainerCode>
              {tcCopied && <Copied>Code Copied!</Copied>}
            </TrainerCodeSection>

            <GBL>
              <SideHeading>GBL Season 11</SideHeading>
              {data?.data?.game.pokemongo.gbl?.s11 && (
                <MMRSection>
                  <RankIcon>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/icons/gbl/${data.data.game.pokemongo.gbl.s11.rank}.png`}
                      layout="fill"
                    />
                  </RankIcon>
                  <MMR>
                    <CurrentMMR>
                      {data.data.game.pokemongo.gbl.s11.currentMMR}{" "}
                      <span>Current MMR</span>
                    </CurrentMMR>
                    <HighestMMR>
                      {data.data.game.pokemongo.gbl.s11.highestMMR}{" "}
                      <span>Highest MMR</span>
                    </HighestMMR>
                  </MMR>
                </MMRSection>
              )}
              <SetMMRSection onSubmit={handleSubmit(onSubmit)}>
                <MMRInput className="form-control">
                  <input
                    type="number"
                    autoComplete="off"
                    {...register("rating", {
                      required: "ELO is required!",
                      maxLength: {
                        value: 4,
                        message: "Enter your 4 digit GBL ELO",
                      },
                      minLength: {
                        value: 4,
                        message: "Enter your 4 digit GBL ELO",
                      },
                      min: {
                        value: 0,
                        message: "Positive ELO when?",
                      },
                    })}
                  />
                </MMRInput>
                <MMRInput className="form-control">
                  <button type="submit">Update MMR</button>
                </MMRInput>
              </SetMMRSection>
              <Error>{errors.rating?.message}</Error>
            </GBL>

            <Faction></Faction>
          </ProfileSection>
          <FrontierSection
            background={`${process.env.NEXT_PUBLIC_API_URL}/images/bfbg.png`}
          ></FrontierSection>
        </DetailsSection>
      </ProfileContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ProfileContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary0};
  border: solid 2px ${({ theme }) => theme.primary1};
  border-radius: 0.5rem;
  width: 90rem;
  min-height: 30rem;
  margin-bottom: 2rem;
  height: fit-content;

  @media (max-width: 768px) {
    width: 95%;
    min-height: 98%;
    margin-top: 3rem;
  }
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

const Flag = styled(motion.div)`
  position: relative;
  width: 2.8rem;
  height: 2.1rem;
  transform: translateY(-1rem);

  @media (max-width: 768px) {
    margin-left: 0rem;
    width: 2rem;
    height: 1.5rem;
    transform: translateY(-1rem);
  }
`;

const Cover = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary1};
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  height: 15rem;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

const AvatarSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-10rem);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0rem;
    transform: translateY(-3.8rem);
  }
`;

const DetailsSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  transform: translateY(-10rem);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    margin-left: 0rem;
    transform: translateY(-3.8rem);
  }
`;

const TrainerCodeSection = styled(motion.div)`
  width: 27rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.primary1}`};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem;
    align-items: center;
  }
`;

const SideHeading = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const TrainerCode = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Copied = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 400;
  color: #00ff7f;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const GBL = styled(motion.div)`
  width: 27rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.primary1}`};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem;
    align-items: center;
  }
`;

const MMRSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const RankIcon = styled(motion.div)`
  position: relative;
  width: 5rem;
  height: 5rem;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const MMR = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

const CurrentMMR = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.highlight0};
  font-weight: 600;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary1};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

const HighestMMR = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.secondary1};
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

const SetMMRSection = styled(motion.form)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const MMRInput = styled(motion.div)`
  margin-top: 0.5rem;
  input {
    height: 2rem;
    width: 6rem;
    background-color: ${({ theme }) => theme.primary1};
    border: solid 1px ${({ theme }) => theme.secondary1};
    color: ${({ theme }) => theme.secondary1};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    padding: 0 1rem;
    border-radius: 2rem;
    font-weight: 600;
    text-align: center;

    &:focus {
      background-color: ${({ theme }) => theme.primary0};
      outline: none;
    }
  }

  button {
    height: 2rem;
    width: fit-content;
    background-color: ${({ theme }) => theme.highlight0};
    border: solid 1px ${({ theme }) => theme.highlight0};
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    padding: 0 1rem;
    border-radius: 2rem;
    font-weight: 400;
    text-align: center;
    margin-left: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      height: 1.5rem;
      width: 4rem;
      font-size: 0.75rem;
    }

    button {
      height: 1.5rem;
      font-size: 0.75rem;
    }
  }
`;

const Faction = styled(motion.div)``;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.primary1};
  border-radius: 0.5rem;
  width: 28rem;
  height: fit-content;
  min-height: 10rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0rem;
    width: 95%;
    margin-bottom: 1rem;
  }
`;

const FrontierSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.primary1};
  border-radius: 0.5rem;
  width: 58rem;
  height: fit-content;
  min-height: 15rem;
  padding: 1rem;
  background-image: url(${({ background }) => background});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0rem;
    width: 95%;
    margin-bottom: 1rem;
    background-position: bottom right;
    background-size: 10rem;
  }
`;

const Avatar = styled(motion.div)`
  border: solid 0.5rem ${({ team }) => team};
  box-shadow: 0 0 0 0.5rem ${({ team }) => `${team}75`};
  background-color: ${({ theme }) => theme.primary1};
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 7rem;
    border: solid 0.3rem ${({ team }) => team};
    box-shadow: 0 0 0 0.3rem ${({ team }) => `${team}75`};
    height: 7rem;
  }
`;

const Sprite = styled(motion.div)`
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

const IGN = styled(motion.h1)`
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  transform: translateY(-1.5rem);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0rem;
    transform: translateY(-1rem);
  }
`;

const Role = styled(motion.p)`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.primary2};
  font-weight: 400;
  transform: translateY(-2.25rem);
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-left: 0rem;
    transform: translateY(-1.5rem);
  }
`;
