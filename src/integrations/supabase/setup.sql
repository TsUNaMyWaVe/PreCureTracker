-- Create the watched_items table
CREATE TABLE IF NOT EXISTS public.watched_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- Ensure a user can't have duplicate entries for the same item
  UNIQUE(user_id, item_id)
);

-- Enable Row Level Security
ALTER TABLE public.watched_items ENABLE ROW LEVEL SECURITY;

-- Create policies
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