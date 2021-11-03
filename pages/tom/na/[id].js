import { google } from "googleapis";
import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import GymHero from "../../../src/components/ToM/GymHero";
import GymLeaders from "../../../src/components/ToM/GymLeaders";
import Footer from "../../../src/components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import BackButton from "../../../src/components/BackButton";

export async function getServerSideProps({ query }) {
  // auth omitted...

  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    projectId: process.env.GOOGLE_PROJECTID,
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });

  const sheets = google.sheets({ version: "v4", auth });

  const { id } = query;
  const range = `NA!A${id}:V${id}`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  const [
    gymLocation,
    gymName,
    gymLeader1Name,
    gymLeader1Code,
    gymLeader2Name,
    gymLeader2Code,
    gymLeader3Name,
    gymLeader3Code,
    gymLeader4Name,
    gymLeader4Code,
    gymTyping1,
    gymTyping2,
    banTyping,
    banPokemon1,
    banPokemon2,
    banPokemon3,
    legendaryBan,
    mythicalBan,
    shadowBan,
    megaBan,
    gymLeaderMons,
  ] = response.data.values[0];

  return {
    props: {
      gymLocation,
      gymName,
      gymLeaders: {
        gymLeader1Name,
        gymLeader1Code,
        gymLeader2Name,
        gymLeader2Code,
        gymLeader3Name,
        gymLeader3Code,
        gymLeader4Name,
        gymLeader4Code,
      },
      typings: { gymTyping1, gymTyping2 },
      bans: {
        banTyping,
        banPokemon1,
        banPokemon2,
        banPokemon3,
        legendaryBan,
        mythicalBan,
        shadowBan,
        megaBan,
      },
      gymLeaderMons,
    },
  };
}

function RegionName({
  gymLocation,
  gymName,
  gymLeaders,
  typings,
  bans,
  gymLeaderMons,
}) {
  const leaderMons = gymLeaderMons.split(",");
  const [leaderMonsImage, setLeaderMonsImage] = useState([]);

  const sendPokemonImage = async (name) => {
    if (name === "castform-snowy") {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => {
            setLeaderMonsImage((leaderMonsImage) => [
              ...leaderMonsImage,
              response.data.sprites.other["dream_world"].front_default,
            ]);
          });
      } catch (err) {
        console.log(err);
      }
    } else if (name === "castform-rainy") {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => {
            setLeaderMonsImage((leaderMonsImage) => [
              ...leaderMonsImage,
              response.data.sprites.other["dream_world"].front_default,
            ]);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => {
            setLeaderMonsImage((leaderMonsImage) => [
              ...leaderMonsImage,
              response.data.sprites.other["official-artwork"].front_default,
            ]);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setLeaderMonsImage([]);
    leaderMons.forEach((i) => {
      sendPokemonImage(i);
    });
  }, []);

  return (
    <Container>
      <Head>
        <title>{gymName} | PvP HQ</title>
      </Head>
      <GymHero gymName={gymName} gymLocation={gymLocation} />
      <BackButton text={"All North America Gyms"} path={"/tom/na"} />
      <GymLeaders
        gymLeaders={gymLeaders}
        gymLocation={gymLocation}
        gymName={gymName}
        bans={bans}
        typings={typings}
        leaderMonsImage={leaderMonsImage}
      />
      <Footer />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default RegionName;
