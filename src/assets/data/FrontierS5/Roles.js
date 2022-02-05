const { faIndustry } = require("@fortawesome/free-solid-svg-icons");

module.exports = [
  {
    id: 1,
    name: "Cleric",
    types: "Fairy, Normal & Ground",
    bans: "Azumarill & Lickitung",
    string: "cp-1500&fairy,normal,ground&!azumarill&!lickitung",
    image: "/Images/BFS5/roles/cleric.png",
  },
  {
    id: 2,
    name: "Wizard",
    types: "Flying, Steel & Fire",
    bans: "Galarian Stunfisk & Altaria",
    string: "cp-1500&steel,fire,flying&!altaria&!stunfisk",
    image: "/Images/BFS5/roles/wizard.png",
  },
  {
    id: 3,
    name: "Warlock",
    types: "Bug, Dark & Electric",
    bans: "Sableye",
    string: "cp-1500&dark,electric,bug&!sableye",
    image: "/Images/BFS5/roles/warlock.png",
  },
  {
    id: 4,
    name: "Fighter",
    types: "Fighting, Ghost & Ice",
    bans: "Medicham & Walrein",
    string: "cp-1500&fighting,ghost,ice&!medicham&!walrein",
    image: "/Images/BFS5/roles/fighter.png",
  },
  {
    id: 5,
    name: "Sorcerer",
    types: "Poison, Psychic & Water",
    bans: "Wobbuffet, Azumarill, Medicham & Walrein",
    string:
      "cp-1500&poison,psychic,water&!wobbuffet&!azumarill&!medicham&!walrein",
    image: "/Images/BFS5/roles/sorcerer.png",
  },
  {
    id: 6,
    name: "Druid",
    types: "Grass, Rock & Dragon",
    bans: "Goodra & Whimsicott",
    string: "cp-1500&grass,rock,dragon&!goodra&!whimsicott",
    image: "/Images/BFS5/roles/druid.png",
  },
];
