# 🌟 PreCure Tracker

A web application to track your journey through the magical world of Pretty Cure! This app allows users to:

- **Sign up/log in** with Supabase authentication
- **Track episodes and movies** from all Pretty Cure seasons
- **Mark watched content** with real-time sync to the cloud
- **View progress** through interactive charts and stats
- **Sync progress** across devices via local storage and Supabase

---

## Live Example

Can be found [here](https://precure-tracker.vercel.app/).

---

## Features

- **Supabase Integration**: Secure authentication and database sync
- **Progress Tracking**: Visual percentage completion for each season
- **Episode/Movie Management**: Mark individual episodes/movies as watched
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **MyAnimeList Links**: Direct links to official anime pages
- **Local Storage Fallback**: Works offline with sync on reconnect

---

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **UI Library**: shadcn/ui components with Tailwind CSS
- **Backend**: Supabase (auth + database)
- **State Management**: React Query
- **Icons**: lucide-react
- **Animations**: Tailwind CSS animations

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/TsUNaMyWaVe/PreCureTracker  cd precure-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Go to [Supabase Dashboard](https://supabase.com/)
   - Create a new project or use existing project ID: `cplhariscvfxxohkydsi`
   - Ensure RLS policies are set up (already configured in code)
   - Get your Supabase URL and Anon Key (already in `client.ts`)

4. **Run the app**
   ```bash
   npm run dev
   ```

---

## Usage

1. **Sign up** using the authentication component
2. **Browse seasons** in the dashboard
3. **Mark episodes/movies** as watched using checkboxes
4. **View progress** in real-time through the progress bar
5. **Sync progress** by toggling the checkboxes

---

## Documentation

- [Supabase Docs](https://supabase.com/docs)
- [React Query Docs](https://tanstack.com/query/v4/docs)
- [shadcn UI Components](https://ui.shadcn.dev/)

---

## Notes

- This app is generated using Dyad - a full-stack React development tool
- All Supabase credentials are hardcoded for simplicity (safe to expose)
- The app uses local storage as a fallback for offline use
- Progress syncs automatically when connected to Supabase
