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
}

export const precureSeasons: Season[] = [
  {
    id: "futari-wa",
    title: "Futari wa Pretty Cure",
    year: 2004,
    episodesCount: 49,
    color: "bg-pink-400",
    movies: [],
    malUrl: "https://myanimelist.net/anime/603/Futari_wa_Precure"
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
    malUrl: "https://myanimelist.net/anime/1929/Futari_wa_Precure__Max_Heart"
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
    malUrl: "https://myanimelist.net/anime/1534/Futari_wa_Precure__Splash%E2%98%85Star"
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
    malUrl: "https://myanimelist.net/anime/1932/Yes_Precure_5"
  },
  {
    id: "yes-5-gogo",
    title: "Yes! PreCure 5 GoGo!",
    year: 2008,
    episodesCount: 48,
    color: "bg-rose-400",
    movies: [
      { id: "m5", title: "Yes! PreCure 5 GoGo! the Movie: Happy Birthday in the Sweets Kingdom", type: 'movie' },
      // All Stars #1 (Mar 20 2009) – aired during this season
      { id: "allstars-1", title: "Pretty Cure All Stars DX: Everyone’s Friends — The Collection of Miracles!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/3692/Yes_Precure_5_GoGo"
  },
  {
    id: "fresh",
    title: "Fresh Pretty Cure!",
    year: 2009,
    episodesCount: 50,
    color: "bg-red-400",
    movies: [
      { id: "m6", title: "Fresh Pretty Cure! the Movie: The Kingdom of Toys has Lots of Secrets!?", type: 'movie' },
      // All Stars #2 (Mar 20 2010) – aired during this season
      { id: "allstars-2", title: "Pretty Cure All Stars DX2: Light of Hope — Protect the Rainbow Jewel!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/5684/Fresh_Precure"
  },
  {
    id: "heartcatch",
    title: "HeartCatch PreCure!",
    year: 2010,
    episodesCount: 49,
    color: "bg-purple-400",
    movies: [
      { id: "m7", title: "HeartCatch PreCure! the Movie: Fashion Show in the Flower Capital... Really?!", type: 'movie' },
      // All Stars #3 (Mar 19 2011) – aired during this season
      { id: "allstars-3", title: "Pretty Cure All Stars DX3: Deliver the Future!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/7645/HeartCatch_Precure"
  },
  {
    id: "suite",
    title: "Suite PreCure♪",
    year: 2011,
    episodesCount: 48,
    color: "bg-pink-300",
    movies: [
      { id: "m8", title: "Suite PreCure the Movie: Take it back! The Miraculous Melody that Connects Hearts", type: 'movie' },
      // All Stars #4 (Mar 17 2012) – aired during this season
      { id: "allstars-4", title: "Pretty Cure All Stars New Stage: Friends of the Future", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/9893/Suite_Precure%E2%99%AA"
  },
  {
    id: "smile",
    title: "Smile PreCure!",
    year: 2012,
    episodesCount: 48,
    color: "bg-orange-400",
    movies: [
      { id: "m9", title: "Smile PreCure! the Movie: Big Mismatch in a Picture Book!", type: 'movie' },
      // All Stars #5 (Mar 16 2013) – aired during this season
      { id: "allstars-5", title: "Pretty Cure All Stars New Stage 2: Friends of the Heart", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/12191/Smile_Precure"
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
    malUrl: "https://myanimelist.net/anime/16419/DokiDoki_Precure"
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
    malUrl: "https://myanimelist.net/anime/21407/HappinessCharge_Precure"
  },
  {
    id: "go-princess",
    title: "Go! Princess PreCure",
    year: 2015,
    episodesCount: 50,
    color: "bg-pink-200",
    movies: [
      { id: "m12", title: "Go! Princess PreCure the Movie: Go! Go!! Splendid Triple Feature!!!", type: 'movie' },
      // All Stars #7 (Mar 14 2015) – aired during this season
      { id: "allstars-7", title: "Pretty Cure All Stars: Spring Carnival♪", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/28669/Go_Princess_Precure"
  },
  {
    id: "maho-girls",
    title: "Maho Girls PreCure!",
    year: 2016,
    episodesCount: 50,
    color: "bg-purple-500",
    movies: [
      { id: "m13", title: "Maho Girls PreCure! the Movie: The Miraculous Transformation! Cure Mofurun!", type: 'movie' },
      // All Stars #8 (Mar 19 2016) – aired during this season
      { id: "allstars-8", title: "Pretty Cure All Stars: Singing with Everyone♪ Miraculous Magic!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/31884/Mahoutsukai_Precure"
  },
  {
    id: "kirakira",
    title: "Kirakira PreCure a la Mode",
    year: 2017,
    episodesCount: 49,
    color: "bg-yellow-200",
    movies: [
      { id: "m14", title: "Kirakira PreCure a la Mode the Movie: Memories of Mille-Feuille!", type: 'movie' },
      // All Stars #9 (Mar 18 2017) – aired during this season
      { id: "allstars-9", title: "Pretty Cure Dream Stars!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/34290/Kirakira%E2%98%86Precure_a_la_Mode"
  },
  {
    id: "hugtto",
    title: "Hugtto! PreCure",
    year: 2018,
    episodesCount: 49,
    color: "bg-pink-400",
    movies: [
      { id: "m15", title: "Hugtto! PreCure ♡ Futari wa Pretty Cure: All Stars Memories", type: 'movie' },
      // All Stars #13 (Oct 31 2020) – aired during this season
      { id: "allstars-13", title: "Pretty Cure All Stars Miracle Leap: A Strange Day With Everyone", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/36593/Hug_tto_Precure"
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
    malUrl: "https://myanimelist.net/anime/38578/Star%E2%98%86Twinkle_Precure"
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
    malUrl: "https://myanimelist.net/anime/40610/Healin_Good%E2%99%A1Precure"
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
    malUrl: "https://myanimelist.net/anime/44191/Tropical-Rouge_Precure"
  },
  {
    id: "delicious-party",
    title: "Delicious Party PreCure",
    year: 2022,
    episodesCount: 45,
    color: "bg-pink-500",
    movies: [
      { id: "m19", title: "Delicious Party PreCure the Movie: Dreaming Children’s Lunch!", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/50281/Delicious_Precure"
  },
  {
    id: "hirogaru-sky",
    title: "Hirogaru Sky! PreCure",
    year: 2023,
    episodesCount: 50,
    color: "bg-sky-400",
    movies: [
      { id: "m20", title: "PreCure All Stars F", type: 'movie' },
      // All Stars #14 (Sep 15 2023) – aired during this season
      { id: "allstars-14", title: "Pretty Cure All Stars F", type: 'movie' }
    ],
    malUrl: "https://myanimelist.net/anime/53716/Hirogaru_Sky_Precure"
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
    malUrl: "https://myanimelist.net/anime/57390/Wonderful_Precure"
  }
];