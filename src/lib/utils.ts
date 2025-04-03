import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const spriteImages = Array.from({ length: 17 }, (_, i) =>
  `/otter-sprite/tile${String(i).padStart(3, '0')}.png`
)

export const multiOtterSpriteImages = Array.from({ length: 7 }, (_, i) =>
  `/multy-otter-sprite/tile${String(i).padStart(3, '0')}.png`
)


// console.log("Sprite Images from utils.ts:", spriteImages);