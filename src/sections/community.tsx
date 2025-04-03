'use client'

import { useEffect, useRef, useState } from 'react'
import { spriteImages } from '@/lib/utils'


export default function Community() {
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

  // const review = () => ({
  //   pfp: faker.image.avatar(),
  //   fullName: faker.person.fullName(),
  //   jobTitle: faker.person.jobTitle(),
  //   review: faker.lorem.sentences({ min: 1, max: 3 }),
  // })
  // 
  
  const reviews = [
    {
    pfp: "/otter-sprite/tile014.png",
    fullName: "Elena Giovanni",
    jobTitle: "Community Associate",
    review:   "I’ve seen a lot of platforms come and go, but Notiord has something special. It blends simplicity with power, and our community loves how approachable it is."
   },
  {
    pfp: "/otter-sprite/tile013.png",
    fullName: "Isabel Burlamacchi",
    jobTitle: "Communication Officer - Motion Picture Association",
    review:   "Notiord makes collaboration feel effortless. As someone who works with creative teams daily, this kind of intuitive integration is a game-changer."   },
   {
     pfp: "/otter-sprite/tile012.png",
     fullName: "Michaela Musso",
     jobTitle: "CEO - LK",
     review:   "Running a company demands clarity and speed. Notiord helps our leadership team stay aligned without wasting a single click. Honestly, I wish we had it earlier."    },
    {
      pfp: "/otter-sprite/tile011.png",
      fullName: "Aakash Sahu",
      jobTitle: "Senior Researcher - Chemnitz University of Technology",
      review:   "Research workflows can get messy—Notiord helped bring structure to our data and team discussions. It’s become an essential tool in our lab."     },
     {
       pfp: "/otter-sprite/tile007.png",
       fullName: "Wesley Obi ",
       jobTitle: "Software Engineer - Communardo",
       review:    "I’m picky about tools. Notiord hits the sweet spot between flexibility and focus. The Discord and Notion synergy is just... chef’s kiss."     },
      {
        pfp: "/otter-sprite/tile004.png",
        fullName: "Elena Giovanni",
        jobTitle: "Community Associate",
        review:    "I’ve seen a lot of platforms come and go, but Notiord has something special. It blends simplicity with power, and our community loves how approachable it is."
       },
       {
         pfp: "/otter-sprite/tile009.png",
         fullName: "Elena Giovanni",
         jobTitle: "Community Associate",
         review:    "I’ve seen a lot of platforms come and go, but Notiord has something special. It blends simplicity with power, and our community loves how approachable it is."
        },
        
  ]

  return (
    <section
      ref={gridRef}
      className="relative border-b-border dark:border-b-darkBorder dark:bg-secondaryBlack inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base overflow-hidden"
    >
      {/* Sprite Grid Background */}
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
              className="w-10 h-10 opacity-40"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Loved by the community
        </h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 w900:grid-cols-1 w900:gap-0">
          {[
            [reviews[0], reviews[1]],
            [reviews[2], reviews[3], reviews[4]],
            [reviews[5], reviews[6]],
          ].map((card, index) => (
            <div className="group flex flex-col justify-center" key={index}>
              {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                <div
                  className="border-border dark:border-darkBorder shadow-light dark:shadow-dark dark:bg-darkBg mb-4 min-h-48 w-full rounded-base border-2 bg-bg p-5 lg:mb-8 w900:mx-auto w900:min-h-20 w900:w-2/3 w500:w-full"
                  key={index}
                >
                  <div className="flex items-center gap-5">
                    <img
                      className="border-border dark:border-darkBorder h-12 w-12 rounded-base border-2"
                      src={pfp}
                      alt="pfp"
                    />
                    <div>
                      <h4 className="text-lg font-heading">{fullName}</h4>
                      <p className="text-sm font-base">{jobTitle}</p>
                    </div>
                  </div>
                  <div className="mt-5">{review}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
