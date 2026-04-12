import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';

export const useProgress = () => {
  const [watched, setWatched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchProgress();
    } else {
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
        console.error('Sync error:', error);
        showError('Failed to sync with cloud');
        setWatched(prev => ({
          ...prev,
          [id]: isCurrentlyWatched
        }));
      }
    } else {
      const newWatched = { ...watched, [id]: !isCurrentlyWatched };
      localStorage.setItem('precure-progress', JSON.stringify(newWatched));
    }
  };

  const markItems = async (ids: string[], shouldWatch: boolean) => {
    const newWatched = { ...watched };
    ids.forEach(id => {
      newWatched[id] = shouldWatch;
    });
    
    setWatched(newWatched);

    if (user) {
      try {
        if (shouldWatch) {
          // Using upsert with onConflict to handle bulk marking
          const { error } = await supabase
            .from('watched_items')
            .upsert(
              ids.map(id => ({ item_id: id, user_id: user.id })),
              { onConflict: 'user_id,item_id' }
            );
          if (error) throw error;
        } else {
          const { error } = await supabase
            .from('watched_items')
            .delete()
            .in('item_id', ids)
            .eq('user_id', user.id);
          if (error) throw error;
        }
      } catch (error: any) {
        console.error('Bulk sync error:', error);
        showError('Failed to sync with cloud');
        fetchProgress(); // Revert to server state on error
      }
    } else {
      localStorage.setItem('precure-progress', JSON.stringify(newWatched));
    }
  };

  return { watched, toggleWatched, markItems, loading, user };
};