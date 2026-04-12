import { Season } from "@/data/precureData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tv, Film } from "lucide-react";

interface ProgressCardProps {
  season: Season;
  watchedEpisodes: number;
  watchedMovies: number;
}

export const ProgressCard = ({ season, watchedEpisodes, watchedMovies }: ProgressCardProps) => {
  const totalItems = season.episodesCount + season.movies.length;
  const totalWatched = watchedEpisodes + watchedMovies;
  const percentage = Math.round((totalWatched / totalItems) * 100) || 0;

  return (
    <Link to={`/season/${season.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 border-pink-100 overflow-hidden group h-full flex flex-col">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={season.imageUrl} 
            alt={season.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className={cn("absolute bottom-0 left-0 h-1.5 w-full", season.color)} />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg group-hover:text-pink-600 transition-colors line-clamp-1">{season.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{season.year}</p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-muted-foreground">Progress</span>
            <span className="font-bold text-pink-600">{percentage}%</span>
          </div>
          <div className="h-2 w-full bg-pink-50 rounded-full overflow-hidden mb-4">
            <div 
              className={cn("h-full transition-all duration-500 ease-out", season.color)}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <div className="space-y-2 mt-auto">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Tv size={12} className="text-pink-400" />
                <span>Episodes</span>
              </div>
              <span className="font-semibold">{watchedEpisodes} / {season.episodesCount}</span>
            </div>
            
            {season.movies.length > 0 && (
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Film size={12} className="text-pink-400" />
                  <span>Movies</span>
                </div>
                <span className="font-semibold">{watchedMovies} / {season.movies.length}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};