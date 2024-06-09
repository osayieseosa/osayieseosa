// Next.js OpenGraph Route
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request): Promise<ImageResponse> {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') || 'Default Title';
  const description = searchParams.get('description') || 'Default Description';

  return new ImageResponse(
    (
      <div style={{ backgroundColor: '#f3f4f6', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', width: '24rem', height: '24rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} />
        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontWeight: '600', fontSize: '1.25rem', color: '#111827' }}>{title}</p>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>{description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
