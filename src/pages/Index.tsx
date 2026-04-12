import { precureSeasons } from "@/data/precureData";
import { useProgress } from "@/hooks/useProgress";
import { ProgressCard } from "@/components/ProgressCard";
import { Sparkles, Heart } from "lucide-react";

const Index = () => {
  const { watched } = useProgress();

  const calculateStats = () => {
    let totalItems = 0;
    let totalWatched = 0;

    precureSeasons.forEach(season => {
      totalItems += season.episodesCount + season.movies.length;
      
      // Count watched episodes
      for (let i = 1; i <= season.episodesCount; i++) {
        if (watched[`${season.id}-ep-${i}`]) totalWatched++;
      }
      
      // Count watched movies
      season.movies.forEach(movie => {
        if (watched[movie.id]) totalWatched++;
      });
    });

    return { totalItems, totalWatched };
  };

  const { totalItems, totalWatched } = calculateStats();
  const overallPercentage = Math.round((totalWatched / totalItems) * 100) || 0;

  return (
    <div className="p-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <header className="mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-pink-100 rounded-full mb-4">
          <Heart className="text-pink-500 fill-pink-500" size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Pretty Cure Tracker
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Track your journey through the magical world of PreCure. Mark episodes and movies as you watch them!
        </p>
      </header>

      <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-8 rounded-3xl text-white shadow-xl mb-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Sparkles size={18} />
            <span className="font-medium uppercase tracking-wider text-sm">Global Progress</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-5xl font-black mb-1">{overallPercentage}%</h2>
              <p className="text-pink-50 opacity-90">
                You've watched {totalWatched} out of {totalItems} total items across all seasons.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-1000 ease-out" 
                  style={{ width: `${overallPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {precureSeasons.map((season) => {
          let seasonWatched = 0;
          for (let i = 1; i <= season.episodesCount; i++) {
            if (watched[`${season.id}-ep-${i}`]) seasonWatched++;
          }
          season.movies.forEach(m => {
            if (watched[m.id]) seasonWatched++;
          });

          return (
            <ProgressCard 
              key={season.id} 
              season={season} 
              watchedCount={seasonWatched}
              totalItems={season.episodesCount + season.movies.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;