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
      name: "rattata",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rattata.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Ghost",
    },
    {
      name: "raticate",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raticate.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Ghost",
    },
    {
      name: "spearow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Spearow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Ghost",
    },
    {
      name: "fearow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Fearow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Ghost",
    },
    {
      name: "ekans",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ekans.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "arbok",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Arbok.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "pikachu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pikachu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#fac000", "lightyellow"],
      weakness: "Ground",
      resistance: "Electric",
    },
    {
      name: "raichu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raichu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#fac000", "lightyellow"],
      weakness: "Ground",
      resistance: "Electric",
    },
    {
      name: "sandshrew",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Sandshrew.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "sandslash",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Sandslash.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "nidoran",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoran.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "nidorina",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidorina.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "nidoqueen",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoqueen.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#b884dd", "#b88e6f"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "nidoran(male)",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoran(male).png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "nidorino",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidorino.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "nidoking",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoking.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#b884dd", "#b88e6f"],
      weakness: "Psychic",
      resistance: "Bug",
    },
    {
      name: "clefairy",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Clefairy.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "clefable",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Clefable.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "vulpix",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Vulpix.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightred"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "ninetales",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ninetales.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightred"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "jigglypuff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Jigglypuff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
    },
    {
      name: "wigglytuff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Wigglytuff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
    },
    {
      name: "zubat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Zubat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "golbat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Golbat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "oddish",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Oddish.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "gloom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gloom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "vileplume",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Vileplume.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "paras",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Paras.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "parasect",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Parasect.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "venonat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venonat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "venomoth",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venomoth.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "diglett",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Diglett.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "dugtrio",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dugtrio.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "meowth",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Meowth.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
    },
    {
      name: "persian",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Persian.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
    },
    {
      name: "psyduck",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Psyduck.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightblue"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "golduck",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Golduck.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightblue"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "mankey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mankey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "primeape",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Primeape.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "growlithe",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Growlithe.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
    },
    {
      name: "arcanine",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Arcanine.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
    },
    {
      name: "poliwag",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Poliwag.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "poliwhirl",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Poliwhirl.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "poliwrath",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Poliwrath.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
  ];
  res.status(200).json(pokemonInfo);
}
