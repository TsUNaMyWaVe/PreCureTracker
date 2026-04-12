import { useParams } from "react-router-dom";
import { precureSeasons } from "@/data/precureData";
import { useProgress } from "@/hooks/useProgress";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Film, Tv, CheckCheck, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const SeasonDetail = () => {
  const { id } = useParams();
  const { watched, toggleWatched, markItems } = useProgress();
  
  const season = precureSeasons.find(s => s.id === id);

  if (!season) return <div className="p-8">Season not found</div>;

  const episodes = Array.from({ length: season.episodesCount }, (_, i) => i + 1);
  const episodeIds = episodes.map(ep => `${season.id}-ep-${ep}`);
  const movieIds = season.movies.map(m => m.id);
  
  const watchedEpisodes = episodes.filter(ep => watched[`${season.id}-ep-${ep}`]).length;
  const watchedMovies = season.movies.filter(m => watched[m.id]).length;
  
  const allEpisodesWatched = watchedEpisodes === season.episodesCount;
  const allMoviesWatched = watchedMovies === season.movies.length;

  const totalItems = season.episodesCount + season.movies.length;
  const totalWatched = watchedEpisodes + watchedMovies;
  const percentage = Math.round((totalWatched / totalItems) * 100);

  return (
    <div className="p-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-64 shrink-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={season.imageUrl} 
                alt={season.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className="border-pink-200 text-pink-600 bg-pink-50">
                {season.year}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{season.title}</h1>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Button 
                variant="outline" 
                asChild 
                className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700"
              >
                <a href={season.malUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  View on MyAnimeList
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-sm font-medium text-pink-600 flex items-center gap-1">
                    <Sparkles size={14} /> Overall Progress
                  </p>
                  <h2 className="text-2xl font-bold">{percentage}% Complete</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {totalWatched} of {totalItems} total items
                </p>
              </div>
              <div className="h-3 w-full bg-pink-50 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all duration-500 ease-out", season.color)}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Tv className="text-pink-500" size={20} />
              <h3 className="text-xl font-semibold">Episodes</h3>
              <div className="ml-auto flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 text-xs text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                  onClick={() => markItems(episodeIds, !allEpisodesWatched)}
                >
                  {allEpisodesWatched ? (
                    <><X size={14} className="mr-1" /> Unmark All</>
                  ) : (
                    <><CheckCheck size={14} className="mr-1" /> Mark All</>
                  )}
                </Button>
                <Badge variant="secondary">
                  {watchedEpisodes}/{season.episodesCount}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {episodes.map(ep => (
                <div 
                  key={ep}
                  onClick={() => toggleWatched(`${season.id}-ep-${ep}`)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                    watched[`${season.id}-ep-${ep}`] 
                      ? "bg-pink-50 border-pink-200 text-pink-700" 
                      : "bg-white border-gray-100 hover:border-pink-200"
                  )}
                >
                  <Checkbox 
                    checked={watched[`${season.id}-ep-${ep}`]} 
                    onCheckedChange={() => toggleWatched(`${season.id}-ep-${ep}`)}
                    className="data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                  />
                  <span className="text-sm font-medium">Episode {ep}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Film className="text-pink-500" size={20} />
              <h3 className="text-xl font-semibold">Movies</h3>
              <div className="ml-auto flex gap-2">
                {season.movies.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 text-xs text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                    onClick={() => markItems(movieIds, !allMoviesWatched)}
                  >
                    {allMoviesWatched ? (
                      <><X size={14} className="mr-1" /> Unmark All</>
                    ) : (
                      <><CheckCheck size={14} className="mr-1" /> Mark All</>
                    )}
                  </Button>
                )}
                <Badge variant="secondary">
                  {watchedMovies}/{season.movies.length}
                </Badge>
              </div>
            </div>
            {season.movies.length > 0 ? (
              <div className="space-y-3">
                {season.movies.map(movie => (
                  <div 
                    key={movie.id}
                    onClick={() => toggleWatched(movie.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                      watched[movie.id] 
                        ? "bg-pink-50 border-pink-200 text-pink-700" 
                        : "bg-white border-gray-100 hover:border-pink-200"
                    )}
                  >
                    <Checkbox 
                      checked={watched[movie.id]} 
                      onCheckedChange={() => toggleWatched(movie.id)}
                      className="data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                    />
                    <span className="text-sm font-medium leading-tight">{movie.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic p-4 bg-gray-50 rounded-xl border border-dashed">
                No standalone movies for this season.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SeasonDetail;