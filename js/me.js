/*
 	https://evoluteur.github.io/
 	(c) 2023 Olivier Giulieri
 */
const hydrateURL = (m) => ({ ...m, url: "http://www.imdb.com/title/" + m.url });
const mediaList = {
  code: [
    {
      id: "meet-the-fans",
      title: "Meet the Fans",
      url: "https://evoluteur.github.io/meet-the-fans/index.html",
    },
    {
      id: "isomorphic-table-cards",
      title: "Isomorphic Table/Cards",
      url: "http://evoluteur.github.io/isomorphic-table-cards",
    },
    {
      id: "many-bubbles",
      title: "Evolutility bubbles view",
      url: "http://evoluteur.github.io/evolutility-ui-jquery/demo/index.html#comics/bubbles",
    },
    {
      id: "motivational-numerology",
      title: "Motivational Numerology",
      url: "https://evoluteur.github.io/motivational-numerology/",
    },
    {
      id: "d3-dual-range-slider",
      title: "D3 dual range slider",
      url: "http://evoluteur.github.io/d3-dual-range-slider/",
    },
    {
      id: "structured-filter",
      title: "Structured filter",
      url: "http://evoluteur.github.io/structured-filter/",
    },
    {
      id: "colorpicker",
      title: "Color-picker",
      url: "http://evoluteur.github.io/colorpicker/",
    },
    {
      id: "madeleine-data-science",
      title: "Madeleinology",
      url: "http://evoluteur.github.io/madeleinology/ingredients-top4.html",
    },
    {
      id: "braille-tools",
      title: "Braille tools",
      url: "https://evoluteur.github.io/braille-tools/index.html",
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
  comics_euro_us: shuffle([
    {
      id: "edena",
      title: "Edena",
      url: "https://amzn.to/3fe1x3j",
    },
    {
      id: "incal",
      title: "The Incal",
      url: "https://amzn.to/34sw5s9",
    },
    {
      id: "incalb",
      title: "Before The Incal",
      url: "https://amzn.to/2Thr0Av",
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
      id: "lama",
      title: "The White Lama",
      url: "https://amzn.to/3vkbxOc",
    } /*
		{
			id: "imperfectfuture",
			title: "Tales of an Imperfect Future",
			url: "https://www.amazon.com/Tales-Imperfect-Future-Alfonso-Font/dp/1616554940"
		},*/,
  ]),
  fractals: [
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
      url: "http://gizmodo.com/this-physicists-designer-snowflakes-are-dazzling-1748893157",
    },
    {
      id: "romanesco",
      title: "Romanesco Broccoli",
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
      id: "jung",
      title: "Carl Jung",
      url: "https://www.google.com/search?tbm=isch&q=jung+red+book",
    },
    {
      id: "hiroshige",
      title: "Utagawa Hiroshige",
      url: "https://en.wikipedia.org/wiki/Hiroshige",
    },
    { id: "moebius", title: "Moebius", url: "https://www.moebius.fr/" },
    {
      id: "klimt",
      title: "Gustav Klimt",
      url: "https://www.google.com/search?tbm=isch&q=klimt",
    },
  ],
  chakras: [
    {
      id: "chakras",
      title: "Meditation",
      url: "https://www.meetup.com/find/events/?allMeetups=false&keywords=meditation",
    },
    // {
    //   id: "ch7-silver2",
    //   title: "7 Chakras Charm",
    //   // title: '7 Chakras Charm: Amethyst, Sodalite, Angelite, Amazonite, Amber, Carnelian, Red jasper',
    //   url: "http://www.chakradesign.com",
    // },
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
  movies: shuffle(
    [
      {
        id: "matrix",
        title: "Matrix",
        url: "tt0133093",
      },
      {
        id: "dark-city",
        title: "Dark City",
        url: "tt0118929",
      },
      {
        id: "gattaca",
        title: "Gattaca",
        url: "tt0119177",
      },
      {
        id: "bladerunner",
        title: "Blade Runner",
        url: "tt0083658",
      },
      {
        id: "vendetta",
        title: "V for Vendetta",
        url: "tt0434409",
      },
      {
        id: "fifthelem",
        title: "The Fifth Element",
        url: "tt0119116",
      },
      {
        id: "star-wars",
        title: "Star Wars",
        url: "tt1185834",
      },
      {
        id: "avatar",
        title: "Avatar",
        url: "tt0499549",
      },
      { id: "dune", title: "Dune", url: "tt0087182/" },
      {
        id: "kpax",
        title: "K-PAX",
        url: "tt0272152",
      },
      {
        id: "inception",
        title: "Inception",
        url: "tt1375666",
      },
      {
        id: "stargate",
        title: "Star Gate",
        url: "tt0111282",
      },
      {
        id: "enders",
        title: "Ender's Game",
        url: "tt1731141",
      },
      {
        id: "guardian-galaxy",
        title: "Guardian of the Galaxy",
        url: "tt2015381",
      },
      {
        id: "xmen",
        title: "X-Men",
        url: "tt0120903",
      },
      {
        id: "johncarter",
        title: "John Carter",
        url: "tt0401729",
      },
      {
        id: "umbrella",
        title: "Umbrella Academy",
        url: "tt1312171",
      },
      { id: "tron", title: "TRON", url: "tt0084827/" },
      {
        id: "ghost-in-shell",
        title: "Ghost in the Shell",
        url: "tt0113568",
      },
      {
        id: "akira",
        title: "Akira",
        url: "tt0094625",
      },
      {
        id: "dr-strange",
        title: "Doctor Strange",
        url: "tt1211837",
      },
      {
        id: "ironman",
        title: "Iron Man",
        url: "tt0371746",
      },
      {
        id: "island",
        title: "The Island",
        url: "tt0399201",
      },
      {
        id: "dejavu",
        title: "Deja Vu",
        url: "tt0453467",
      },
      {
        id: "minority-report",
        title: "Minority Report",
        url: "tt0181689",
      },
      {
        id: "i-legend",
        title: "I Am Legend",
        url: "tt0480249",
      },
      {
        id: "wall-e",
        title: "WALL·E",
        url: "tt0910970",
      },
      {
        id: "riddick",
        title: "The Chronicles of Riddick",
        url: "tt0296572",
      },
      {
        id: "underworld",
        title: "Underworld",
        url: "tt0320691",
      },
      {
        id: "man-earth",
        title: "The Man from Earth",
        url: "tt0756683",
      },
      {
        id: "limitless",
        title: "Limitless",
        url: "tt1219289",
      },
      {
        id: "cloud-atlas",
        title: "Cloud Atlas",
        url: "tt1371111",
      },
      {
        id: "valerian",
        title: "Valerian and the City of a Thousand Planets",
        url: "tt2239822",
      },
      {
        id: "wwoman",
        title: "Wonder Woman",
        url: "tt0451279",
      },
      {
        id: "butterfly",
        title: "The Butterfly Effect",
        url: "tt0289879",
      },
      {
        id: "sense8",
        title: "Sense8",
        url: "tt2431438",
      },
      {
        id: "serenity",
        title: "Serenity",
        url: "tt0379786",
      },
      {
        id: "arcane",
        title: "Arcane",
        url: "tt11126994",
      },
      {
        id: "giver",
        title: "The Giver",
        url: "tt0435651",
      },
      {
        id: "alita",
        title: "Alita: Battle Angel",
        url: "tt0437086",
      },
      {
        id: "wargames",
        title: "WarGames",
        url: "tt0086567",
      },
      {
        id: "alien",
        title: "Alien",
        url: "tt0078748",
      },
      {
        id: "jupiter",
        title: "Jupiter Ascending",
        url: "tt1617661",
      },
      {
        id: "avalon",
        title: "Avalon",
        url: "tt0267287",
      },
      {
        id: "rp1",
        title: "Ready Player One",
        url: "tt1677720",
      },
      {
        id: "existenz",
        title: "Existenz",
        url: "tt0120907",
      },
      {
        id: "mandolorian",
        title: "The Mandalorian",
        url: "tt8111088",
      },
      {
        id: "true-blood",
        title: "True Blood",
        url: "tt0844441",
      },
      {
        id: "game-of-thrones",
        title: "Game of Thrones",
        url: "tt0944947",
      },
      {
        id: "heroes",
        title: "Heroes",
        url: "tt0813715",
      },
      {
        id: "dontlookup",
        title: "Don't Look Up",
        url: "tt11286314",
      },
      {
        id: "foundation",
        title: "Foundation",
        url: "tt0804484",
      },
    ].map(hydrateURL)
  ),
  movies_fr: [
    {
      id: "fr-amelie",
      title: "Amelie",
      title_us: "",
      url: "tt0211915",
    },
    {
      id: "fr-ridicule",
      title: "Ridicule",
      url: "tt0117477",
    },
    {
      id: "fr-verte",
      title: "La belle verte",
      title_us: "",
      url: "tt0115650",
    },
    {
      id: "fr-gazon",
      title: "Gazon maudit",
      title_us: "French Twist",
      url: "tt0113149",
    },
    {
      id: "fr-dinner",
      title: "Le dîner de cons",
      title_us: "The Dinner Game",
      url: "tt0119038",
    },
    {
      id: "fr-intouchable",
      title: "Intouchables",
      title_us: "The Intouchables",
      url: "tt1675434",
    },
    {
      id: "fr-fleuve",
      title: "La vie est un long fleuve tranquille",
      title_us: "Life Is a Long Quiet River",
      url: "tt0096386",
    },
    {
      id: "fr-feu",
      title: "La guerre du feu",
      title_us: "Quest for Fire",
      url: "tt0082484",
    },
  ].map(hydrateURL),
};
const pixMe = [
  "og-2023",
  "og-2020",
  "og-2019",
  "og-2018",
  "og-2017",
  "og-neige",
  "og-closeup",
  "og-2021-stash",
  "og-infant",
];
let pixMeIdx = 0;
const isMobile = typeof window.orientation !== "undefined";
const e = (id) => document.getElementById(id);

function shuffle(arr) {
  var ln = arr.length,
    rnd = Math.floor(Math.random() * ln);
  return arr.slice(rnd, ln).concat(arr.slice(0, rnd));
}
function more(id) {
  var elem = e(id + "_x");
  elem.className = "";
  elem.innerHTML = mosaic(id, true);
}
function frenchMovies() {
  e("movies_french").innerHTML = mosaic("movies_fr");
}

function switchPix(elem) {
  pixMeIdx = pixMeIdx > pixMe.length - 2 ? 0 : pixMeIdx + 1;
  elem.src = "pix/olivier/" + pixMe[pixMeIdx] + ".jpg";
}

const linkCaptions = {
  comics: "Show more French graphic novels",
  comics_2: "Show even more graphic novels",
  movies: "Show more sci-fi movies",
};
function pixDir(id) {
  if (id.startsWith("comic")) {
    id = "comics";
  }
  return `pix/${id}/`;
}

function mosaic(id, more) {
  if (id === "comics_2") {
    id = "comics";
    more = 2;
  } else {
    more = more ? 1 : 0;
  }
  var preview = id === "movies" || id === "comics" ? 9 : 10,
    ext = id === "code" ? ".png" : ".jpg",
    arrList = mediaList[id],
    ml = id === "comics" && more ? 24 : arrList.length,
    arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview),
    pixPath = pixDir(id),
    imageLink = function (m) {
      var pix = `<img src="${pixPath + m.id + ext}" alt="${m.title}" />`;
      if (m.title) {
        pix += `<div class="pixTitle">${m.title}</div>`;
      }
      var h = '<div class="pixTitleHolder">';
      if (m.url) {
        h +=
          '<a href="' +
          m.url +
          '" aria-label="' +
          m.title +
          '"' +
          (id != "recipes" ? ' target="_blank" rel="noopener"' : "") +
          (m.css ? ' class="' + m.css + '"' : "") +
          ">" +
          pix +
          "</a>";
      } else {
        h += pix;
      }
      h += "</div>";
      return h;
    },
    mm;

  if (more === 2) {
    arrListP = arrList.slice(ml, arrList.length);
  } else {
    arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview);
  }
  mm = arrListP.map(imageLink);
  if ((arrList.length > preview) & !more) {
    mm.push(linkMore(id, preview));
  }
  if (more === 1 && id === "comics") {
    mm.push(linkMore(id + "_2", 0));
  }
  mm.push('<div class="clearer"></div>');
  return mm.join("");
}
const linkMore = (id, preview) =>
  `<span id="${id}_x" class="block">` +
  `<a class="linkMore" href="javascript:more('${id}',${preview})"> + ${linkCaptions[id]}&nbsp;</a><br><br></span>`;

