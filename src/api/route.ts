import { getImages } from './images'

export async function GET() {
  const data = await getImages()
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
} 