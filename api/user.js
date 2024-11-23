export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const pokemonInfo = [
    {
      name: "bulbasaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Bulbasaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
    },
    {
      name: "ivysaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ivysaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
    },
    {
      name: "venusaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venusaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
    },
    {
      name: "charmander",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmander.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
    },
    {
      name: "charmeleon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmeleon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
    },
    {
      name: "charizard",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charizard.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
    },
    {
      name: "squirtle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Squirtle.png?raw=true",
      type: "water",
      environment:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
    },
    {
      name: "wartortle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Wartotle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
    },
    {
      name: "blastoise",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Blastoise.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
    },
    {
      name: "caterpie",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Caterpie.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
    },
    {
      name: "metapod",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Metapod.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
    },
    {
      name: "butterfree",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Butterfree.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
    },
    {
      name: "weedle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weedle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
    },
    {
      name: "kakuna",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kakuna.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
    },
    {
      name: "beedrill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Beedrill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
    },
    {
      name: "pidgey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
    },
    {
      name: "pidgeotto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgeotto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
    },
    {
      name: "pidgeot",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgeot.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
    },
  ];
  res.status(200).json(pokemonInfo);
}
