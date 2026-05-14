-- Create watched_items table
CREATE TABLE IF NOT EXISTS public.watched_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  item_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, item_id)
);

-- Enable Row Level Security
ALTER TABLE public.watched_items ENABLE ROW LEVEL SECURITY;

-- NEW: Explicitly grant access to the Data API roles
-- This is required by the new Supabase security policy
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.watched_items TO authenticated;
GRANT SELECT ON TABLE public.watched_items TO anon;

-- Create RLS Policies
CREATE POLICY "Users can view their own watched items" 
ON public.watched_items FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own watched items" 
ON public.watched_items FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own watched items" 
ON public.watched_items FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own watched items" 
ON public.watched_items FOR DELETE 
TO authenticated 
USING (auth.uid() = user_id);