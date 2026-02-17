// Supabase Edge Function for 10ninety API
// Protects your API keys by keeping them server-side

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  try {
    // Get API key from environment variable
    const API_KEY = Deno.env.get('TENNINETY_API_KEY')
    
    if (!API_KEY) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { 
          status: 500,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
        }
      )
    }

    // Parse the request URL
    const url = new URL(req.url)
    
    // Get endpoint from query parameters
    // Example: ?endpoint=properties&page=1&page_size=20
    const endpoint = url.searchParams.get('endpoint') || 'properties'
    
    // Remove endpoint from search params and keep the rest
    url.searchParams.delete('endpoint')
    
    // Build the 10ninety API URL
    const baseUrl = 'https://webapi.10ninety.co.uk'
    const endpointPath = endpoint.includes('/') ? endpoint : `${endpoint}/`
    const apiUrl = new URL(`${baseUrl}/${endpointPath}`)
    
    // Copy all remaining query parameters to the API URL
    url.searchParams.forEach((value, key) => {
      apiUrl.searchParams.append(key, value)
    })

    console.log('Fetching from 10ninety:', apiUrl.toString())

    // Make request to 10ninety API
    const response = await fetch(apiUrl.toString(), {
      method: 'GET',
      headers: {
        '10ninety-webapi-key': API_KEY,
        'Accept': 'application/json',
      },
    })

    // Get response data
    const data = await response.json()

    // Return response
    if (!response.ok) {
      console.error('10ninety API error:', response.status, data)
      return new Response(
        JSON.stringify({
          error: 'API request failed',
          status: response.status,
          message: data
        }),
        { 
          status: response.status,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify(data),
      { 
        status: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
      { 
        status: 500,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      }
    )
  }
})