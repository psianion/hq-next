import { useState, useEffect } from "react";
import GymLeaderPokemon from "./GLPokemon";
import axios from "axios";

function PokemonTeam({ pokemon }) {
  const pokemonName = pokemon.split(",");
  const [monsImage, setMonsImage] = useState([]);

  const sendPokemonImage = async (name) => {
    if (name === "cherrim-sunny") {
      setMonsImage((monsImage) => [
        ...monsImage,
        "https://i.imgur.com/DrwGClJ.png",
      ]);
    } else {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => {
            setMonsImage((monsImage) => [
              ...monsImage,
              response.data.sprites.other["official-artwork"].front_default,
            ]);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setMonsImage([]);
    pokemonName.forEach((i) => {
      sendPokemonImage(i);
    });
  }, []);

  return (
    <>
      <GymLeaderPokemon leaderMonsImage={monsImage} />
    </>
  );
}

export default PokemonTeam;
