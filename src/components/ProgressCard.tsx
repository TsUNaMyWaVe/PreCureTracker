import { Season } from "@/data/precureData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProgressCardProps {
  season: Season;
  watchedCount: number;
  totalItems: number;
}

export const ProgressCard = ({ season, watchedCount, totalItems }: ProgressCardProps) => {
  const percentage = Math.round((watchedCount / totalItems) * 100) || 0;

  return (
    <Link to={`/season/${season.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 border-pink-100 overflow-hidden group">
        <div className={cn("h-2 w-full", season.color)} />
        <CardHeader className="pb-2">
          <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">{season.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{season.year}</p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span className="font-bold text-pink-600">{percentage}%</span>
          </div>
          <div className="h-2 w-full bg-pink-50 rounded-full overflow-hidden">
            <div 
              className={cn("h-full transition-all duration-500 ease-out", season.color)}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-xs mt-2 text-muted-foreground">
            {watchedCount} / {totalItems} items watched
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};