export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const pokemonInfo = [
    {
      name: "Bulbasaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Bulbasaur.png?raw=true",
      type: "grass",
      color:["green", "violet"]
    },
    {
      name: "Ivysaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ivysaur.png?raw=true",
      type: "grass",
      color:["green", "violet"]
    },
    {
      name: "Venosaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venusaur.png?raw=true",
      type: "grass",
      color:["green", "violet"]
    },
    {
      name: "Charmander",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmander.png?raw=true",
      type: "fire",
      color: ["red", "orangered"]
    },
    {
      name: "Charmeleon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmeleon.png?raw=true",
      type: "fire",
      color: ["red", "orangered"]
    },
    {
      name: "Charizard",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charizard.png?raw=true",
      type: "fire",
      color: ["red", "orangered"]
    },
    {
      name: "Squirtle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Squirtle.png?raw=true",
      type: "water",
      environment: "water",
      color: ["blue", "lightblue"]
    },
    {
      name: "Wartortle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Wartotle.png?raw=true",
      type: "water",
      color: ["blue", "lightblue"]
    },
    {
      name: "Blastoise",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Blastoise.png?raw=true",
      type: "water",
      color: ["blue", "lightblue"]
    },
    {
      name: "Caterpie",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Caterpie.png?raw=true",
      type: "grass",
      color: ["green", "lightgreen"]
    },
  ];
  res.status(200).json(pokemonInfo);
}
