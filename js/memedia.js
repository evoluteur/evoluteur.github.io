/*
 	https://evoluteur.github.io/
 	(c) 2025 Olivier Giulieri
 */

const pixMe = [
  "og-closeup",
  "og-2023",
  "og-2019",
  "og-2018",
  "og-2017",
  "og-neige",
  "og-infant",
];

const shuffle = (arr) => {
  const ln = arr.length,
    rnd = Math.floor(Math.random() * ln);
  return arr.slice(rnd, ln).concat(arr.slice(0, rnd));
};

const mediaList = {
  code: [
    {
      id: "jackedgpt",
      title: "JackedGPT",
      url: "https://jackedgpt-8eaf6b49c971.herokuapp.com/",
    },
    {
      id: "meet-the-fans",
      title: "Meet the Fans",
      url: "https://evoluteur.github.io/meet-the-fans/",
    },
    {
      id: "time-management",
      title: "Time Management",
      url: "https://evoluteur.github.io/time-management/",
    },
    {
      id: "motivational-numerology",
      title: "Motivational numerology",
      url: "https://evoluteur.github.io/motivational-numerology/",
    },
    {
      id: "healing-frequencies",
      title: "Healing frequencies",
      url: "http://evoluteur.github.io/healing-frequencies",
    },
    {
      id: "isomorphic-table-cards",
      title: "Table/Cards animation",
      url: "https://evoluteur.github.io/isomorphic-table-cards/",
    },
    {
      id: "many-bubbles",
      title: "Evolutility bubbles view",
      url: "http://evoluteur.github.io/evolutility-ui-jquery/demo/index.html#comics/bubbles",
    },
    {
      id: "van-tharp-marble-game",
      title: "Van Tharp's Marble Game",
      url: "http://evoluteur.github.io/van-tharp-marble-game",
    },
    {
      id: "d3-dual-range-slider",
      title: "D3 dual range slider",
      url: "http://evoluteur.github.io/d3-dual-range-slider/",
    },
    {
      id: "colorpicker",
      title: "Color picker",
      url: "http://evoluteur.github.io/colorpicker/",
    },
    {
      id: "structured-filter",
      title: "Structured filter",
      url: "http://evoluteur.github.io/structured-filter/",
    },
    {
      id: "braille-tools",
      title: "Braille tools",
      url: "https://evoluteur.github.io/braille-tools/",
    },
    {
      id: "madeleinology",
      title: "Madeleinology",
      url: "http://evoluteur.github.io/madeleinology/",
    },
  ],
  recipes: [
    {
      id: "creme-brulee",
      title: "Crèmes brûlées",
      url: "recipes/desserts/creme-brulee.html",
    },
    {
      id: "pear-tart",
      title: "Pear cream tart",
      url: "recipes/desserts/pear-cream-tart.html",
    },
    {
      id: "madeleine",
      title: "Madeleines",
      url: "recipes/desserts/madeleines.html",
    },
  ],
  recipes_learning: [
    {
      id: "canneles",
      title: "Cannelés",
      url: "recipes/desserts/canneles.html",
    },
  ],
  comics: shuffle([
    {
      id: "incal1",
      title: "L'Incal",
      url: "https://amzn.to/2QQz5v6",
    },
    {
      id: "lama1",
      title: "Le Lama Blanc",
      url: "https://amzn.to/3vnlJW7",
    },
    {
      id: "orbital1",
      title: "Orbital",
      url: "https://www.bdgest.com/preview-2765-BD-orbital-contacts.html",
    },
    {
      id: "niourk1",
      title: "Niourk",
      url: "http://www.bedetheque.com/serie-35353-BD-NiourK.html",
    },
    {
      id: "segments1",
      title: "Segments",
      url: "http://www.bedetheque.com/serie-30223-BD-Segments.html",
    },
    {
      id: "quete1",
      title: "La Quête de l'Oiseau du Temps",
      url: "https://amzn.to/3fiBdVW",
    },
    {
      id: "monstre1",
      title: "Le Sommeil du Monstre",
      url: "http://www.bedetheque.com/BD-Sommeil-du-monstre-Tome-1-1348.html",
    },
    {
      id: "pemaling1",
      title: "Pema Ling",
      url: "http://www.bedetheque.com/serie-11520-BD-Pema-Ling.html",
    },
    {
      id: "aslak1",
      title: "Aslak",
      url: "http://www.bedetheque.com/serie-27075-BD-Aslak.html",
    },
    {
      id: "4pouvoir1",
      title: "Le Quatrieme Pouvoir",
      url: "http://www.bedetheque.com/serie-592-BD-Quatrieme-pouvoir.html",
    },
    {
      id: "acriborea",
      title: "Acriborea",
      url: "http://www.bedetheque.com/serie-13233-BD-Acriborea.html",
    },
    {
      id: "ivressefantom1",
      title: "L'Ivresse des Fantomes",
      url: "http://www.bedetheque.com/serie-15118-BD-Ivresse-des-fantomes.html",
    },
    {
      id: "carmenmc1",
      title: "Carmen Mc-Callum",
      url: "http://www.bedetheque.com/serie-70-BD-Carmen-Mc-Callum.html",
    },
    {
      id: "aquablue1",
      title: "Aquablue",
      url: "http://www.bedetheque.com/serie-48-BD-Aquablue.html",
    },
    {
      id: "zarkass1",
      title: "Piege sur Zarkass",
      url: "http://www.bedetheque.com/serie-36598-BD-Piege-sur-Zarkass.html",
    },
    {
      id: "nirvana1",
      title: "Nirvana",
      url: "http://www.bedetheque.com/serie-28647-BD-Nirvana.html",
    },
    {
      id: "ocean-amour",
      title: "Un Ocean d'Amour",
      url: "http://www.bedetheque.com/serie-44836-BD-Un-ocean-d-amour.html",
    },
    {
      id: "chininkel1",
      title: "Le Grand Pouvoir du Chninkel",
      url: "http://www.bedetheque.com/serie-26-BD-Grand-pouvoir-du-Chninkel.html",
    },
    {
      id: "legendesoublie1",
      title: "Legendes des Contrees Oubliees",
      url: "http://www.bedetheque.com/serie-2-BD-Legendes-des-contrees-oubliees.html",
    },
    {
      id: "kevin1",
      title: "Litteul Kevin",
      url: "http://www.bedetheque.com/serie-560-BD-Litteul-Kevin.html",
    },
    {
      id: "sillage1",
      title: "Sillage",
      url: "http://www.bedetheque.com/serie-18-BD-Sillage.html",
    },
    {
      id: "edena1",
      title: "Edena",
      url: "https://amzn.to/3fiQUfH",
    },
    {
      id: "okko1",
      title: "Okko",
      url: "http://www.bedetheque.com/serie-10529-BD-Okko.html",
    },
    {
      id: "thorgal1",
      title: "Thorgal",
      url: "http://www.bedetheque.com/serie-12-BD-Thorgal.html",
    },
    {
      id: "chimere1",
      title: "Chimeres 1887",
      url: "http://www.bedetheque.com/serie-29524-BD-Chimeres-1887.html",
    },
    {
      id: "fleaudieux1",
      title: "Le Fleau des Dieux",
      url: "http://www.bedetheque.com/serie-526-BD-Fleau-des-dieux.html",
    },
    {
      id: "lanfeust1",
      title: "Lanfeust de Troy",
      url: "http://www.bedetheque.com/serie-6-BD-Lanfeust-de-Troy.html",
    },
    {
      id: "oms",
      title: "OMS en serie",
      url: "http://www.bedetheque.com/serie-35557-BD-OmS-en-serie.html",
    },
    {
      id: "urban1",
      title: "Urban",
      url: "http://www.bedetheque.com/serie-29156-BD-Urban.html",
    },
    {
      id: "largo1",
      title: "Largo Winch",
      url: "http://www.bedetheque.com/serie-14-BD-Largo-Winch.html",
    },
    {
      id: "skydoll1",
      title: "Sky Doll",
      url: "https://amzn.to/3ww3L42",
    },
    {
      id: "vampire-benares1",
      title: "Le Vampire de Benares",
      url: "http://www.bedetheque.com/serie-28231-BD-Vampire-de-Benares.html",
    },
    {
      id: "neffous1",
      title: "La Nef des Fous",
      url: "http://www.bedetheque.com/serie-36-BD-Nef-des-fous.html",
    },
    {
      id: "uw11",
      title: "Universal War One",
      url: "http://www.bedetheque.com/serie-279-BD-Universal-War-One.html",
    },
    {
      id: "goldencity1",
      title: "Golden City",
      url: "http://www.bedetheque.com/serie-289-BD-Golden-City.html",
    },
    {
      id: "manoir1",
      title: "Le Manoir des Murmures",
      url: "http://www.bedetheque.com/serie-16625-BD-Manoir-des-murmures.html",
    },
    {
      id: "pandamonia1",
      title: "Pandamonia",
      url: "https://www.bdgest.com/preview-854-BD-pandamonia-chaos-bestial.html",
    },
    {
      id: "travis1",
      title: "Travis",
      url: "http://www.bedetheque.com/serie-75-BD-Travis.html",
    },
    {
      id: "grandmort1",
      title: "Le Grand Mort",
      url: "http://www.bedetheque.com/serie-16623-BD-Grand-Mort.html",
    },
    {
      id: "metabaron1",
      title: "Les Meta-Barons",
      url: "http://www.bedetheque.com/serie-5124-BD-Meta-barons.html",
    },
    {
      id: "technoperes1",
      title: "Les Technopères",
      url: "http://www.bedetheque.com/serie-65-BD-Technoperes.html",
    },
    {
      id: "passagersvent1",
      title: "Les Passagers du Vent",
      url: "http://www.bedetheque.com/serie-108-BD-Passagers-du-vent.html",
    },
    {
      id: "garulfo1",
      title: "Garulfo",
      url: "http://www.bedetheque.com/serie-57-BD-Garulfo.html",
    },
    {
      id: "meteors",
      title: "Meteors",
      url: "http://www.bedetheque.com/serie-17452-BD-Meteors.html",
    },
    {
      id: "solo",
      title: "Solo",
      url: "http://www.bedetheque.com/serie-44145-BD-Solo.html",
    },
    {
      id: "bolchoi_arena",
      title: "Bolchoi Arena",
      url: "https://www.bedetheque.com/serie-62493-BD-Bolchoi-Arena.html",
    },

    {
      id: "alim1",
      title: "Alim le tanneur",
      url: "https://www.bedetheque.com/serie-9998-BD-Alim-le-tanneur.html",
    },
    {
      id: "codemc1",
      title: "Code Mc Callum",
      url: "https://www.bedetheque.com/serie-13421-BD-CODE-Mc-CALLUM.html",
    },
    {
      id: "d",
      title: "D",
      url: "https://www.bedetheque.com/serie-19589-BD-D.html",
    },
    {
      id: "divin",
      title: "Divin",
      url: "https://www.bedetheque.com/serie-45861-BD-Divin.html",
    },
    {
      id: "ian",
      title: "Ian",
      url: "https://www.bedetheque.com/serie-6640-BD-Ian.html",
    },
    {
      id: "incal-av1",
      title: "Avant l'Incal",
      url: "https://www.bedetheque.com/serie-16-BD-Incal-Avant-l.html",
    },
    {
      id: "marshall",
      title: "Marshall",
      url: "https://www.bedetheque.com/serie-3872-BD-Marshall.html",
    },
    {
      id: "porcelaine",
      title: "Porcelaine",
      url: "https://www.bedetheque.com/serie-44272-BD-Porcelaine.html",
    },
    {
      id: "rapaces",
      title: "Rapaces",
      url: "https://www.bedetheque.com/serie-264-BD-Rapaces-Marini.html",
    },
    {
      id: "valerian",
      title: "Valerian",
      url: "https://www.bedetheque.com/serie-174-BD-Valerian.html",
    },
    {
      id: "azimut1",
      title: "Azimut",
      url: "https://www.bedetheque.com/serie-32886-BD-Azimut-Lupano-Andreae.html",
    },
    {
      id: "sortileges",
      title: "Sortileges",
      url: "https://www.bedetheque.com/serie-34923-BD-Sortileges-Dufaux-Munuera.html",
    },
    {
      id: "saisoncoul",
      title: "La Saison de la Couloeuvre",
      url: "https://www.bedetheque.com/serie-16372-BD-Saison-de-la-Couloeuvre.html",
    },
    {
      id: "salammbo",
      title: "Salammbo",
      url: "https://smile.amazon.com/Salammbo-Gustave-Flaubert/dp/1785866648",
    },
    {
      id: "prisonnier-etoiles",
      title: "Le Prisonnier des etoiles",
      url: "https://www.bedetheque.com/serie-2862-BD-Prisonnier-des-etoiles.html",
    },
    {
      id: "regard",
      title: "Où le regard ne porte pas...",
      url: "https://www.bedetheque.com/BD-Ou-le-regard-ne-porte-pas-Tome-1-32202.html",
    },
  ]),
  comics_us: shuffle([
    {
      id: "saga1",
      title: "Saga",
      url: "https://amzn.to/3bUfGR4",
    },
    {
      id: "androitsheep1",
      title: "Do androids dream of electronic sheeps",
      url: "https://amzn.to/3wuXZzx",
    },
    {
      id: "ronin",
      title: "Ronin",
      url: "https://amzn.to/2SnjXWn",
    },
    {
      id: "low",
      title: "Low",
      url: "https://amzn.to/3vkbUZ6",
    },
    {
      id: "descender",
      title: "Descender",
      url: "https://amzn.to/2QMnQni",
    },
    {
      id: "east-of-west",
      title: "East of West",
      url: "https://amzn.to/2QTOw5O",
    },
    {
      id: "tokyo-ghost",
      title: "Tokyo Ghost",
      url: "https://amazon.com/Tokyo-Ghost-Deluxe-Rick-Remender/dp/1534300465",
    },
    {
      id: "300",
      title: "300",
      url: "https://www.amazon.com/Frank-Miller-300/dp/8877597631",
    },
  ]),
  comics_euro_us: [
    {
      id: "incal",
      title: "The Incal",
      url: "https://amzn.to/34sw5s9",
    },
    {
      id: "lama",
      title: "The White Lama",
      url: "https://amzn.to/3vkbxOc",
    },
    {
      id: "4power",
      title: "The Fourth Power",
      url: "https://amzn.to/34euFkJ",
    },
    {
      id: "birdtime",
      title: "The Quest For The Time Bird",
      url: "https://amzn.to/3vjsYy9",
    },
    {
      id: "incalb",
      title: "Before The Incal",
      url: "https://amzn.to/2Thr0Av",
    },
    {
      id: "edena",
      title: "Edena",
      url: "https://amzn.to/3fe1x3j",
    },
    /*	{
        id: "imperfectfuture",
        title: "Tales of an Imperfect Future",
        url: "https://www.amazon.com/Tales-Imperfect-Future-Alfonso-Font/dp/1616554940"
      },*/
    ,
  ],
  inspiration: [
    {
      id: "mandelbrot-1",
      title: 'Mandelbrot set ("the thumbprint of God")',
      url: "https://en.wikipedia.org/wiki/Benoit_Mandelbrot#/media/File:Mandel_zoom_08_satellite_antenna.jpg",
    },
    {
      id: "mandelbrot-2",
      title: "Mandelbrot set",
      url: "https://en.wikipedia.org/wiki/Benoit_Mandelbrot#/media/File:Newton-lplane-Mandelbrot.jpg",
    },
    {
      id: "mandelbrot_one_island",
      title: 'Julia "island"',
      url: "https://en.wikipedia.org/wiki/Mandelbrot_set#/media/File:Mandel_zoom_15_one_island.jpg",
    },
    {
      id: "snowflake",
      title: "Snowflake",
      url: "http://www.snowcrystals.com/photos/photos.html",
    },
    {
      id: "romanesco",
      title: "Romanesco broccoli",
      url: "https://www.gardenbetty.com/romanesco-broccoli-a-fibonacci-fractal/",
    },
    {
      id: "mountains",
      title: "Mountain tops",
      url: "https://www.wired.com/2010/09/fractal-patterns-in-nature/",
    },
  ],
  art: [
    {
      id: "monet",
      title: "Claude Monet",
      url: "https://www.google.com/search?tbm=isch&q=claude+monet+impressionism",
    },
    {
      id: "seurat",
      title: "Georges Seurat",
      url: "https://www.google.com/search?&source=lnms&tbm=isch&q=seurat",
    },
    {
      id: "vangogh",
      title: "Vincent Van Gogh",
      url: "https://www.google.com/search?q=van+gogh&newwindow=1&source=lnms&tbm=isch",
    },
    {
      id: "hokusai",
      title: "Katsushika Hokusai",
      url: "https://www.google.com/search?q=hokusai&newwindow=1&source=lnms&tbm=isch",
    },
    {
      id: "hiroshige",
      title: "Utagawa Hiroshige",
      url: "https://en.wikipedia.org/wiki/Hiroshige",
    },
    {
      id: "jung",
      title: "Carl Jung",
      url: "https://www.google.com/search?tbm=isch&q=jung+red+book",
    },
    {
      id: "moebius",
      title: "Moebius",
      url: "https://www.iamag.co/the-art-of-moebius/#jp-carousel-121215",
    },
    {
      id: "klimt",
      title: "Gustav Klimt",
      url: "https://www.google.com/search?tbm=isch&q=klimt",
    },
  ],
  "omg-art": [
    {
      id: "book-carving-small-2",
      title: "Book carving 12/2023",
      url: "fun/book-carving-the-childrens-book-of-virtues.html",
    },
    {
      id: "book-carving-small-1",
      title: "Book carving 01/2018",
      url: "fun/book-carving-the-grand-tour.html",
    },
    {
      id: "chakras-charm",
      title: "7 Chakras charm",
      url: "fun/chakra-design.html",
    },
    // {
    //   id: "chakras-earrings",
    //   title: "7 Chakras earrings",
    //   url: "fun/chakra-design.html",
    // },
  ],
  meditation: [
    {
      id: "chakras",
      title: "Meditation",
      url: "https://www.meetup.com/find/events/?allMeetups=false&keywords=meditation",
    },
    {
      id: "sai-maa",
      title: "Sai Maa",
      url: "https://www.sai-maa.com",
    },
    {
      id: "sadhguru",
      title: "Sadhguru",
      url: "https://isha.sadhguru.org",
    },
  ],
  movies: shuffle([
    {
      id: "matrix",
      title: "Matrix",
      imdb: "tt0133093",
    },
    {
      id: "dark-city",
      title: "Dark City",
      imdb: "tt0118929",
    },
    {
      id: "gattaca",
      title: "Gattaca",
      imdb: "tt0119177",
    },
    {
      id: "altered-carbon",
      title: "Altered Carbon",
      imdb: "tt2261227",
    },
    {
      id: "bladerunner",
      title: "Blade Runner",
      imdb: "tt0083658",
    },
    {
      id: "vendetta",
      title: "V for Vendetta",
      imdb: "tt0434409",
    },
    {
      id: "fifthelem",
      title: "The Fifth Element",
      imdb: "tt0119116",
    },
    {
      id: "star-wars",
      title: "Star Wars",
      imdb: "tt1185834",
    },
    {
      id: "avatar",
      title: "Avatar",
      imdb: "tt0499549",
    },
    { id: "dune", title: "Dune", imdb: "tt0087182/" },
    {
      id: "kpax",
      title: "K-PAX",
      imdb: "tt0272152",
    },
    {
      id: "inception",
      title: "Inception",
      imdb: "tt1375666",
    },
    {
      id: "fallout",
      title: "Fallout",
      imdb: "tt12637874",
    },
    {
      id: "stargate",
      title: "Star Gate",
      imdb: "tt0111282",
    },
    {
      id: "enders",
      title: "Ender's Game",
      imdb: "tt1731141",
    },
    {
      id: "guardian-galaxy",
      title: "Guardian of the Galaxy",
      imdb: "tt2015381",
    },
    {
      id: "xmen",
      title: "X-Men",
      imdb: "tt0120903",
    },
    {
      id: "johncarter",
      title: "John Carter",
      imdb: "tt0401729",
    },
    {
      id: "abigail",
      title: "Abigail",
      imdb: "tt7025388",
    },
    {
      id: "umbrella",
      title: "Umbrella Academy",
      imdb: "tt1312171",
    },
    { id: "tron", title: "TRON", imdb: "tt0084827/" },
    {
      id: "ghost-in-shell",
      title: "Ghost in the Shell",
      imdb: "tt0113568",
    },
    {
      id: "akira",
      title: "Akira",
      imdb: "tt0094625",
    },
    {
      id: "dr-strange",
      title: "Doctor Strange",
      imdb: "tt1211837",
    },
    {
      id: "ironman",
      title: "Iron Man",
      imdb: "tt0371746",
    },
    {
      id: "island",
      title: "The Island",
      imdb: "tt0399201",
    },
    {
      id: "dejavu",
      title: "Deja Vu",
      imdb: "tt0453467",
    },
    {
      id: "minority-report",
      title: "Minority Report",
      imdb: "tt0181689",
    },
    {
      id: "i-legend",
      title: "I Am Legend",
      imdb: "tt0480249",
    },
    {
      id: "wall-e",
      title: "WALL·E",
      imdb: "tt0910970",
    },
    {
      id: "riddick",
      title: "The Chronicles of Riddick",
      imdb: "tt0296572",
    },
    {
      id: "the-power",
      title: "The Power",
      imdb: "tt10369484",
    },
    {
      id: "boys",
      title: "The Boys",
      imdb: "tt1190634",
    },
    {
      id: "underworld",
      title: "Underworld",
      imdb: "tt0320691",
    },
    {
      id: "man-earth",
      title: "The Man from Earth",
      imdb: "tt0756683",
    },
    {
      id: "limitless",
      title: "Limitless",
      imdb: "tt1219289",
    },
    {
      id: "cloud-atlas",
      title: "Cloud Atlas",
      imdb: "tt1371111",
    },
    {
      id: "valerian",
      title: "Valerian and the City of a Thousand Planets",
      imdb: "tt2239822",
    },
    {
      id: "wwoman",
      title: "Wonder Woman",
      imdb: "tt0451279",
    },
    {
      id: "butterfly",
      title: "The Butterfly Effect",
      imdb: "tt0289879",
    },
    {
      id: "sense8",
      title: "Sense8",
      imdb: "tt2431438",
    },
    {
      id: "serenity",
      title: "Serenity",
      imdb: "tt0379786",
    },
    {
      id: "arcane",
      title: "Arcane",
      imdb: "tt11126994",
    },
    {
      id: "giver",
      title: "The Giver",
      imdb: "tt0435651",
    },
    {
      id: "alita",
      title: "Alita: Battle Angel",
      imdb: "tt0437086",
    },
    {
      id: "wargames",
      title: "WarGames",
      imdb: "tt0086567",
    },
    {
      id: "alien",
      title: "Alien",
      imdb: "tt0078748",
    },
    {
      id: "jupiter",
      title: "Jupiter Ascending",
      imdb: "tt1617661",
    },
    {
      id: "avalon",
      title: "Avalon",
      imdb: "tt0267287",
    },
    {
      id: "rp1",
      title: "Ready Player One",
      imdb: "tt1677720",
    },
    {
      id: "existenz",
      title: "Existenz",
      imdb: "tt0120907",
    },
    {
      id: "mandolorian",
      title: "The Mandalorian",
      imdb: "tt8111088",
    },
    {
      id: "true-blood",
      title: "True Blood",
      imdb: "tt0844441",
    },
    {
      id: "game-of-thrones",
      title: "Game of Thrones",
      imdb: "tt0944947",
    },
    {
      id: "heroes",
      title: "Heroes",
      imdb: "tt0813715",
    },
    {
      id: "dontlookup",
      title: "Don't Look Up",
      imdb: "tt11286314",
    },
    {
      id: "foundation",
      title: "Foundation",
      imdb: "tt0804484",
    },
  ]),
  movies_fr: [
    {
      id: "amelie",
      title: "Amelie",
      title_us: "",
      imdb: "tt0211915",
    },
    {
      id: "ridicule",
      title: "Ridicule",
      imdb: "tt0117477",
    },
    {
      id: "belle-verte",
      title: "La belle verte",
      title_us: "Beautiful Green",
      imdb: "tt0115650",
    },
    {
      id: "gazon-maudit",
      title: "Gazon maudit",
      title_us: "French Twist",
      imdb: "tt0113149",
    },
    {
      id: "diner-de-cons",
      title: "Le dîner de cons",
      title_us: "The Dinner Game",
      imdb: "tt0119038",
    },
    {
      id: "intouchable",
      title: "Intouchables",
      title_us: "The Intouchables",
      imdb: "tt1675434",
    },
    {
      id: "long-fleuve-tranquille",
      title: "La vie est un long fleuve tranquille",
      title_us: "Life Is a Long Quiet River",
      imdb: "tt0096386",
    },
    {
      id: "guerre-du-feu",
      title: "La guerre du feu",
      title_us: "Quest for Fire",
      imdb: "tt0082484",
    },
    {
      id: "city-lost-children",
      title: "La cité des enfants perdus",
      title_us: "The city of lost children",
      imdb: "tt0112682",
    },
    {
      id: "nikita",
      title: "Nikita",
      title_us: "Nikita",
      imdb: "tt0100263",
    },
    {
      id: "angel-a",
      title: "Angel-A",
      title_us: "Angel-A",
      imdb: "tt0473753",
    },
    {
      id: "gb-chaussure-noire",
      title: "Le Grand Blond avec une chaussure noire",
      title_us: "The Tall Blond Man with One Black Shoe",
      imdb: "tt0068655",
    },
    {
      id: "planete-sauvage",
      title: "Planete Sauvage",
      title_us: "Fantastic Planet",
      imdb: "tt0070544",
    },
    {
      id: "revolution",
      title: "La Révolution",
      title_us: "",
      imdb: "tt13044528",
    },
    {
      id: "pere-noel",
      title: "Le Père Noël est une ordure",
      title_us: "",
      imdb: "tt2433628",
    },
    {
      id: "grand-bleu",
      title: "Le Grand Bleu",
      title_us: "The Big Blue",
      imdb: "tt0095250",
    },
    {
      id: "cyrano",
      title: "Cyrano de Bergerac",
      title_us: "Cyrano",
      imdb: "tt0099334",
    },
  ],
};

// -- less images on mobile for comics_euro_us and fractals
if (typeof window.orientation !== "undefined") {
  mediaList.comics_euro_us = mediaList.comics_euro_us.slice(0, 2);
  mediaList.inspiration = mediaList.inspiration.slice(0, 3);
}
