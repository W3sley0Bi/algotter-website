'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { spriteImages } from '@/lib/utils'

export default function Header() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [numSprites, setNumSprites] = useState(0)
  const [spriteIndexes, setSpriteIndexes] = useState<number[]>([])


  useEffect(() => {
    const updateGridSize = () => {
      if (gridRef.current) {
        const width = gridRef.current.offsetWidth
        const height = gridRef.current.offsetHeight
        const cols = Math.ceil(width / 70)
        const rows = Math.ceil(height / 70)
        const count = cols * rows
        setNumSprites(count)
        setSpriteIndexes(
          Array.from({ length: count }, () => Math.floor(Math.random() * spriteImages.length))
        )
      }
    }

    updateGridSize()
    window.addEventListener('resize', updateGridSize)
    return () => window.removeEventListener('resize', updateGridSize)
  }, [])

  return (
    <header
      ref={gridRef}
      className="relative dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] overflow-hidden"
    >
      {/* Sprite grid background */}
      <div
        className="absolute inset-0 z-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(auto-fill, 70px)`,
          gridAutoRows: `70px`,
        }}
      >
        {Array.from({ length: numSprites }).map((_, i) => (
          <div key={i} className="w-[70px] h-[70px] flex items-center justify-center">
            <img
              src={spriteImages[spriteIndexes[i] % spriteImages.length]}
              alt=""
              className="w-10 h-10 opacity-50"
            />
          </div>
        ))}
      </div>

      {/* Header content */}
      <div className="relative z-10 mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-border dark:border-darkBorder bg-white/90 dark:bg-secondaryBlack/90 backdrop-blur-sm p-10 transition-all duration-300 ease-in-out shadow-md">
          <img
            src="notiord-icon.png"
            alt="notiord icon"
            height={250}
            width={250}
            className="mx-auto block my-8"
          />
          <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">Notiord</h1>
          <p className="my-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
            Get started with your Notion x Discord companion.
            <br /> Check the{' '}
            <a
              target="_blank"
              href="https://github.com/neobrutalism-templates/saas"
              className="font-heading underline"
            >
              Documentation
            </a>{' '}
            for more info.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
            >
              Get started on Notion
            </Button>
            <Button
              size="lg"
              className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
            >
              Get started on Discord
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
