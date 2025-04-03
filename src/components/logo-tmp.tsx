'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function LogoAlgotter() {

  return (
    <>
      
      <div className="fixed left-10 top-10 z-50 
                      backdrop-blur-sm 
                      bg-white/70 dark:bg-black/70 
                      border-2 border-black dark:border-white 
                      rounded-md p-1 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={55}
          height={55}
          className="transition-all duration-300 dark:invert"
        />
      </div>




      {/* <Button
        size="icon"
        className="fixed left-10 top-10 z-50"
      >
        <span className="sr-only">Logo Algotter</span>
      </Button> */}
    </>
  )
}
