import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-start gap-4">
    <Image src="/profile.jpeg" alt="Rodrigo Santos" width={400} height={400} className="h-16 w-16 rounded-full hover:scale-105 transition-all duration-300" />
    <div>
      <Link href="/" className="font-medium text-black dark:text-white">
        Rodrigo Santos
      </Link>
      <TextEffect
        as="p"
        preset="fade"
        per="char"
        className="text-zinc-600 dark:text-zinc-500 font-[family-name:var(--font-geist-mono)]"
        delay={0.5}
      >
        Software Engineer
      </TextEffect>
    </div>
  </header>
  )
}
