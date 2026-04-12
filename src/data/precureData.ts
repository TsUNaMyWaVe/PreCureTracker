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
    movies: [
      { id: "m1", title: "Futari wa Pretty Cure Max Heart the Movie", type: 'movie' },
      { id: "m2", title: "Futari wa Pretty Cure Max Heart 2: Friends of the Snow-Laden Sky", type: 'movie' }
    ]
  },
  {
    id: "max-heart",
    title: "Futari wa Pretty Cure Max Heart",
    year: 2005,
    episodesCount: 47,
    color: "bg-yellow-400",
    movies: []
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
  }
];