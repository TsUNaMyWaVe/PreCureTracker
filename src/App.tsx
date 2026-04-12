import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import SeasonDetail from "./pages/SeasonDetail";
import NotFound from "./pages/NotFound";
import { Auth } from "./components/Auth";
import { useProgress } from "./hooks/useProgress";
import { Button } from "./components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { LogOut } from "lucide-react";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, loading } = useProgress();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-50/20">
        <div className="animate-bounce text-pink-500 font-bold">Loading Magic...</div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-pink-50/20">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-4 flex justify-between items-center">
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
            <div className="ml-auto">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => supabase.auth.signOut()}
                className="text-pink-600 hover:text-pink-700 hover:bg-pink-100"
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/season/:id" element={<SeasonDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;