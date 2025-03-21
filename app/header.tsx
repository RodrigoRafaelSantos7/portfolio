'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-32 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="font-medium text-[#21201c] dark:text-[#eeeeec]"
        >
          Rodrigo Santos
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="leading-none font-medium text-[#63635e] dark:text-[#b5b3ad]"
          delay={0.5}
        >
          {'Software Engineer'}
        </TextEffect>
      </div>
    </header>
  )
}
