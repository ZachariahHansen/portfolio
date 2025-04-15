import { readdir } from 'fs/promises'
import { join } from 'path'

export async function getImages() {
  try {
    const publicDir = join(process.cwd(), 'public', 'pictures-zach')
    const files = await readdir(publicDir)
    const images = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png')
    )
    return { images }
  } catch (error) {
    console.error('Error reading images directory:', error)
    return { images: [] }
  }
} 