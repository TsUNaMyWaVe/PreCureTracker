import { Link, useLocation } from "react-router-dom";
import { precureSeasons } from "@/data/precureData";
import { cn } from "@/lib/utils";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { Heart } from "lucide-react";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-pink-100">
      <SidebarContent className="bg-pink-50/50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-pink-600 font-bold text-lg mb-4 flex items-center gap-2">
            <Heart className="fill-pink-500 text-pink-500" size={20} />
            PreCure Tracker
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/"}>
                  <Link to="/" className="font-medium">Dashboard</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {precureSeasons.map((season) => (
                <SidebarMenuItem key={season.id}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === `/season/${season.id}`}
                    className={cn(
                      "transition-all duration-200",
                      location.pathname === `/season/${season.id}` ? "bg-pink-100 text-pink-700" : "hover:bg-pink-50"
                    )}
                  >
                    <Link to={`/season/${season.id}`} className="flex items-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", season.color)} />
                      <span className="truncate">{season.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}