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
  malUrl: string;
  imageUrl: string;
}

export const precureSeasons: Season[] = [
  {
    id: "futari-wa",
    title: "Futari wa Pretty Cure",
    year: 2004,
    episodesCount: 49,
    color: "bg-pink-400",
    movies: [],
    malUrl: "https://myanimelist.net/anime/603/Futari_wa_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/11147.jpg"
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
    ],
    malUrl: "https://myanimelist.net/anime/604/Futari_wa_Precure__Max_Heart",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/11148.jpg"
  },
  {
    id: "splash-star",
    title: "Futari wa Pretty Cure Splash Star",
    year: 2006,
    episodesCount: 49,
    color: "bg-green-400",
    movies: [
      { id: "m3", title: "Futari wa Pretty Cure Splash Star: Tick-Tock Crisis Hanging by a Thin Thread!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/1534/Futari_wa_Precure__Splash%E2%98%85Star",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/11149.jpg"
  },
  {
    id: "yes-5",
    title: "Yes! PreCure 5",
    year: 2007,
    episodesCount: 49,
    color: "bg-pink-500",
    movies: [
      { id: "m4", title: "Yes! PreCure 5: Great Miraculous Adventure in the Mirror Kingdom!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/1932/Yes_Precure_5",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/11150.jpg"
  },
  {
    id: "yes-5-gogo",
    title: "Yes! PreCure 5 GoGo!",
    year: 2008,
    episodesCount: 48,
    color: "bg-rose-400",
    movies: [
      { id: "m5", title: "Yes! PreCure 5 GoGo! the Movie: Happy Birthday in the Sweets Kingdom", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/3689/Yes_Precure_5_GoGo",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/11151.jpg"
  },
  {
    id: "fresh",
    title: "Fresh Pretty Cure!",
    year: 2009,
    episodesCount: 50,
    color: "bg-red-400",
    movies: [
      { id: "m6", title: "Fresh Pretty Cure! the Movie: The Kingdom of Toys has Lots of Secrets!?", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/5684/Fresh_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/11152.jpg"
  },
  {
    id: "heartcatch",
    title: "HeartCatch PreCure!",
    year: 2010,
    episodesCount: 49,
    color: "bg-purple-400",
    movies: [
      { id: "m7", title: "HeartCatch PreCure! the Movie: Fashion Show in the Flower Capital... Really?!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/7645/HeartCatchPrecure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/21431.jpg"
  },
  {
    id: "suite",
    title: "Suite PreCure♪",
    year: 2011,
    episodesCount: 48,
    color: "bg-pink-300",
    movies: [
      { id: "m8", title: "Suite PreCure the Movie: Take it back! The Miraculous Melody that Connects Hearts", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/9893/Suite_Precure%E2%99%AA",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/28361.jpg"
  },
  {
    id: "smile",
    title: "Smile PreCure!",
    year: 2012,
    episodesCount: 48,
    color: "bg-orange-400",
    movies: [
      { id: "m9", title: "Smile PreCure! the Movie: Big Mismatch in a Picture Book!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/12191/Smile_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/35341.jpg"
  },
  {
    id: "dokidoki",
    title: "DokiDoki! PreCure",
    year: 2013,
    episodesCount: 49,
    color: "bg-pink-600",
    movies: [
      { id: "m10", title: "DokiDoki! PreCure the Movie: Mana's Getting Married!!? The Dress of Hope that Connects to the Future", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/15883/DokiDoki_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/45041.jpg"
  },
  {
    id: "happiness-charge",
    title: "HappinessCharge PreCure!",
    year: 2014,
    episodesCount: 49,
    color: "bg-blue-400",
    movies: [
      { id: "m11", title: "HappinessCharge PreCure! the Movie: The Ballerina of the Land of Dolls", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/21407/HappinessCharge_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/56721.jpg"
  },
  {
    id: "go-princess",
    title: "Go! Princess PreCure",
    year: 2015,
    episodesCount: 50,
    color: "bg-pink-200",
    movies: [
      { id: "m12", title: "Go! Princess PreCure the Movie: Go! Go!! Splendid Triple Feature!!!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/28669/Go_Princess_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/70141.jpg"
  },
  {
    id: "maho-girls",
    title: "Maho Girls PreCure!",
    year: 2016,
    episodesCount: 50,
    color: "bg-purple-500",
    movies: [
      { id: "m13", title: "Maho Girls PreCure! the Movie: The Miraculous Transformation! Cure Mofurun!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/31884/Mahoutsukai_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/77641.jpg"
  },
  {
    id: "kirakira",
    title: "Kirakira PreCure a la Mode",
    year: 2017,
    episodesCount: 49,
    color: "bg-yellow-200",
    movies: [
      { id: "m14", title: "Kirakira PreCure a la Mode the Movie: Memories of Mille-Feuille!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/34290/Kirakira%E2%98%86Precure_a_la_Mode",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/83441.jpg"
  },
  {
    id: "hugtto",
    title: "Hugtto! PreCure",
    year: 2018,
    episodesCount: 49,
    color: "bg-pink-400",
    movies: [
      { id: "m15", title: "Hugtto! PreCure ♡ Futari wa Pretty Cure: All Stars Memories", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/36593/Hug_tto_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/89641.jpg"
  },
  {
    id: "star-twinkle",
    title: "Star Twinkle PreCure",
    year: 2019,
    episodesCount: 49,
    color: "bg-indigo-400",
    movies: [
      { id: "m16", title: "Star Twinkle PreCure the Movie: These Feelings Within The Song Of Stars", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/38304/Star%E2%98%86Twinkle_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/94141.jpg"
  },
  {
    id: "healin-good",
    title: "Healin' Good PreCure",
    year: 2020,
    episodesCount: 45,
    color: "bg-green-300",
    movies: [
      { id: "m17", title: "Healin' Good PreCure the Movie: GoGo! Big Transformation! The Town of Dreams", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/40632/Healin_Good%E2%99%A1Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/97641.jpg"
  },
  {
    id: "tropical-rouge",
    title: "Tropical-Rouge! PreCure",
    year: 2021,
    episodesCount: 46,
    color: "bg-cyan-400",
    movies: [
      { id: "m18", title: "Tropical-Rouge! PreCure the Movie: The Snow Princess and the Miraculous Ring!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/44191/Tropical-Rouge_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/101141.jpg"
  },
  {
    id: "delicious-party",
    title: "Delicious Party PreCure",
    year: 2022,
    episodesCount: 45,
    color: "bg-pink-500",
    movies: [
      { id: "m19", title: "Delicious Party PreCure the Movie: Dreaming Children's Lunch!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/50681/Delicious_Party%E2%99%A1Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/104641.jpg"
  },
  {
    id: "hirogaru-sky",
    title: "Hirogaru Sky! PreCure",
    year: 2023,
    episodesCount: 50,
    color: "bg-sky-400",
    movies: [
      { id: "m20", title: "PreCure All Stars F", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/53716/Hirogaru_Sky_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/108141.jpg"
  },
  {
    id: "wonderful",
    title: "Wonderful PreCure!",
    year: 2024,
    episodesCount: 50,
    color: "bg-pink-300",
    movies: [
      { id: "m21", title: "Wonderful PreCure! The Movie: Game World", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/57608/Wonderful_Precure",
    imageUrl: "https://cdn.myanimelist.net/images/anime/11/111641.jpg"
  }
];