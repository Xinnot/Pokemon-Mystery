const pokemons = [
  {
    nome: "Bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    nome: "Ivysaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  },
  {
    nome: "Venusaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    nome: "Charmander",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    nome: "Charmeleon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  },
  {
    nome: "Charizard",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    nome: "Squirtle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    nome: "Wartotle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  },
  {
    nome: "Blastoise",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  },
  {
    nome: "Caterpie",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  },
  {
    nome: "Metapod",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
  },
  {
    nome: "Butterfree",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  },
  {
    nome: "Weedle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
  },
  {
    nome: "Kakuna",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
  },
  {
    nome: "Beedrill",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
  },
  {
    nome: "Pidgey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
  },
  {
    nome: "Pidgeotto",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
  },
  {
    nome: "Pidgeot",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
  },
  {
    nome: "Rattata",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
  },
  {
    nome: "Raticate",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
  },
  {
    nome: "Spearow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"
  },
  {
    nome: "Fearow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"
  },
  {
    nome: "Ekans",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"
  },
  {
    nome: "Arbok",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
  },
  {
    nome: "Pikachu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    nome: "Raichu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
  },
  {
    nome: "Sandshrew",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"
  },
  {
    nome: "Sandslash",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"
  },
  {
    nome: "Nidoran Fêmea",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"
  },
  {
    nome: "Nindorina",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"
  },
  {
    nome: "Nidoqueen",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png"
  },
  {
    nome: "Nidoran Macho",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png"
  },
  {
    nome: "Nidorino",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png"
  },
  {
    nome: "Nidoking",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png"
  },
  {
    nome: "Clefairy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
  },
  {
    nome: "Clefable",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png"
  },
  {
    nome: "Vulpix",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png"
  },
  {
    nome: "Ninetales",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
  },
  {
    nome: "Jigglypuff",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
  },
  {
    nome: "Wigglypuff",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"
  },
  {
    nome: "Zubat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png"
  },
  {
    nome: "Golbat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png"
  },
  {
    nome: "Oddish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png"
  },
  {
    nome: "Gloom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png"
  },
  {
    nome: "Vileplume",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png"
  },
  {
    nome: "Paras",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png"
  },
  {
    nome: "Parasect",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png"
  },
  {
    nome: "Venonat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png"
  },
  {
    nome: "Venomoth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png"
  },
  {
    nome: "Diglett",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png"
  },
  {
    nome: "Dugtrio",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png"
  },
  {
    nome: "Meowth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"
  },
  {
    nome: "Persian",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png"
  },
  {
    nome: "Psyduck",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
  },
  {
    nome: "Golduck",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png"
  },
  {
    nome: "Mankey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png"
  },
  {
    nome: "Primeape",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png"
  },
  {
    nome: "Growlithe",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"
  },
  {
    nome: "Arcanine",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"
  },
  {
    nome: "Poliwag",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png"
  },
  {
  nome: "Poliwhirl",
  img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png"
  },
  {
    nome: "Poliwrath",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png"
  },
  {
    nome: "Abra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png"
  },
  {
    nome: "Kadabra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
  },
  {
    nome: "Alakazam",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"
  },
  {
    nome: "Machop",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png"
  },
  {
    nome: "Machoke",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png"
  },
  {
    nome: "Machamp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"
  },
  {
    nome: "Bellsprout",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png"
  },
  {
    nome: "Weepinbell",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png"
  },
  {
    nome: "Victreebel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png"
  },
  {
    nome: "Tentacool",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png"
  },
  {
    nome: "Tentacruel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png"
  },
  {
    nome: "Geodude",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png"
  },
  {
    nome: "Graveler",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png"
  },
  {
    nome: "Golem",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png"
  },
  {
    nome: "Ponyta",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png"
  },
  {
    nome: "Rapidash",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png"
  },
  {
    nome: "Slowpoke",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png"
  },
  {
    nome: "Slowbro",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png"
  },
  {
    nome: "Magnemite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png"
  },
  {
    nome: "Magneton",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png"
  },
  {
    nome: "Farfetchd",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png"
  },
  {
    nome: "Doduo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png"
  },
  {
    nome: "Dodrio",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png"
  },
  {
    nome: "Seel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png"
  },
  {
    nome: "Dewgong",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png"
  },
  {
    nome: "Grimer",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png"
  },
  {
    nome: "Muk",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png"
  },
  {
    nome: "Shellder",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png"
  },
  {
    nome: "Cloyster",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png"
  },
  {
    nome: "Gastly",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"
  },
  {
    nome: "Haunter",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"
  },
  {
    nome: "Gengar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
  },
  {
    nome: "Onix",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"
  },
  {
    nome: "Drowzee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png"
  },
  {
    nome: "Hypno",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png"
  },
  {
    nome: "Krabby",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png"
  },
  {
    nome: "Kingler",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png"
  },
  {
    nome: "Voltorb",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png"
  },
  {
    nome: "Electrode",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png"
  },
  {
    nome: "Exeggcute",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png"
  },
  {
    nome: "Exeggutor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png"
  },
  {
    nome: "Cubone",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png"
  },
  {
    nome: "Marowak",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png"
  },
  {
    nome: "Hitmonlee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png"
  },
  {
    nome: "Hitmonchan",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png"
  },
  {
    nome: "Lickitung",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png"
  },
  {
    nome: "Koffing",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png"
  },
  {
    nome: "Weezing",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png"
  },
  {
    nome: "Rhyhorn",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png"
  },
  {
    nome: "Rhydon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png"
  },
  {
    nome: "Chansey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png"
  },
  {
    nome: "Tangela",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png"
  },
  {
    nome: "Kangaskhan",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png"
  },
  {
    nome: "Horsea",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png"
  },
  {
    nome: "Seadra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png"
  },
  {
    nome: "Goldeen",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png"
  },
  {
    nome: "Seaking",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png"
  },
  {
    nome: "Staryu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png"
  },
  {
    nome: "Starmie",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png"
  },
  {
    nome: "Mr. Mime",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png"
  },
  {
    nome: "Scyther",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"
  },
  {
    nome: "Jynx",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png"
  },
  {
    nome: "Electabuzz",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png"
  },
  {
    nome: "Magmar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png"
  },
  {
    nome: "Pinsir",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png"
  },
  {
    nome: "Tauros",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png"
  },
  {
    nome: "Magikarp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"
  },
  {
    nome: "Gyarados",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"
  },
  {
    nome: "Lapras",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"
  },
  {
    nome: "Ditto",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
  },
  {
    nome: "Eevee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
  },
  {
    nome: "Vaporeon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png"
  },
  {
    nome: "Jolteon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png"
  },
  {
    nome: "Flareon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png"
  },
  {
    nome: "Porygon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png"
  },
  {
    nome: "Omanyte",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png"
  },
  {
    nome: "Omastar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png"
  },
  {
    nome: "Kabuto",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png"
  },
  {
    nome: "Kabutops",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png"
  },
  {
    nome: "Aerodactyl",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png"
  },
  {
    nome: "Snorlax",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
  },
  {
    nome: "Articuno",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png"
  },
  {
    nome: "Zapdos",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png"
  },
  {
    nome: "Moltres",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png"
  },
  {
    nome: "Dratini",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png"
  },
  {
    nome: "Dragonair",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png"
  },
  {
    nome: "Dragonite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
  },
  {
    nome: "Mewtwo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
  },
  {
    nome: "Mew",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
  },
  {
    nome: "Chikorita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
  },
  {
    nome: "Bayleef",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png"
  },
  {
    nome: "Meganium",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png"
  },
  {
    nome: "Cyndaquil",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
  },
  {
    nome: "Quilava",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png"
  },
  {
    nome: "Typhlosion",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png"
  },
  {
    nome: "Totodile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"
  },
  {
    nome: "Crononaw",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png"
  },
  {
    nome: "Feraligatr",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png"
  },
  {
    nome: "Sentret",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png"
  },
  {
    nome: "Furret",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png"
  },
  {
    nome: "Hoothoot",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png"
  },
  {
    nome: "Noctowl",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png"
  },
  {
    nome: "Ledyba",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png"
  },
  {
    nome: "Ledian",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png"
  },
  {
    nome: "Spinarak",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png"
  },
  {
    nome: "Ariados",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png"
  },
  {
    nome: "Crobat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png"
  },
  {
    nome: "Chinchou",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png"
  },
  {
    nome: "Lanturn",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png"
  },
  {
    nome: "Pichu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png"
  },
  {
    nome: "Cleffa",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png"
  },
  {
    nome: "Igglybuff",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png"
  },
  {
    nome: "Togepi",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png"
  },
  {
    nome: "Togetic",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png"
  },
  {
    nome: "Natu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png"
  },
  {
    nome: "Xatu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png"
  },
  {
    nome: "Mareep",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png"
  },
  {
    nome: "Flaafy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png"
  },
  {
    nome: "Ampharos",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png"
  },
  {
    nome: "Bellossom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png"
  },
  {
    nome: "Marill",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png"
  },
  {
    nome: "Azumarill",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png"
  },
  {
    nome: "Sudowoodo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png"
  },
  {
    nome: "Politoed",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png"
  },
  {
    nome: "Hoppip",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png"
  },
  {
    nome: "Skiploom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png"
  },
  {
    nome: "Jumpluff",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png"
  },
  {
    nome: "Aipom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png"
  },
  {
    nome: "Sunkern",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png"
  },
  {
    nome: "Sunflora",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png"
  },
  {
    nome: "Yanma",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png"
  },
  {
    nome: "Wooper",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png"
  },
  {
    nome: "Quagsire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png"
  },
  {
    nome: "Espeon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png"
  },
  {
    nome: "Umbreon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
  },
  {
    nome: "Murkrow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png"
  },
  {
    nome: "Slowking",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png"
  },
  {
    nome: "Misdreavus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png"
  },
  {
    nome: "Unown",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png"
  },
  {
    nome: "Wobbuffet",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png"
  },
  {
    nome: "Girafarig",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png"
  },
  {
    nome: "Pineco",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png"
  },
  {
    nome: "Forretress",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png"
  },
  {
    nome: "Dunsparce",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png"
  },
  {
    nome: "Gligar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png"
  },
  {
    nome: "Steelix",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png"
  },
  {
    nome: "Snubbull",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png"
  },
  {
    nome: "Grandbull",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png"
  },
  {
    nome: "Qwillfish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png"
  },
  {
    nome: "Scizor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png"
  },
  {
    nome: "Shuckle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png"
  },
  {
    nome: "Heracross",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png"
  },
  {
    nome: "Sneasel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png"
  },
  {
    nome: "Teddiursa",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png"
  },
  {
    nome: "Ursaring",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png"
  },
  {
    nome: "Slugma",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png"
  },
  {
    nome: "Magcargo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png"
  },
  {
    nome: "Swinub",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png"
  },
  {
    nome: "Piloswine",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png"
  },
  {
    nome: "Corsola",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png"
  },
  {
    nome: "Remoraid",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png"
  },
  {
    nome: "Octillery",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png"
  },
  {
    nome: "Delibird",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png"
  },
  {
    nome: "Mantine",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png"
  },
  {
    nome: "Skarmory",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png"
  },
  {
    nome: "Houndour",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png"
  },
  {
    nome: "Houndoom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png"
  },
  {
    nome: "Kingdra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png"
  },
  {
    nome: "Phanpy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png"
  },
  {
    nome: "Donphan",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png"
  },
  {
    nome: "Porygon2",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png"
  },
  {
    nome: "Stantler",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png"
  },
  {
    nome: "Smeargle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png"
  },
  {
    nome: "Tyrogue",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png"
  },
  {
    nome: "Hitmontop",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png"
  },
  {
    nome: "Smoochum",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png"
  },
  {
    nome: "Elekid",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png"
  },
  {
    nome: "Magby",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png"
  },
  {
    nome: "Miltank",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png"
  },
  {
    nome: "Blissey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png"
  },
  {
    nome: "Raikou",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png"
  },
  {
    nome: "Entei",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png"
  },
  {
    nome: "Suicune",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png"
  },
  {
    nome: "Larvitar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png"
  },
  {
    nome: "Pupitar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png"
  },
  {
    nome: "Tyranitar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png"
  },
  {
    nome: "Lugia",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png"
  },
  {
    nome: "Ho-Oh",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png"
  },
  {
    nome: "Celebi",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png"
  },
  {
    nome: "Treecko",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"
  },
  {
    nome: "Grovyle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png"
  },
  {
    nome: "Sceptile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png"
  },
  {
    nome: "Torchic",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
  },
  {
    nome: "Combusken",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png"
  },
  {
    nome: "Blaziken",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png"
  },
  {
    nome: "Mudkip",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
  },
  {
    nome: "Marshtomp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png"
  },
  {
    nome: "",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png"
  },
  {
    nome: "Poochyena",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png"
  },
  {
    nome: "Mightyena",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png"
  },
  {
    nome: "Zigzagoon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png"
  },
  {
    nome: "Linoone",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png"
  },
  {
    nome: "Wurmple",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png"
  },
  {
    nome: "Silcoon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png"
  },
  {
    nome: "Beautifly",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png"
  },
  {
    nome: "Cascoon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png"
  },
  {
    nome: "Dustox",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png"
  },
  {
    nome: "Lotad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png"
  },
  {
    nome: "Lombre",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png"
  },
  {
    nome: "Ludicolo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png"
  },
  {
    nome: "Seedot",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png"
  },
  {
    nome: "Nuzleaf",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png"
  },
  {
    nome: "Shiftry",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png"
  },
  {
    nome: "Taillow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png"
  },
  {
    nome: "Swellow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png"
  },
  {
    nome: "Wingull",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png"
  },
  {
    nome: "Pelipper",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png"
  },
  {
    nome: "Ralts",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png"
  },
  {
    nome: "Kirlia",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png"
  },
  {
    nome: "Gardevoir",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png"
  },
  {
    nome: "Surskit",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png"
  },
  {
    nome: "Masquerain",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png"
  },
  {
    nome: "Shroomish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png"
  },
  {
    nome: "Breloom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png"
  },
  {
    nome: "Slakoth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png"
  },
  {
    nome: "Vigoroth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png"
  },
  {
    nome: "Slaking",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png"
  },
  {
    nome: "Nincada",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png"
  },
  {
    nome: "Ninjask",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png"
  },
  {
    nome: "Shedinja",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png"
  },
  {
    nome: "Whismur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png"
  },
  {
    nome: "Loudred",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png"
  },
  {
    nome: "Exploud",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png"
  },
  {
    nome: "Makuhita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png"
  },
  {
    nome: "Hariyama",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png"
  },
  {
    nome: "Azurill",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png"
  },
  {
    nome: "Nosepass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png"
  },
  {
    nome: "Skitty",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png"
  },
  {
    nome: "Delcatty",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png"
  },
  {
    nome: "Sableye",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png"
  },
  {
    nome: "Mawile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png"
  },
  {
    nome: "Aron",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png"
  },
  {
    nome: "Lairon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png"
  },
  {
    nome: "Aggron",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png"
  },
  {
    nome: "Meditite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png"
  },
  {
    nome: "Medicham",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png"
  },
  {
    nome: "Electrike",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png"
  },
  {
    nome: "Manectric",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png"
  },
  {
    nome: "Plusle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png"
  },
  {
    nome: "Minun",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png"
  },
  {
    nome: "Volbeat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png"
  },
  {
    nome: "Illumise",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png"
  },
  {
    nome: "Roselia",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png"
  },
  {
    nome: "Gulpin",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png"
  },
  {
    nome: "Swalot",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png"
  },
  {
    nome: "Carvanha",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png"
  },
  {
    nome: "Sharpedo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png"
  },
  {
    nome: "Wailmer",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png"
  },
  {
    nome: "Wailord",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png"
  },
  {
    nome: "Numel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png"
  },
  {
    nome: "Camerupt",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png"
  },
  {
    nome: "Torkoal",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png"
  },
  {
    nome: "Spoink",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png"
  },
  {
    nome: "Grumpig",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png"
  },
  {
    nome: "Spinda",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png"
  },
  {
    nome: "Trapinch",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png"
  },
  {
    nome: "Vibrava",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png"
  },
  {
    nome: "Flygon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png"
  },
  {
    nome: "Cacnea",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png"
  },
  {
    nome: "Cactune",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png"
  },
  {
    nome: "Swablu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png"
  },
  {
    nome: "Altaria",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png"
  },
  {
    nome: "Zangoose",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png"
  },
  {
    nome: "Seviper",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png"
  },
  {
    nome: "Lunatone",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png"
  },
  {
    nome: "Solrock",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png"
  },
  {
    nome: "Barboach",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png"
  },
  {
    nome: "Whiscash",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png"
  },
  {
    nome: "Corphish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png"
  },
  {
    nome: "Crawdaunt",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png"
  },
  {
    nome: "Baltoy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png"
  },
  {
    nome: "Claydol",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png"
  },
  {
    nome: "Lileep",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png"
  },
  {
    nome: "Cradily",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png"
  },
  {
    nome: "Anorith",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png"
  },
  {
    nome: "Armaldo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png"
  },
  {
    nome: "Feebas",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png"
  },
  {
    nome: "Milotic",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png"
  },
  {
    nome: "Castform",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png"
  },
  {
    nome: "Kecleon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png"
  },
  {
    nome: "Shuppet",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png"
  },
  {
    nome: "Banette",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png"
  },
  {
    nome: "Duskull",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png"
  },
  {
    nome: "Dusclops",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png"
  },
  {
    nome: "Tropius",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png"
  },
  {
    nome: "Chimecho",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png"
  },
  {
    nome: "Absol",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png"
  },
  {
    nome: "Wynaut",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png"
  },
  {
    nome: "Snorunt",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png"
  },
  {
    nome: "Glalie",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png"
  },
  {
    nome: "Spheal",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png"
  },
  {
    nome: "Sealeo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png"
  },
  {
    nome: "Walrein",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png"
  },
  {
    nome: "Clamperl",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png"
  },
  {
    nome: "Huntail",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png"
  },
  {
    nome: "Gorebyss",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png"
  },
  {
    nome: "Relicanth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png"
  },
  {
    nome: "Luvdisc",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png"
  },
  {
    nome: "Bagon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png"
  },
  {
    nome: "Shelgon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png"
  },
  {
    nome: "Salamence",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png"
  },
  {
    nome: "Beldum",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png"
  },
  {
    nome: "Metang",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png"
  },
  {
    nome: "Metagross",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png"
  },
  {
    nome: "Regirock",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png"
  },
  {
    nome: "Regice",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png"
  },
  {
    nome: "Registeel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png"
  },
  {
    nome: "Latias",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png"
  },
  {
    nome: "Latios",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png"
  },
  {
    nome: "Kyogre",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png"
  },
  {
    nome: "Groudon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png"
  },
  {
    nome: "Rayquaza",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png"
  },
  {
    nome: "Jirachi",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png"
  },
  {
    nome: "Deoxys",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png"
  },
  {
    nome: "Turtwig",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png"
  },
  {
    nome: "Grotle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/388.png"
  },
  {
    nome: "Torterra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/389.png"
  },
  {
    nome: "Chimchar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png"
  },
  {
    nome: "Monferno",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/391.png"
  },
  {
    nome: "Infernape",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/392.png"
  },
  {
    nome: "Piplup",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png"
  },
  {
    nome: "Prinplup",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/394.png"
  },
  {
    nome: "Empoleon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/395.png"
  },
  {
    nome: "Starly",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/396.png"
  },
  {
    nome: "Staravia",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/397.png"
  },
  {
    nome: "Staraptor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/398.png"
  },
  {
    nome: "Bidoof",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png"
  },
  {
    nome: "Bibarel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/400.png"
  },
  {
    nome: "Kricketot",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/401.png"
  },
  {
    nome: "Kricketune",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/402.png"
  },
  {
    nome: "Shinx",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/403.png"
  },
  {
    nome: "Luxio",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/404.png"
  },
  {
    nome: "Luxray",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png"
  },
  {
    nome: "Budew",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/406.png"
  },
  {
    nome: "Roserade",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/407.png"
  },
  {
    nome: "Cranidos",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/408.png"
  },
  {
    nome: "Rampardos",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/409.png"
  },
  {
    nome: "Shieldon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/410.png"
  },
  {
    nome: "Bastiodon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/411.png"
  },
  {
    nome: "Burmy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/412.png"
  },
  {
    nome: "Wormadam",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/413.png"
  },
  {
    nome: "Mothim",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/414.png"
  },
  {
    nome: "Combee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/415.png"
  },
  {
    nome: "Vespiquen",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/416.png"
  },
  {
    nome: "Pachirisu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png"
  },
  {
    nome: "Buizel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/418.png"
  },
  {
    nome: "Floatzel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/419.png"
  },
  {
    nome: "Cherubi",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/420.png"
  },
  {
    nome: "Cherrim",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/421.png"
  },
  {
    nome: "Shellos",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/422.png"
  },
  {
    nome: "Gastrodon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/423.png"
  },
  {
    nome: "Ambipom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/424.png"
  },
  {
    nome: "Drifloon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/425.png"
  },
  {
    nome: "Drifblim",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/426.png"
  },
  {
    nome: "Buneary",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/427.png"
  },
  {
    nome: "Lopunny",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/428.png"
  },
  {
    nome: "Mismagius",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png"
  },
  {
    nome: "Honchkrow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png"
  },
  {
    nome: "Glameow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/431.png"
  },
  {
    nome: "Purugly",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/432.png"
  },
  {
    nome: "Chingling",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/433.png"
  },
  {
    nome: "Stunky",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/434.png"
  },
  {
    nome: "Stuntank",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/435.png"
  },
  {
    nome: "Bronzor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/436.png"
  },
  {
    nome: "Bronzong",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/437.png"
  },
  {
    nome: "Bonsly",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/438.png"
  },
  {
    nome: "Mime Jr.",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/439.png"
  },
  {
    nome: "Happiny",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/440.png"
  },
  {
    nome: "Chatot",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/441.png"
  },
  {
    nome: "Spiritomb",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/442.png"
  },
  {
    nome: "Gible",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/443.png"
  },
  {
    nome: "Gabite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/444.png"
  },
  {
    nome: "Garchomp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png"
  },
  {
    nome: "Munchlax",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/446.png"
  },
  {
    nome: "Riolu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/447.png"
  },
  {
    nome: "Lucario",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
  },
  {
    nome: "Hippopotas",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/449.png"
  },
  {
    nome: "Hippowdon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/450.png"
  },
  {
    nome: "Skorupi",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/451.png"
  },
  {
    nome: "Drapion",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/452.png"
  },
  {
    nome: "Croagunk",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/453.png"
  },
  {
    nome: "Toxicroak",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/454.png"
  },
  {
    nome: "Carnivine",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/455.png"
  },
  {
    nome: "Finneon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/456.png"
  },
  {
    nome: "Lumineon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/457.png"
  },
  {
    nome: "Mantyke",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png"
  },
  {
    nome: "Snover",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/459.png"
  },
  {
    nome: "Abomasnow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/460.png"
  },
  {
    nome: "Weavile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png"
  },
  {
    nome: "Magnezone",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/462.png"
  },
  {
    nome: "Lickilicky",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/463.png"
  },
  {
    nome: "Rhyperior",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/464.png"
  },
  {
    nome: "Tangrowth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/465.png"
  },
  {
    nome: "Electivire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png"
  },
  {
    nome: "Magmortar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/467.png"
  },
  {
    nome: "Togekiss",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png"
  },
  {
    nome: "Yanmega",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/469.png"
  },
  {
    nome: "Leafeon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png"
  },
  {
    nome: "Glaceon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png"
  },
  {
    nome: "Gliscor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png"
  },
  {
    nome: "Mamoswine",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/473.png"
  },
  {
    nome: "Porygon-Z",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/474.png"
  },
  {
    nome: "Gallade",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/475.png"
  },
  {
    nome: "Probopass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/476.png"
  },
  {
    nome: "Dusknoir",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/477.png"
  },
  {
    nome: "Froslass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png"
  },
  {
    nome: "Rotom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/479.png"
  },
  {
    nome: "Uxie",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/480.png"
  },
  {
    nome: "Mesprit",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/481.png"
  },
  {
    nome: "Azelf",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/482.png"
  },
  {
    nome: "Dialga",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png"
  },
  {
    nome: "Palkia",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png"
  },
  {
    nome: "Heatran",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/485.png"
  },
  {
    nome: "Regigigas",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/486.png"
  },
  {
    nome: "Giratina",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png"
  },
  {
    nome: "Cresselia",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/488.png"
  },
  {
    nome: "Phione",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/489.png"
  },
  {
    nome: "Manaphy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/490.png"
  },
  {
    nome: "Darkrai",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png"
  },
  {
    nome: "Shaymin",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/492.png"
  },
  {
    nome: "Arceus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png"
  },
  {
    nome: "Victini",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/494.png"
  },
  {
    nome: "Snivy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png"
  },
  {
    nome: "Servine",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png"
  },
  {
    nome: "Serperior",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/497.png"
  },
  {
    nome: "Tepig",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png"
  },
  {
    nome: "Pignite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/499.png"
  },
  {
    nome: "Emboar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/500.png"
  },
  {
    nome: "Oshawott",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png"
  },
  {
    nome: "Dewott",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/502.png"
  },
  {
    nome: "Samurott",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/503.png"
  },
  {
    nome: "Patrat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/504.png"
  },
  {
    nome: "Watchog",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/505.png"
  },
  {
    nome: "Lillipup",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/506.png"
  },
  {
    nome: "Herdier",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/507.png"
  },
  {
    nome: "Stoutland",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/508.png"
  },
  {
    nome: "Purrloin",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/509.png"
  },
  {
    nome: "Liepard",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/510.png"
  },
  {
    nome: "Pansage",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/511.png"
  },
  {
    nome: "Simisage",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/512.png"
  },
  {
    nome: "Pansear",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png"
  },
  {
    nome: "Simisear",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/514.png"
  },
  {
    nome: "Panpour",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/515.png"
  },
  {
    nome: "Simipour",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/516.png"
  },
  {
    nome: "Munna",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/517.png"
  },
  {
    nome: "Musharna",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/518.png"
  },
  {
    nome: "Pidove",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/519.png"
  },
  {
    nome: "Tranquill",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/520.png"
  },
  {
    nome: "Unfezant",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/521.png"
  },
  {
    nome: "Blitzle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/522.png"
  },
  {
    nome: "Zebstrika",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/523.png"
  },
  {
    nome: "Roggenrola",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/524.png"
  },
  {
    nome: "Boldore",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/525.png"
  },
  {
    nome: "Gigalith",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/526.png"
  },
  {
    nome: "Woobat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/527.png"
  },
  {
    nome: "Swoobat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/528.png"
  },
  {
    nome: "Drilbur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/529.png"
  },
  {
    nome: "Excadrill",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/530.png"
  },
  {
    nome: "Audino",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/531.png"
  },
  {
    nome: "Timburr",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/532.png"
  },
  {
    nome: "Gurdurr",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/533.png"
  },
  {
    nome: "Conkeldurr",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/534.png"
  },
  {
    nome: "Tympole",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/535.png"
  },
  {
    nome: "Palpitoad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/536.png"
  },
  {
    nome: "Seismitoad",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/537.png"
  },
  {
    nome: "Throh",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/538.png"
  },
  {
    nome: "Sawk",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/539.png"
  },
  {
    nome: "Sewaddle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/540.png"
  },
  {
    nome: "Swadloon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/541.png"
  },
  {
    nome: "Leavanny",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/542.png"
  },
  {
    nome: "Venipede",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/543.png"
  },
  {
    nome: "Whirlipede",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/544.png"
  },
  {
    nome: "Scolipede",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/545.png"
  },
  {
    nome: "Cottonee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/546.png"
  },
  {
    nome: "Whimsicott",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/547.png"
  },
  {
    nome: "Petilil",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/548.png"
  },
  {
    nome: "Lilligant",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/549.png"
  },
  {
    nome: "Basculin",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/550.png"
  },
  {
    nome: "Sandile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/551.png"
  },
  {
    nome: "Krokorok",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/552.png"
  },
  {
    nome: "Krookodile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/553.png"
  },
  {
    nome: "Darumaka",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/554.png"
  },
  {
    nome: "Darmanitan",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/555.png"
  },
  {
    nome: "Maractus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/556.png"
  },
  {
    nome: "Dwebble",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/557.png"
  },
  {
    nome: "Crustle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/558.png"
  },
  {
    nome: "Scraggy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/559.png"
  },
  {
    nome: "Scrafty",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/560.png"
  },
  {
    nome: "Sigilyph",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/561.png"
  },
  {
    nome: "Yamask",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/562.png"
  },
  {
    nome: "Cofagrigus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/563.png"
  },
  {
    nome: "Tirtouga",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/564.png"
  },
  {
    nome: "Carracosta",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/565.png"
  },
  {
    nome: "Archen",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/566.png"
  },
  {
    nome: "Archeops",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/567.png"
  },
  {
    nome: "Trubbish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/568.png"
  },
  {
    nome: "Garbodor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/569.png"
  },
  {
    nome: "Zorua",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/570.png"
  },
  {
    nome: "Zoroark",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/571.png"
  },
  {
    nome: "Minccino",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/572.png"
  },
  {
    nome: "Cinccino",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/573.png"
  },
  {
    nome: "Gothita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/574.png"
  },
  {
    nome: "Gothorita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/575.png"
  },
  {
    nome: "Gothitelle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/576.png"
  },
  {
    nome: "Solosis",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/577.png"
  },
  {
    nome: "Duosion",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/578.png"
  },
  {
    nome: "Reuniclus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/579.png"
  },
  {
    nome: "Ducklett",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/580.png"
  },
  {
    nome: "Swanna",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/581.png"
  },
  {
    nome: "Vanillite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/582.png"
  },
  {
    nome: "Vanilish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/583.png"
  },
  {
    nome: "Vanilluxe",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/584.png"
  },
  {
    nome: "Deerling",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/585.png"
  },
  {
    nome: "Sawsbuck",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/586.png"
  },
  {
    nome: "Emolga",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/587.png"
  },
  {
    nome: "Karrablast",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/588.png"
  },
  {
    nome: "Escavalier",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/589.png"
  },
  {
    nome: "Foongus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/590.png"
  },
  {
    nome: "Amoonguss",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/591.png"
  },
  {
    nome: "Frillish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/592.png"
  },
  {
    nome: "Jellicent",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png"
  },
  {
    nome: "Alomomola",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/594.png"
  },
  {
    nome: "Joltik",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/595.png"
  },
  {
    nome: "Galvantula",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/596.png"
  },
  {
    nome: "Ferroseed",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/597.png"
  },
  {
    nome: "Ferrothorn",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/598.png"
  },
  {
    nome: "Klink",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/599.png"
  },
  {
    nome: "Klang",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/600.png"
  },
  {
    nome: "Klinklang",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/601.png"
  },
  {
    nome: "Tynamo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/602.png"
  },
  {
    nome: "Eelektrik",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/603.png"
  },
  {
    nome: "Eelektross",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/604.png"
  },
  {
    nome: "Elgyem",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/605.png"
  },
  {
    nome: "Beheeyem",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/606.png"
  },
  {
    nome: "Litwick",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/607.png"
  },
  {
    nome: "Lampent",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/608.png"
  },
  {
    nome: "Chandelure",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/609.png"
  },
  {
    nome: "Axew",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/610.png"
  },
  {
    nome: "Fraxure",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/611.png"
  },
  {
    nome: "Haxorus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/612.png"
  },
  {
    nome: "Cubchoo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png"
  },
  {
    nome: "Beartic",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png"
  },
  {
    nome: "Cryogonal",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/615.png"
  },
  {
    nome: "Shelmet",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/616.png"
  },
  {
    nome: "Accelgor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/617.png"
  },
  {
    nome: "Stunfisk",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/618.png"
  },
  {
    nome: "Mienfoo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/619.png"
  },
  {
    nome: "Mienshao",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/620.png"
  },
  {
    nome: "Druddigon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/621.png"
  },
  {
    nome: "Golett",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/622.png"
  },
  {
    nome: "Golurk",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/623.png"
  },
  {
    nome: "Pawniard",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/624.png"
  },
  {
    nome: "Bisharp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/625.png"
  },
  {
    nome: "Bouffalant",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/626.png"
  },
  {
    nome: "Rufflet",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/627.png"
  },
  {
    nome: "Braviary",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/628.png"
  },
  {
    nome: "Vullaby",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/629.png"
  },
  {
    nome: "Mandibuzz",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/630.png"
  },
  {
    nome: "Heatmor",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/631.png"
  },
  {
    nome: "Durant",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/632.png"
  },
  {
    nome: "Deino",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png"
  },
  {
    nome: "Zweilous",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/634.png"
  },
  {
    nome: "Hydreigon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/635.png"
  },
  {
    nome: "Larvesta",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/636.png"
  },
  {
    nome: "Volcarona",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/637.png"
  },
  {
    nome: "Cobalion",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/638.png"
  },
  {
    nome: "Terrakion",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/639.png"
  },
  {
    nome: "Virizion",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/640.png"
  },
  {
    nome: "Tornadus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/641.png"
  },
  {
    nome: "Thundurus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/642.png"
  },
  {
    nome: "Reshiram",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png"
  },
  {
    nome: "Zekrom",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png"
  },
  {
    nome: "Landorus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/645.png"
  },
  {
    nome: "Kyurem",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/646.png"
  },
  {
    nome: "Keldeo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/647.png"
  },
  {
    nome: "Meloetta",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/648.png"
  },
  {
    nome: "Genesect",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/649.png"
  }
];

