'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { spriteImages } from '@/lib/utils'

export default function Contact() {
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
    <section
      ref={gridRef}
      className="relative border-b-border dark:border-b-darkBorder dark:bg-secondaryBlack inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base overflow-hidden"
    >
      {/* Sprite Grid */}
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

      {/* Contact Content */}
      <div className="relative z-10 mx-auto w-container max-w-full px-5 py-20 lg:py-[100px] text-center">
        <form className="mx-auto max-w-xl space-y-6 bg-white/90 dark:bg-secondaryBlack/90 backdrop-blur-sm p-8 rounded-xl border-2 border-border dark:border-darkBorder shadow-md">
          <h2 className="mb-10 text-2xl font-heading md:text-3xl lg:text-4xl">
            Get in Touch
          </h2>
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 font-heading">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="rounded-base border-2 border-border dark:border-darkBorder bg-transparent p-2"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-heading">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-base border-2 border-border dark:border-darkBorder bg-transparent p-2"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1 font-heading">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded-base border-2 border-border dark:border-darkBorder bg-transparent p-2"
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
