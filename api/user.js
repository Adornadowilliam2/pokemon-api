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
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "metapod",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Metapod.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "butterfree",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Butterfree.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "weedle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weedle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "kakuna",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kakuna.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
    },
    {
      name: "beedrill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Beedrill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
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
    {
      name: "abra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Abra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "kadabra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kadabra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "alakazam",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Alakazam.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "machop",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Machop.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "machoke",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Machoke.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "machamp",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Machamp.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "bellsprout",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Bellsprout.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "weepinbell",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weepinbell.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "victreebel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Victreebel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "tentacool",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tentacool.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "purple"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "tentacruel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tentacruel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "purple"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "geodude",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Geodude.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "graveler",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Graveler.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "golem",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Golem.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
    },
    {
      name: "ponyta",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ponyta.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
    },
    {
      name: "rapidash",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rapidash.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
    },
    {
      name: "slowpoke",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Slowpoke.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "slowbro",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Slowbro.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "magnemite",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magnemite.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Grass",
      resistance: "Water",
    },
    {
      name: "magneton",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magneton.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Grass",
      resistance: "Water",
    },
    {
      name: "farfetch'd",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Farfetch'd.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "aliceblue"],
      weakness: "Fighting",
      resistance: "Flying",
    },
    {
      name: "doduo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Doduo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "aliceblue"],
      weakness: "Fighting",
      resistance: "Flying",
    },
    {
      name: "dodrio",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dodrio.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "aliceblue"],
      weakness: "Fighting",
      resistance: "Flying",
    },
    {
      name: "seel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Seel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "dewgong",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dewgong.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "grimer",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Grimer.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "muk",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Muk.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "shellder",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Shellder.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "cloyster",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Cloyster.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "gastly",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gastly.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "haunter",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Haunter.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "gengar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gengar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "onix",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Onix.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Fighting",
      resistance: "Rock",
    },
    {
      name: "drowzee",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Drowzee.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "hypno",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Hypno.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "krabby",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Krabby.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "kingler",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kingler.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "voltorb",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Voltorb.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Grass",
      resistance: "Water",
    },
    {
      name: "electrode",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Electrode.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Grass",
      resistance: "Water",
    },
    {
      name: "exeggcute",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Exeggcute.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightpink"],
      weakness: "Fire",
      resistance: "Grass",
    },
    {
      name: "exeggutor",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Exeggutor.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightpink"],
      weakness: "Fire",
      resistance: "Grass",
    },
    {
      name: "cubone",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Cubone.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Water",
      resistance: "Normal",
    },
    {
      name: "marowak",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Marowak.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Water",
      resistance: "Normal",
    },
    {
      name: "hitmonlee",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Hitmonlee.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "burlywood"],
      weakness: "Flying",
      resistance: "Normal",
    },
    {
      name: "hitmonchan",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Hitmonchan.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "burlywood"],
      weakness: "Flying",
      resistance: "Normal",
    },
    {
      name: "lickitung",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Lickitung.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "koffing",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Koffing.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "weezing",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weezing.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
    },
    {
      name: "rhyhorn",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rhyhorn.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Water",
      resistance: "Normal",
    },
    {
      name: "rhydon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rhydon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Water",
      resistance: "Normal",
    },
    {
      name: "chansey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Chansey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "tangela",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tangela.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "kangaskhan",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kangaskhan.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "horsea",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Horsea.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
    },
    {
      name: "seadra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Seadra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "purple"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "goldeen",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Goldeen.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "seaking",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Seaking.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "staryu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Staryu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "starmie",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Starmie.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "mr-mime",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mr_Mime.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Ghost",
      resistance: "Fighting",
    },
    {
      name: "scyther",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Scyther.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "jynx",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Jynx.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Fire",
      resistance: "Fighting",
    },
    {
      name: "electabuzz",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Electabuzz.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Ground",
      resistance: "Steel",
    },
    {
      name: "magmar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magmar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Steel",
    },
    {
      name: "pinsir",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pinsir.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "tauros",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tauros.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "magikarp",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magikarp.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "gyarados",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gyarados.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "lapras",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Lapras.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "ditto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ditto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "eevee",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Eevee.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "vaporeon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Vaporeon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
    },
    {
      name: "jolteon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Jolteon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Ground",
      resistance: "Steel",
    },
    {
      name: "flareon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Flareon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Steel",
    },
    {
      name: "porygon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Porygon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "omanyte",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Omanyte.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "burlywood"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "omastar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Omastar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "burlywood"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "kabuto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kabuto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "burlywood"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "kabutops",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kabutops.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "burlywood"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "aerodactyl",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Aerodactyl.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "electric",
      resistance: "Fire",
    },
    {
      name: "snorlax",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Snorlax.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "articuno",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Articuno.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Aqua",
      resistance: "Normal",
    },
    {
      name: "zapdos",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Zapdos.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Ground",
      resistance: "Steel",
    },
    {
      name: "moltres",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Moltres.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Steel",
    },
    {
      name: "dratini",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dratini.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["crimson", "red"],
      weakness: "Ice",
      resistance: "Steel",
    },
    {
      name: "dragonair",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dragonair.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["crimson", "red"],
      weakness: "Ice",
      resistance: "Steel",
    },
    {
      name: "dragonite",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dragonite.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["crimson", "red"],
      weakness: "Ice",
      resistance: "Steel",
    },
    {
      name: "mewtwo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mewtwo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Normal",
    },
    {
      name: "mew",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mewing.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Normal",
    },
    {
      name: "chikorita",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/chirokorita.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "bayleef",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/bayleef.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "meganium",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/meganium.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "cyndaquil",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/cyndaquil.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "quilava",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/quilava.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "typhlosion",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/typhlosion.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "totodile",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/totodile.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "croconaw",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/croconaw.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "feraligatr",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/feraligatr.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "sentret",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/sentret.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["brown", "saddlebrown"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "furret",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/furret.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["brown", "saddlebrown"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "hoothoot",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/hoothoot.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["brown", "saddlebrown"],
      weakness: "Electric",
      resistance: "Normal",
    },
    {
      name: "noctowl",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/noctowl.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["brown", "saddlebrown"],
      weakness: "Electric",
      resistance: "Normal",
    },
    {
      name: "ledyba",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/ledyba.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "ledian",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/ledian.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "spinarak",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/spinarak.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "ariados",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/ariados.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "crobat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/crobat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["violet", "purple"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "chinchou",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/chinchou.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "lanturn",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/lanturn.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "pichu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/pichu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["yellow", "gold"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "cleffa",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/cleffa.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "hotpink"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "igglybuff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/igglybuff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "hotpink"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "togepi",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/togepi.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["silver", "#ccc"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "togetic",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/togetic.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["silver", "#ccc"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "natu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/natu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["pink", "#ccc"],
      weakness: "Dark",
      resistance: "Fighting",
    },
    {
      name: "xatu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/xatu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["pink", "#ccc"],
      weakness: "Dark",
      resistance: "Fighting",
    },
    {
      name: "mareep",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/mareep.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "gold"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "flaaffy",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/flaaffy.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "gold"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "ampharos",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/ampharos.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "gold"],
      weakness: "Water",
      resistance: "Fire",
    },
    {
      name: "bellossom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/bellossom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "marill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/marill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "azumarill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/azumarill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "sudowoodo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/sudowoodo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["brown", "saddlebrown"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "politoed",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/politoed.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "hoppip",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/hoppip.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "skiploom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/skiploom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "jumpluff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/jumpluff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "aipom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/aipom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["silver", "#ccc"],
      weakness: "Fighting",
      resistance: "Normal",
    },
    {
      name: "sunkern",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/sunkern.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "sunflora",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/sunflora.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
    },
    {
      name: "yanma",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/yanma.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "wooper",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/wooper.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "quagsire",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/quagsire.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Grass",
      resistance: "Fire",
    },
    {
      name: "espeon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/espeon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["purple", "plum"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "umbreon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/umbreon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["black", "darkgray"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "murkrow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/murkrow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["black", "#ccc"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "slowking",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/sloking.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["blue", "hotpink"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "misdreavus",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/misdreavus.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["black", "darkgray"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "wobbuffet",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/wobbuffet.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["black", "darkgray"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "girafarig",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/girafarig.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dark.png?raw=true",
      color: ["black", "darkgray"],
      weakness: "Bug",
      resistance: "Ghost",
    },
    {
      name: "pineco",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/pineco.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Grass",
    },
    {
      name: "forretress",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/forretress.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Grass",
    },
    {
      name: "dunsparce",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/dunsparce.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fire",
      resistance: "Grass",
    },
    {
      name: "gligar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/gligar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["brown", "#ccc"],
      weakness: "Fire",
      resistance: "Grass",
    },
    {
      name: "steelix",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/steelix.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/steel.png?raw=true",
      color: ["gray", "brown"],
      weakness: "Fire",
      resistance: "Grass",
    },
  ];
  res.status(200).json(pokemonInfo);
}