const enviar = document.getElementById("enviar");
const refaz = document.getElementById("reload");
const img = document.querySelector("img");

var numero = 0;

function aleatorio() {
  numero = Math.floor(Math.random() * pokemons.length);

  img.setAttribute("src", pokemons[numero].img);
}

resetar();

function resetar() {
  document.querySelector("span").innerHTML = " ";
  document.getElementById("imgpokemon").className = null;
  aleatorio();
}

enviar.onclick = () => {
  let resposta = document.querySelector("input").value.trim();

  if (resposta.length) {
    if (resposta.toLowerCase() == pokemons[numero].nome.toLowerCase()) {
      document.querySelector("span").innerHTML =
        "Parabéns! É o " + pokemons[numero].nome;
      document.getElementById("imgpokemon").className = "acertou";
      document.querySelector("input").value = "";
      setTimeout(() => {
        resetar();
      }, 2000);
    } else {
      document.querySelector("span").innerHTML =
        "Você errou! É o " + pokemons[numero].nome;
      document.getElementById("imgpokemon").className = "acertou";
      document.querySelector("input").value = "";
      setTimeout(() => {
        resetar();
      }, 2000);
    }
  } else {
    document.querySelector("span").innerHTML = "Coloque o nome";
  }
};

refaz.onclick = resetar;
