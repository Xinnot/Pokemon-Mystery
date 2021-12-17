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