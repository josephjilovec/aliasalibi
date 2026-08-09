export const runtime = 'edge';

export function GET() {
  return Response.json(
    {
      brand: 'Alias & Alibi',
      mode: 'private-concierge',
      state: 'available',
      services: ['identity exposure', 'entity coordination', 'correspondence', 'property privacy']
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
        'CDN-Cache-Control': 'public, max-age=3600',
        'Vercel-CDN-Cache-Control': 'public, max-age=21600, stale-while-revalidate=86400'
      }
    }
  );
}
