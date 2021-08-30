import { google } from "googleapis";
import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import GymHero from "../../../src/components/ToM/GymHero";
import GymLeaders from "../../../src/components/ToM/GymLeaders";
import axios from "axios";
import { useState, useEffect } from "react";

export async function getServerSideProps({ query }) {
  // auth omitted...

  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const { id } = query;
  const range = `EU!A${id}:V${id}`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  console.log(id, process.env.SHEET_ID);

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
      <GymLeaders
        gymLeaders={gymLeaders}
        gymLocation={gymLocation}
        gymName={gymName}
        bans={bans}
        typings={typings}
        leaderMonsImage={leaderMonsImage}
      />
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
