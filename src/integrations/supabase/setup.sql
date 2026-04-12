-- Create the watched_items table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.watched_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- This unique constraint is CRITICAL for the 'Mark All' (upsert) functionality to work
  CONSTRAINT unique_user_item UNIQUE(user_id, item_id)
);

-- Enable Row Level Security
ALTER TABLE public.watched_items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts during re-run
DROP POLICY IF EXISTS "Users can view their own watched items" ON public.watched_items;
DROP POLICY IF EXISTS "Users can insert their own watched items" ON public.watched_items;
DROP POLICY IF EXISTS "Users can update their own watched items" ON public.watched_items;
DROP POLICY IF EXISTS "Users can delete their own watched items" ON public.watched_items;

-- Create secure policies
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