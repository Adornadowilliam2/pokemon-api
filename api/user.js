export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const pokemonInfo = [
    {
      name: "bulbasaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Bulbasaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "ivysaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ivysaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "venusaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venusaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "charmander",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmander.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
      weakness: "Water",
      resistance: "Grass",
    },
    {
      name: "charmeleon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmeleon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
      weakness: "Water",
      resistance: "Grass",
    },
    {
      name: "charizard",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charizard.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
      weakness: "Water",
      resistance: "Grass",
    },
    {
      name: "squirtle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Squirtle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
      weakness: "Grass/Electric",
      resistance: "Fire",
    },
    {
      name: "wartortle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Wartotle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
      weakness: "Grass/Electric",
      resistance: "Fire",
    },
    {
      name: "blastoise",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Blastoise.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
      weakness: "Grass/Electric",
      resistance: "Fire",
    },
    {
      name: "caterpie",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Caterpie.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "metapod",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Metapod.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "butterfree",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Butterfree.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "weedle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weedle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "kakuna",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kakuna.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "beedrill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Beedrill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "pidgey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Normal",
    },
    {
      name: "pidgeotto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgeotto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Normal",
    },
    {
      name: "pidgeot",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgeot.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Normal",
    },
    {
      name: "Rattata",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rattata.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Ghost",
    },
    {
      name: "Raticate",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raticate.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Ghost",
    },
    {
      name: "Spearow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Spearow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Ghost",
    },
    {
      name: "Fearow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Fearow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Ghost",
    },
    {
      name: "Ekans",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ekans.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "Arbok",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Arbok.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "Pikachu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pikachu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#fac000", "lightyellow"],
      weakness: "Ground",
      resistance: "Electric",
    },
    {
      name: "Raichu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raichu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#fac000", "lightyellow"],
      weakness: "Ground",
      resistance: "Electric",
    },
    {
      name: "Sandshrew",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Sandshrew.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "Sandslash",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Sandslash.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
  ];
  res.status(200).json(pokemonInfo);
}
