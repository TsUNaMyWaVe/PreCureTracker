export interface Movie {
  id: string;
  title: string;
  type: 'movie';
}

export interface Season {
  id: string;
  title: string;
  year: number;
  episodesCount: number;
  color: string;
  movies: Movie[];
}

export const precureSeasons: Season[] = [
  {
    id: "futari-wa",
    title: "Futari wa Pretty Cure",
    year: 2004,
    episodesCount: 49,
    color: "bg-pink-400",
    movies: []
  },
  {
    id: "max-heart",
    title: "Futari wa Pretty Cure Max Heart",
    year: 2005,
    episodesCount: 47,
    color: "bg-yellow-400",
    movies: [
      { id: "m1", title: "Futari wa Pretty Cure Max Heart the Movie", type: 'movie' },
      { id: "m2", title: "Futari wa Pretty Cure Max Heart 2: Friends of the Snow-Laden Sky", type: 'movie' }
    ]
  },
  {
    id: "splash-star",
    title: "Futari wa Pretty Cure Splash Star",
    year: 2006,
    episodesCount: 49,
    color: "bg-green-400",
    movies: [
      { id: "m3", title: "Futari wa Pretty Cure Splash Star: Tick-Tock Crisis Hanging by a Thin Thread!", type: 'movie' }
    ]
  },
  {
    id: "yes-5",
    title: "Yes! PreCure 5",
    year: 2007,
    episodesCount: 49,
    color: "bg-pink-500",
    movies: [
      { id: "m4", title: "Yes! PreCure 5: Great Miraculous Adventure in the Mirror Kingdom!", type: 'movie' }
    ]
  },
  {
    id: "yes-5-gogo",
    title: "Yes! PreCure 5 GoGo!",
    year: 2008,
    episodesCount: 48,
    color: "bg-rose-400",
    movies: [
      { id: "m5", title: "Yes! PreCure 5 GoGo! the Movie: Happy Birthday in the Sweets Kingdom", type: 'movie' }
    ]
  },
  {
    id: "fresh",
    title: "Fresh Pretty Cure!",
    year: 2009,
    episodesCount: 50,
    color: "bg-red-400",
    movies: [
      { id: "m6", title: "Fresh Pretty Cure! the Movie: The Kingdom of Toys has Lots of Secrets!?", type: 'movie' }
    ]
  },
  {
    id: "heartcatch",
    title: "HeartCatch PreCure!",
    year: 2010,
    episodesCount: 49,
    color: "bg-purple-400",
    movies: [
      { id: "m7", title: "HeartCatch PreCure! the Movie: Fashion Show in the Flower Capital... Really?!", type: 'movie' }
    ]
  },
  {
    id: "suite",
    title: "Suite PreCure♪",
    year: 2011,
    episodesCount: 48,
    color: "bg-pink-300",
    movies: [
      { id: "m8", title: "Suite PreCure the Movie: Take it back! The Miraculous Melody that Connects Hearts", type: 'movie' }
    ]
  },
  {
    id: "smile",
    title: "Smile PreCure!",
    year: 2012,
    episodesCount: 48,
    color: "bg-orange-400",
    movies: [
      { id: "m9", title: "Smile PreCure! the Movie: Big Mismatch in a Picture Book!", type: 'movie' }
    ]
  },
  {
    id: "dokidoki",
    title: "DokiDoki! PreCure",
    year: 2013,
    episodesCount: 49,
    color: "bg-pink-600",
    movies: [
      { id: "m10", title: "DokiDoki! PreCure the Movie: Mana's Getting Married!!? The Dress of Hope that Connects to the Future", type: 'movie' }
    ]
  },
  {
    id: "happiness-charge",
    title: "HappinessCharge PreCure!",
    year: 2014,
    episodesCount: 49,
    color: "bg-blue-400",
    movies: [
      { id: "m11", title: "HappinessCharge PreCure! the Movie: The Ballerina of the Land of Dolls", type: 'movie' }
    ]
  },
  {
    id: "go-princess",
    title: "Go! Princess PreCure",
    year: 2015,
    episodesCount: 50,
    color: "bg-pink-200",
    movies: [
      { id: "m12", title: "Go! Princess PreCure the Movie: Go! Go!! Splendid Triple Feature!!!", type: 'movie' }
    ]
  },
  {
    id: "maho-girls",
    title: "Maho Girls PreCure!",
    year: 2016,
    episodesCount: 50,
    color: "bg-purple-500",
    movies: [
      { id: "m13", title: "Maho Girls PreCure! the Movie: The Miraculous Transformation! Cure Mofurun!", type: 'movie' }
    ]
  },
  {
    id: "kirakira",
    title: "Kirakira PreCure a la Mode",
    year: 2017,
    episodesCount: 49,
    color: "bg-yellow-200",
    movies: [
      { id: "m14", title: "Kirakira PreCure a la Mode the Movie: Memories of Mille-Feuille!", type: 'movie' }
    ]
  },
  {
    id: "hugtto",
    title: "Hugtto! PreCure",
    year: 2018,
    episodesCount: 49,
    color: "bg-pink-400",
    movies: [
      { id: "m15", title: "Hugtto! PreCure ♡ Futari wa Pretty Cure: All Stars Memories", type: 'movie' }
    ]
  },
  {
    id: "star-twinkle",
    title: "Star Twinkle PreCure",
    year: 2019,
    episodesCount: 49,
    color: "bg-indigo-400",
    movies: [
      { id: "m16", title: "Star Twinkle PreCure the Movie: These Feelings Within The Song Of Stars", type: 'movie' }
    ]
  },
  {
    id: "healin-good",
    title: "Healin' Good PreCure",
    year: 2020,
    episodesCount: 45,
    color: "bg-green-300",
    movies: [
      { id: "m17", title: "Healin' Good PreCure the Movie: GoGo! Big Transformation! The Town of Dreams", type: 'movie' }
    ]
  },
  {
    id: "tropical-rouge",
    title: "Tropical-Rouge! PreCure",
    year: 2021,
    episodesCount: 46,
    color: "bg-cyan-400",
    movies: [
      { id: "m18", title: "Tropical-Rouge! PreCure the Movie: The Snow Princess and the Miraculous Ring!", type: 'movie' }
    ]
  },
  {
    id: "delicious-party",
    title: "Delicious Party PreCure",
    year: 2022,
    episodesCount: 45,
    color: "bg-pink-500",
    movies: [
      { id: "m19", title: "Delicious Party PreCure the Movie: Dreaming Children's Lunch!", type: 'movie' }
    ]
  },
  {
    id: "hirogaru-sky",
    title: "Hirogaru Sky! PreCure",
    year: 2023,
    episodesCount: 50,
    color: "bg-sky-400",
    movies: [
      { id: "m20", title: "PreCure All Stars F", type: 'movie' }
    ]
  },
  {
    id: "wonderful",
    title: "Wonderful PreCure!",
    year: 2024,
    episodesCount: 50,
    color: "bg-pink-300",
    movies: [
      { id: "m21", title: "Wonderful PreCure! The Movie: Game World", type: 'movie' }
    ]
  }
];