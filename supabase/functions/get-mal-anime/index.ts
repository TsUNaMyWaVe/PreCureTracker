import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get anime ID from query params or JSON body
    const url = new URL(req.url)
    const animeId = url.searchParams.get('animeId')
    
    let body = {}
    if (req.method === 'POST') {
      body = await req.json()
    }
    
    const id = animeId || body.animeId
    
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'animeId is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get Supabase client (using service role key for accessing secrets if needed)
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get MAL credentials from secrets
    const clientId = Deno.env.get('MAL_CLIENT_ID')
    const clientSecret = Deno.env.get('MAL_CLIENT_SECRET')
    
    if (!clientId || !clientSecret) {
      return new Response(
        JSON.stringify({ error: 'MAL credentials not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Step 1: Get access token using client credentials grant
    const tokenResponse = await fetch('https://myanimelist.net/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
    })

    if (!tokenResponse.ok) {
      throw new Error(`Failed to get MAL token: ${tokenResponse.status}`)
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    if (!accessToken) {
      throw new Error('No access token in MAL response')
    }

    // Step 2: Fetch anime data from MAL API
    const animeResponse = await fetch(
      `https://api.myanimelist.net/v2/anime/${id}?fields=main_picture`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    )

    if (!animeResponse.ok) {
      throw new Error(`Failed to fetch anime data: ${animeResponse.status}`)
    }

    const animeData = await animeResponse.json()
    
    // Extract image URL (prefer large, fallback to medium)
    const imageUrl = animeData.main_picture?.large || 
                    animeData.main_picture?.medium || 
                    null

    return new Response(
      JSON.stringify({ imageUrl }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('[get-mal-anime] Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})