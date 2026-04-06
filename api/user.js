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
      type2: ["grass", "poison"],
    },
    {
      name: "ivysaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ivysaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "venusaur",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venusaur.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "violet"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "charmander",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmander.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "charmeleon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charmeleon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "charizard",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Charizard.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orangered"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire", "flying"],
    },
    {
      name: "squirtle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Squirtle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
      weakness: "Grass/Electric",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "wartortle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Wartotle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
      weakness: "Grass/Electric",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "blastoise",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Blastoise.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["#007bff", "lightblue"],
      weakness: "Grass/Electric",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "caterpie",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Caterpie.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
      type2: ["bug"],
    },
    {
      name: "metapod",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Metapod.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
      type2: ["bug"],
    },
    {
      name: "butterfree",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Butterfree.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
      type2: ["bug", "flying"],
    },
    {
      name: "weedle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weedle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
      type2: ["bug", "poison"],
    },
    {
      name: "kakuna",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kakuna.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
      type2: ["bug", "poison"],
    },
    {
      name: "beedrill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Beedrill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/bug.png?raw=true",
      color: ["#91a119", "lightgreen"],
      weakness: "Fire",
      resistance: "Normal",
      type2: ["bug", "poison"],
    },
    {
      name: "pidgey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Normal",
      type2: ["normal", "flying"],
    },
    {
      name: "pidgeotto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgeotto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Normal",
      type2: ["normal", "flying"],
    },
    {
      name: "pidgeot",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pidgeot.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Normal",
      type2: ["normal", "flying"],
    },
    {
      name: "rattata",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rattata.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Ghost",
      type2: ["normal"],
    },
    {
      name: "raticate",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raticate.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Ghost",
      type2: ["normal"],
    },
    {
      name: "spearow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Spearow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Ghost",
      type2: ["normal", "flying"],
    },
    {
      name: "fearow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Fearow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Electric",
      resistance: "Ghost",
      type2: ["normal", "flying"],
    },
    {
      name: "ekans",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ekans.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison"],
    },
    {
      name: "arbok",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Arbok.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison"],
    },
    {
      name: "pikachu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pikachu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#fac000", "lightyellow"],
      weakness: "Ground",
      resistance: "Electric",
      type2: ["electric"],
    },
    {
      name: "raichu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raichu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["#fac000", "lightyellow"],
      weakness: "Ground",
      resistance: "Electric",
      type2: ["electric"],
    },
    {
      name: "sandshrew",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Sandshrew.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["ground"],
    },
    {
      name: "sandslash",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Sandslash.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["ground"],
    },
    {
      name: "nidoran",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoran.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison"],
    },
    {
      name: "nidorina",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidorina.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison"],
    },
    {
      name: "nidoqueen",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoqueen.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#b884dd", "#b88e6f"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison", "ground"],
    },
    {
      name: "nidoran(male)",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoran(male).png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison"],
    },
    {
      name: "nidorino",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidorino.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison"],
    },
    {
      name: "nidoking",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Nidoking.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#b884dd", "#b88e6f"],
      weakness: "Psychic",
      resistance: "Bug",
      type2: ["poison", "ground"],
    },
    {
      name: "clefairy",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Clefairy.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["fairy"],
    },
    {
      name: "clefable",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Clefable.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["fairy"],
    },
    {
      name: "vulpix",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Vulpix.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightred"],
      weakness: "Water",
      resistance: "Fire",
      type2: ["fire"],
    },
    {
      name: "ninetales",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ninetales.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightred"],
      weakness: "Water",
      resistance: "Fire",
      type2: ["fire"],
    },
    {
      name: "jigglypuff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Jigglypuff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
      type2: ["normal", "fairy"],
    },
    {
      name: "wigglytuff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Wigglytuff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
      type2: ["normal", "fairy"],
    },
    {
      name: "zubat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Zubat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["poison", "flying"],
    },
    {
      name: "golbat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Golbat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["poison", "flying"],
    },
    {
      name: "oddish",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Oddish.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "gloom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gloom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "vileplume",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Vileplume.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "paras",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Paras.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["bug", "grass"],
    },
    {
      name: "parasect",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Parasect.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["bug", "grass"],
    },
    {
      name: "venonat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venonat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["bug", "poison"],
    },
    {
      name: "venomoth",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Venomoth.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["bug", "poison"],
    },
    {
      name: "diglett",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Diglett.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["ground"],
    },
    {
      name: "dugtrio",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dugtrio.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["ground"],
    },
    {
      name: "meowth",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Meowth.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
      type2: ["normal"],
    },
    {
      name: "persian",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Persian.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fighting",
      resistance: "Dark",
      type2: ["normal"],
    },
    {
      name: "psyduck",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Psyduck.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightblue"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["water"],
    },
    {
      name: "golduck",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Golduck.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightblue"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["water"],
    },
    {
      name: "mankey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mankey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["fighting"],
    },
    {
      name: "primeape",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Primeape.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["fighting"],
    },
    {
      name: "growlithe",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Growlithe.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
      type2: ["fire"],
    },
    {
      name: "arcanine",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Arcanine.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
      type2: ["fire"],
    },
    {
      name: "poliwag",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Poliwag.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "poliwhirl",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Poliwhirl.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "poliwrath",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Poliwrath.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water", "fighting"],
    },
    {
      name: "abra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Abra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "kadabra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kadabra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "alakazam",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Alakazam.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "machop",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Machop.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["brown", "lightbrown"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["fighting"],
    },
    {
      name: "machoke",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Machoke.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["brown", "lightbrown"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["fighting"],
    },
    {
      name: "machamp",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Machamp.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["brown", "lightbrown"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["fighting"],
    },
    {
      name: "bellsprout",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Bellsprout.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "weepinbell",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weepinbell.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "victreebel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Victreebel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "purple"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "poison"],
    },
    {
      name: "tentacool",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tentacool.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "purple"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water", "poison"],
    },
    {
      name: "tentacruel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tentacruel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "purple"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water", "poison"],
    },
    {
      name: "geodude",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Geodude.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["rock", "ground"],
    },
    {
      name: "graveler",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Graveler.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["rock", "ground"],
    },
    {
      name: "golem",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Golem.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["#915121", "#b88e6f"],
      weakness: "Steel",
      resistance: "Electric",
      type2: ["rock", "ground"],
    },
    {
      name: "ponyta",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ponyta.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
      type2: ["fire"],
    },
    {
      name: "rapidash",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rapidash.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "orange"],
      weakness: "Water",
      resistance: "Ground",
      type2: ["fire"],
    },
    {
      name: "slowpoke",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Slowpoke.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water", "psychic"],
    },
    {
      name: "slowbro",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Slowbro.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Fire",
      type2: ["water", "psychic"],
    },
    {
      name: "magnemite",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magnemite.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Grass",
      resistance: "Water",
      type2: ["electric", "steel"],
    },
    {
      name: "magneton",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magneton.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Grass",
      resistance: "Water",
      type2: ["electric", "steel"],
    },
    {
      name: "farfetch'd",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Farfetch'd.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "aliceblue"],
      weakness: "Fighting",
      resistance: "Flying",
      type2: ["normal", "flying"],
    },
    {
      name: "doduo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Doduo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "aliceblue"],
      weakness: "Fighting",
      resistance: "Flying",
      type2: ["normal", "flying"],
    },
    {
      name: "dodrio",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dodrio.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/flying.png?raw=true",
      color: ["gray", "aliceblue"],
      weakness: "Fighting",
      resistance: "Flying",
      type2: ["normal", "flying"],
    },
    {
      name: "seel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Seel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
      type2: ["water"],
    },
    {
      name: "dewgong",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dewgong.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Electric",
      resistance: "Water",
      type2: ["water", "ice"],
    },
    {
      name: "grimer",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Grimer.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["poison"],
    },
    {
      name: "muk",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Muk.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["poison"],
    },
    {
      name: "shellder",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Shellder.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Water",
      type2: ["water"],
    },
    {
      name: "cloyster",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Cloyster.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "aqua"],
      weakness: "Electric",
      resistance: "Water",
      type2: ["water", "ice"],
    },
    {
      name: "gastly",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gastly.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["ghost", "poison"],
    },
    {
      name: "haunter",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Haunter.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["ghost", "poison"],
    },
    {
      name: "gengar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gengar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/poison.png?raw=true",
      color: ["#5e2a84", "#b884dd"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["ghost", "poison"],
    },
    {
      name: "onix",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Onix.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/ground.png?raw=true",
      color: ["brown", "burlywood"],
      weakness: "Fighting",
      resistance: "Rock",
      type2: ["rock", "ground"],
    },

    {
      name: "drowzee",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Drowzee.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "hypno",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Hypno.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "krabby",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Krabby.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Steel",
      type2: ["water"],
    },
    {
      name: "kingler",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kingler.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Electric",
      resistance: "Steel",
      type2: ["water"],
    },
    {
      name: "voltorb",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Voltorb.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Steel",
      type2: ["electric"],
    },
    {
      name: "electrode",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Electrode.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Steel",
      type2: ["electric"],
    },
    {
      name: "exeggcute",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Exeggcute.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "psychic"],
    },
    {
      name: "exeggutor",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Exeggutor.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass", "psychic"],
    },

    {
      name: "cubone",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Cubone.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["ground"],
    },
    {
      name: "marowak",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Marowak.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["ground"],
    },
    {
      name: "hitmonlee",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Hitmonlee.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Psychic",
      resistance: "Normal",
      type2: ["fighting"],
    },
    {
      name: "hitmonchan",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Hitmonchan.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Psychic",
      resistance: "None",
      type2: ["fighting"],
    },
    {
      name: "lickitung",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Lickitung.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "koffing",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Koffing.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Psychic",
      resistance: "Steel",
      type2: ["poison"],
    },
    {
      name: "weezing",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Weezing.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Psychic",
      resistance: "Steel",
      type2: ["poison"],
    },
    {
      name: "rhyhorn",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rhyhorn.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["ground", "rock"],
    },
    {
      name: "rhydon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Rhydon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["ground", "rock"],
    },
    {
      name: "chansey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Chansey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "tangela",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tangela.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "kangaskhan",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kangaskhan.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "horsea",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Horsea.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "seadra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Seadra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "goldeen",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Goldeen.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "seaking",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Seaking.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "staryu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Staryu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "starmie",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Starmie.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water", "psychic"],
    },
    {
      name: "mr-mime",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mr-mime.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic", "fairy"],
    },
    {
      name: "scyther",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Scyther.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "flying"],
    },
    {
      name: "jynx",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Jynx.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "Fighting",
      type2: ["ice", "psychic"],
    },
    {
      name: "electabuzz",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Electabuzz.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "magmar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magmar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "pinsir",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pinsir.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug"],
    },
    {
      name: "tauros",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tauros.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "magikarp",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Magikarp.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water"],
    },
    {
      name: "gyarados",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Gyarados.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["water", "flying"],
    },
    {
      name: "lapras",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Lapras.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "None",
      type2: ["water", "ice"],
    },
    {
      name: "ditto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ditto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "eevee",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Eevee.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "vaporeon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Vaporeon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water"],
    },
    {
      name: "jolteon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Jolteon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "flareon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Flareon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "porygon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Porygon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "omanyte",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Omanyte.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Fire",
      type2: ["rock", "water"],
    },
    {
      name: "omastar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Omastar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Fire",
      type2: ["rock", "water"],
    },
    {
      name: "kabuto",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kabuto.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Fire",
      type2: ["rock", "water"],
    },
    {
      name: "kabutops",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Kabutops.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Fire",
      type2: ["rock", "water"],
    },
    {
      name: "aerodactyl",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Aerodactyl.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["rock", "flying"],
    },
    {
      name: "snorlax",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Snorlax.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "wheat"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "articuno",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Articuno.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "Fighting",
      type2: ["ice", "flying"],
    },
    {
      name: "zapdos",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Zapdos.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["electric", "flying"],
    },
    {
      name: "moltres",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Moltres.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Fighting",
      type2: ["fire", "flying"],
    },
    {
      name: "dratini",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dratini.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Fairy",
      resistance: "Grass",
      type2: ["dragon"],
    },
    {
      name: "dragonair",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dragonair.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Fairy",
      resistance: "Grass",
      type2: ["dragon"],
    },
    {
      name: "dragonite",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Dragonite.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Fairy",
      resistance: "Fighting",
      type2: ["dragon", "flying"],
    },
    {
      name: "mewtwo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mewtwo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "None",
      type2: ["psychic"],
    },
    {
      name: "mew",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Mew.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "chikorita",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Chikorita.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "bayleef",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Bayleef.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "meganium",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Meganium.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "cyndaquil",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Cyndaquil.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "quilava",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Quilava.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "typhlosion",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Typhlosion.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "totodile",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Totodile.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "croconaw",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Croconaw.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "feraligatr",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Feraligatr.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "sentret",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Sentret.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "wheat"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "furret",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Furret.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "wheat"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "hoothoot",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Hoothoot.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["normal", "flying"],
    },
    {
      name: "noctowl",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Noctowl.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["normal", "flying"],
    },
    {
      name: "ledyba",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Ledyba.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "flying"],
    },
    {
      name: "ledian",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Ledian.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "flying"],
    },
    {
      name: "spinarak",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Spinarak.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "poison"],
    },
    {
      name: "ariados",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Ariados.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "poison"],
    },
    {
      name: "crobat",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Crobat.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["poison", "flying"],
    },
    {
      name: "chinchou",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Chinchou.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Steel",
      type2: ["water", "electric"],
    },
    {
      name: "lanturn",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Lanturn.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Steel",
      type2: ["water", "electric"],
    },
    {
      name: "pichu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Pichu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "cleffa",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Cleffa.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Metal",
      resistance: "Dark",
      type2: ["fairy"],
    },
    {
      name: "igglybuff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Igglybuff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Metal",
      resistance: "Dark",
      type2: ["normal", "fairy"],
    },
    {
      name: "togepi",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Togepi.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Metal",
      resistance: "None",
      type2: ["fairy"],
    },
    {
      name: "togetic",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Togetic.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Metal",
      resistance: "Fighting",
      type2: ["fairy", "flying"],
    },
    {
      name: "natu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Natu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["psychic", "flying"],
    },
    {
      name: "xatu",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Xatu.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["psychic", "flying"],
    },
    {
      name: "mareep",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Mareep.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "flaaffy",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Flaaffy.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "ampharos",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Ampharos.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "bellossom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Bellossom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "marill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Marill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water", "fairy"],
    },
    {
      name: "azumarill",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Azumarill.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water", "fairy"],
    },
    {
      name: "sudowoodo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Sudowoodo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Fire",
      type2: ["rock"],
    },
    {
      name: "politoed",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Politoed.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fire",
      type2: ["water"],
    },
    {
      name: "hoppip",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Hoppip.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["grass", "flying"],
    },
    {
      name: "skiploom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Skiploom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["grass", "flying"],
    },
    {
      name: "jumpluff",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Jumpluff.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["grass", "flying"],
    },
    {
      name: "aipom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Aipom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["gray", "wheat"],
      weakness: "Fighting",
      resistance: "Psychic",
      type2: ["normal"],
    },
    {
      name: "sunkern",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Sunkern.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "sunflora",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Sunflora.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "yanma",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Yanma.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "flying"],
    },
    {
      name: "wooper",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Wooper.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["water", "ground"],
    },
    {
      name: "quagsire",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Quagsire.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["water", "ground"],
    },
    {
      name: "espeon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Espeon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Psychic",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "umbreon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Umbreon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Grass",
      resistance: "Psychic",
      type2: ["dark"],
    },
    {
      name: "murkrow",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Murkrow.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Lightning",
      resistance: "Psychic",
      type2: ["dark", "flying"],
    },
    {
      name: "slowking",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Slowking.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Grass",
      resistance: "None",
      type2: ["water", "psychic"],
    },
    {
      name: "misdreavus",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Misdreavus.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Darkness",
      resistance: "Fighting",
      type2: ["ghost"],
    },
    {
      name: "unown",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Unown.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "None",
      type2: ["psychic"],
    },
    {
      name: "wobbuffet",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Wobbuffet.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Ghost",
      resistance: "Fighting",
      type2: ["psychic"],
    },
    {
      name: "girafarig",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Girafarig.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Darkness",
      resistance: "Fighting",
      type2: ["normal", "psychic"],
    },
    {
      name: "pineco",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Pineco.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug"],
    },
    {
      name: "forretress",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Forretress.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/metal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fire",
      resistance: "Psychic",
      type2: ["bug", "steel"],
    },
    {
      name: "dunsparce",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Dunsparce.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "gligar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Gligar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["brown", "wheat"],
      weakness: "Water",
      resistance: "Fighting",
      type2: ["ground", "flying"],
    },
    {
      name: "steelix",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Steelix.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/metal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fire",
      resistance: "Psychic",
      type2: ["steel", "ground"],
    },
    {
      name: "snubbull",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Snubbull.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Metal",
      resistance: "None",
      type2: ["fairy"],
    },
    {
      name: "granbull",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Granbull.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Metal",
      resistance: "None",
      type2: ["fairy"],
    },
    {
      name: "qwilfish",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Qwilfish.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water", "poison"],
    },
    {
      name: "scizor",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Scizor.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/metal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fire",
      resistance: "Psychic",
      type2: ["bug", "steel"],
    },
    {
      name: "shuckle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Shuckle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Water",
      resistance: "None",
      type2: ["bug", "rock"],
    },
    {
      name: "heracross",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Heracross.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug", "fighting"],
    },
    {
      name: "sneasel",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Sneasel.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Fighting",
      resistance: "Psychic",
      type2: ["dark", "ice"],
    },
    {
      name: "teddiursa",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Teddiursa.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "ursaring",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Ursaring.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "slugma",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Slugma.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "magcargo",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Magcargo.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire", "rock"],
    },
    {
      name: "swinub",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Swinub.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "Lightning",
      type2: ["ice", "ground"],
    },
    {
      name: "piloswine",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Piloswine.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "Lightning",
      type2: ["ice", "ground"],
    },
    {
      name: "corsola",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Corsola.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Fire",
      type2: ["water", "rock"],
    },
    {
      name: "remoraid",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Remoraid.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water"],
    },
    {
      name: "octillery",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Octillery.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water"],
    },
    {
      name: "delibird",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Delibird.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "Fighting",
      type2: ["ice", "flying"],
    },
    {
      name: "mantine",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Mantine.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["water", "flying"],
    },
    {
      name: "skarmory",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Skarmory.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/metal.png?raw=true",
      color: ["gray", "lightgray"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["steel", "flying"],
    },
    {
      name: "houndour",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Houndour.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Water",
      resistance: "Psychic",
      type2: ["dark", "fire"],
    },
    {
      name: "houndoom",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Houndoom.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Water",
      resistance: "Psychic",
      type2: ["dark", "fire"],
    },
    {
      name: "kingdra",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Kingdra.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/dragon.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Fairy",
      resistance: "Fire",
      type2: ["water", "dragon"],
    },
    {
      name: "phanpy",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Phanpy.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["ground"],
    },
    {
      name: "donphan",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Donphan.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["ground"],
    },
    {
      name: "porygon2",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Porygon2.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "stantler",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Stantler.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "smeargle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Smeargle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "tyrogue",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Tyrogue.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Psychic",
      resistance: "None",
      type2: ["fighting"],
    },
    {
      name: "hitmontop",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Hitmontop.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Psychic",
      resistance: "None",
      type2: ["fighting"],
    },
    {
      name: "smoochum",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Smoochum.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Metal",
      resistance: "None",
      type2: ["ice", "psychic"],
    },
    {
      name: "elekid",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Elekid.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "magby",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen2/blob/main/Magby.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "miltank",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Miltank.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "blissey",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Blissey.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "raikou",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Raikou.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/electric.png?raw=true",
      color: ["yellow", "lightyellow"],
      weakness: "Fighting",
      resistance: "Metal",
      type2: ["electric"],
    },
    {
      name: "entei",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Entei.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "suicune",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Suicune.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water"],
    },
    {
      name: "larvitar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Larvitar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["rock", "ground"],
    },
    {
      name: "pupitar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Pupitar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fighting.png?raw=true",
      color: ["orange", "lightorange"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["rock", "ground"],
    },
    {
      name: "tyranitar",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Tyranitar.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Fighting",
      resistance: "Psychic",
      type2: ["rock", "dark"],
    },
    {
      name: "lugia",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Lugia.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/psychic.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Lightning",
      resistance: "Fighting",
      type2: ["psychic", "flying"],
    },
    {
      name: "ho-oh",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Ho-oh.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Fighting",
      type2: ["fire", "flying"],
    },
    {
      name: "celebi",
      image:
        "https://github.com/Adornadowilliam2/pokemon-api/blob/images/Celebi.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["psychic", "grass"],
    },
    {
      name: "treecko",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Treecko.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "grovyle",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Grovyle.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "sceptile",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Sceptile.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Water",
      type2: ["grass"],
    },
    {
      name: "torchic",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Torchic.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "Grass",
      type2: ["fire"],
    },
    {
      name: "combusken",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Combusken.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "None",
      type2: ["fire", "fighting"],
    },
    {
      name: "blaziken",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Blaziken.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/fire.png?raw=true",
      color: ["red", "lightcoral"],
      weakness: "Water",
      resistance: "None",
      type2: ["fire", "fighting"],
    },
    {
      name: "mudkip",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Mudkip.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Lightning",
      resistance: "None",
      type2: ["water"],
    },
    {
      name: "marshtomp",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Marshtomp.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["water", "ground"],
    },
    {
      name: "swampert",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Swampert.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/water.png?raw=true",
      color: ["blue", "lightblue"],
      weakness: "Grass",
      resistance: "Lightning",
      type2: ["water", "ground"],
    },
    {
      name: "poochyena",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Poochyena.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Grass",
      resistance: "Psychic",
      type2: ["dark"],
    },
    {
      name: "mightyena",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Mightyena.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/darkness.png?raw=true",
      color: ["purple", "mediumpurple"],
      weakness: "Grass",
      resistance: "Psychic",
      type2: ["dark"],
    },
    {
      name: "zigzagoon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Zigzagoon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "linoone",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Linoone.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/normal.png?raw=true",
      color: ["pink", "lightpink"],
      weakness: "Fighting",
      resistance: "None",
      type2: ["normal"],
    },
    {
      name: "wurmple",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Wurmple.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug"],
    },
    {
      name: "silcoon",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Silcoon.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug"],
    },
    {
      name: "beautifly",
      image:
        "https://github.com/Adornadowilliam2/pokemon-gen3/blob/main/Beautifly.png?raw=true",
      type: "https://github.com/Adornadowilliam2/pokemon-api/blob/energy/grass.png?raw=true",
      color: ["green", "lightgreen"],
      weakness: "Fire",
      resistance: "Fighting",
      type2: ["bug"],
    },
  ];
  res.status(200).json(pokemonInfo);
}