function setMosaic(id) {
  e(id + "2").innerHTML = mosaic(id);
}
const sectionTitles = {
  code: "Code",
  comics: "Graphic Novels",
  recipes: "Cooking",
  movies: "Movies",
  fractals: "Inspiration",
  chakras: "Meditation",
  art: "Namaste",
};
function setupPage() {
  const pixAreas = [
    "code",
    "comics",
    "comics_us",
    "comics_euro_us",
    "recipes",
    "movies",
    "fractals",
    "art",
    "chakras",
  ];
  // 'movies_fr' for frenchMovies
  const fn = isMobile
    ? setMosaic
    : (id) => {
        if (sectionTitles[id]) {
          document.getElementById(id + "-braille").innerHTML = br.braille(
            sectionTitles[id]
          );
        }
        setMosaic(id);
      };
  pixAreas.forEach(fn);
}

const br = {
  braille: (message) => {
    var h = "";
    var myChar, prevCharNum, inQuote;
    const BrChar = (bPix, bAlt) =>
      `<div class="br br-${bPix}"><span>${bAlt}</span></div>`;

    for (var i = 0; i < message.length; i++) {
      myChar = message.charAt(i);
      if (myChar >= "a" && myChar <= "z") {
        // a to z
        h += BrChar(myChar, myChar);
        prevCharNum = false;
      } else if (myChar >= "A" && myChar <= "Z") {
        // A to Z
        h += BrChar("cap", "Caps") + BrChar(myChar.toLowerCase(), myChar); // Caps
        prevCharNum = false;
      } else if (myChar > "0" && myChar <= "9") {
        if (!prevCharNum) {
          h += BrChar("num", "Number");
        }
        h += BrChar(String.fromCharCode(myChar.charCodeAt(0) + 48), myChar);
        prevCharNum = true;
      } else {
        switch (myChar) {
          case " ":
            h += BrChar("sp", ""); //Space
            prevCharNum = false;
            break;
          case "0":
            if (!prevCharNum) {
              h += BrChar("num", "Number");
            }
            h += BrChar("j", "0");
            prevCharNum = true;
            break;
          case "\n":
            h += "<br><br>";
            nbCharsInLine = -1;
            prevCharNum = false;
            break;
          case ".":
            if (prevCharNum) {
              h += BrChar("dec", ".");
            } else {
              h += BrChar("period", ".");
            }
            break;
          case "$":
            h += BrChar("period", "$");
            prevCharNum = false;
            break;
          case "%":
            h += BrChar("col", "%") + BrChar("p", "");
            prevCharNum = false;
            break;
          case "'":
            h += BrChar("qs", "'");
            prevCharNum = false;
            break;
          case ",":
            h += BrChar("comma", ",");
            prevCharNum = false;
            break;
          case "?":
            h += BrChar("qu", "?");
            prevCharNum = false;
            break;
          case "(":
          case ")":
            h += BrChar("par", "parenthesis");
            prevCharNum = false;
            break;
          case "*":
            h += BrChar("ast", "*") + BrChar("ast", "*");
            prevCharNum = false;
            break;
          case "//":
            h += BrChar("sla", "//");
            prevCharNum = false;
            break;
          case "!":
            h += BrChar("ex", "!");
            prevCharNum = false;
            break;
          case "'":
            if (inQuote) h += BrChar("qc", "Close Quote");
            else h += BrChar("qo", "Open Quote");
            inQuote = !inQuote;
            prevCharNum = false;
            break;
          case ":":
            h += BrChar("col", ":");
            prevCharNum = false;
            break;
          case ";":
            h += BrChar("sc", ";");
            prevCharNum = false;
            break;
          case "[":
            h += BrChar("cap", "[") + BrChar("par", "");
            break;
          case "]":
            h += BrChar("par", "]") + BrChar("qs", "");
            break;
        }
      }
    }
    return h;
  },

  alphabet: () => {
    var alpha = '<div class="braille-doc2 alphabet">',
      char;
    for (var i = 97; i < 123; i++) {
      char = String.fromCharCode(i);
      alpha += `<div><span>${char}</span><div class="br br-${char}"></div></div>`;
    }
    return alpha + "</div>";
  },
};
