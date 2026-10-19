const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  let animeId: number;
  try {
    const body = await request.json();
    animeId = Number(body?.animeId);
  } catch {
    return jsonResponse({ error: "A valid animeId is required" }, 400);
  }

  if (!Number.isSafeInteger(animeId) || animeId <= 0) {
    return jsonResponse({ error: "A valid animeId is required" }, 400);
  }

  const clientId = Deno.env.get("MAL_CLIENT_ID");
  if (!clientId) {
    return jsonResponse({ error: "MAL API is not configured" }, 500);
  }

  try {
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/${animeId}?fields=main_picture`,
      { headers: { "X-MAL-CLIENT-ID": clientId } },
    );

    if (!response.ok) {
      return jsonResponse({ error: "MAL anime lookup failed" }, response.status);
    }

    const anime = await response.json();
    return jsonResponse({ imageUrl: anime.main_picture?.large ?? anime.main_picture?.medium ?? null });
  } catch {
    return jsonResponse({ error: "Unable to reach MAL API" }, 502);
  }
});