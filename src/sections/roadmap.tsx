'use client';

import React, { useEffect, useRef, useState } from 'react';
import { spriteImages } from '@/lib/utils';

const roadmapData = [
  { date: 'Jan 2024', title: 'Project Kickoff', description: 'Initial planning and brainstorming phase.' },
  { date: 'Feb 2024', title: 'First Prototype', description: 'Created and reviewed initial prototypes.' },
  { date: 'Mar 2024', title: 'MVP Launch', description: 'Released first working version of AlgOtter.' },
  { date: 'Apr 2024', title: 'User Feedback Round', description: 'Conducted surveys and user interviews.' },
  { date: 'May 2024', title: 'Bug Fix Sprint', description: 'Squashed key bugs based on user feedback.' },
  { date: 'Jun 2024', title: 'v1.0 Release', description: 'Final release with full feature set.' },
];

const currentIndex = 3;
const ITEM_HEIGHT = 160;
const greenLineHeight = currentIndex * ITEM_HEIGHT + ITEM_HEIGHT / 2;

const Roadmap = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [numSprites, setNumSprites] = useState(0);
  const [spriteIndexes, setSpriteIndexes] = useState<number[]>([]);

  useEffect(() => {
    const updateGridSize = () => {
      if (gridRef.current) {
        const width = gridRef.current.offsetWidth;
        const height = gridRef.current.offsetHeight;
        const cols = Math.ceil(width / 70);
        const rows = Math.ceil(height / 70);
        const count = cols * rows;
        setNumSprites(count);
        setSpriteIndexes(
          Array.from({ length: count }, () =>
            Math.floor(Math.random() * spriteImages.length)
          )
        );
      }
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  return (
    <section
      ref={gridRef}
      className="relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden border-b-2 border-b-border dark:border-b-darkBorder bg-white dark:bg-secondaryBlack bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:70px_70px] font-base pt-32 pb-20"
    >

      {/* Background sprite grid */}
      <div
        className="absolute inset-0 z-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(auto-fill, 70px)`,
          gridAutoRows: `70px`,
        }}
      >
        {Array.from({ length: numSprites }).map((_, i) => (
          <div
            key={i}
            className="w-[70px] h-[70px] flex items-center justify-center"
          >
            <img
              src={spriteImages[spriteIndexes[i] % spriteImages.length]}
              alt=""
              className="w-10 h-10 opacity-40"
            />
          </div>
        ))}
      </div>

      {/* Timeline content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 w-full">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Roadmap
        </h2>

        {/* Scrollable container with scroll chaining */}
        <div
          className="relative h-[600px] overflow-y-auto pr-2"
          style={{ overscrollBehaviorY: 'auto' }} // <- enables page scroll continuation
        >
          {/* Green line to current dot */}
          <div
            className="absolute left-1/2 w-1 -translate-x-1/2 bg-green-500 dark:bg-green-400"
            style={{
              top: 0,
              height: `${greenLineHeight}px`,
            }}
          ></div>

          {/* Gray continuation line */}
          <div
            className="absolute left-1/2 w-1 -translate-x-1/2 bg-gray-400 dark:bg-gray-500"
            style={{
              top: `${greenLineHeight}px`,
              height: `${roadmapData.length * ITEM_HEIGHT - greenLineHeight}px`,
            }}
          ></div>

          <div className="flex flex-col pb-8 pt-1 w900:space-y-6">
            {roadmapData.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              const dotColor =
                idx < currentIndex
                  ? 'bg-green-500'
                  : idx === currentIndex
                  ? 'bg-yellow-400'
                  : 'bg-gray-400';

              const cardGlow =
                idx < currentIndex
                  ? 'shadow-[4px_4px_0px_rgba(34,197,94,1)] border-2 border-green-600'
                  : idx === currentIndex
                  ? 'shadow-[4px_4px_0px_rgba(250,204,21,1)] border-2 border-yellow-400'
                  : 'border-2 border-black dark:border-white';

              return (
                <div
                  key={idx}
                  className={`relative flex min-h-[${ITEM_HEIGHT}px] w-full flex-col items-center md:flex-row ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                  style={{ minHeight: ITEM_HEIGHT }}
                >
                  {/* Dot – hidden on mobile */}
                  <div
                    className={`absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white dark:border-darkBg ${dotColor} ml-1 hidden md:block`}
                  ></div>

                  {/* Content block */}
                  <div
                    className={`md:w-[45%] w-full px-4 md:px-0 ${
                      isLeft ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <div
                      className={`bg-white dark:bg-zinc-900 p-6 text-gray-900 dark:text-white rounded-none font-bold ${cardGlow}`}
                    >
                      <div className="mb-2 text-sm text-gray-500 dark:text-gray-300">
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
