import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';

export const useProgress = () => {
  const [watched, setWatched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchProgress();
    } else {
      // Fallback to local storage for guests
      const saved = localStorage.getItem('precure-progress');
      if (saved) setWatched(JSON.parse(saved));
      setLoading(false);
    }
  }, [user]);

  const fetchProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('watched_items')
        .select('item_id');

      if (error) throw error;

      const progressMap: Record<string, boolean> = {};
      data?.forEach((item: any) => {
        progressMap[item.item_id] = true;
      });
      setWatched(progressMap);
    } catch (error: any) {
      console.error('Error fetching progress:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleWatched = async (id: string) => {
    const isCurrentlyWatched = !!watched[id];
    
    // Optimistic update
    setWatched(prev => ({
      ...prev,
      [id]: !isCurrentlyWatched
    }));

    if (user) {
      try {
        if (isCurrentlyWatched) {
          const { error } = await supabase
            .from('watched_items')
            .delete()
            .eq('item_id', id)
            .eq('user_id', user.id);
          if (error) throw error;
        } else {
          const { error } = await supabase
            .from('watched_items')
            .insert([{ item_id: id, user_id: user.id }]);
          if (error) throw error;
        }
      } catch (error: any) {
        showError('Failed to sync with cloud');
        // Rollback on error
        setWatched(prev => ({
          ...prev,
          [id]: isCurrentlyWatched
        }));
      }
    } else {
      // Update local storage for guests
      const newWatched = { ...watched, [id]: !isCurrentlyWatched };
      localStorage.setItem('precure-progress', JSON.stringify(newWatched));
    }
  };

  return { watched, toggleWatched, loading, user };
};