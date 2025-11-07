'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

export default function Nav () {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <div>
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
            <div className="flex flex-row space-x-0 pr-10">
              <Link href="/">
                <div className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${isActive('/') ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500'}`}>
                  <span className="relative py-1 px-2">
                    home
                    {isActive('/') && (
                      <div className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"></div>
                    )}
                  </span>
                </div>
              </Link>
              <Link href="/portfolio">
                <div className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${isActive('/portfolio') ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500'}`}>
                  <span className="relative py-1 px-2">
                    portfolio
                    {isActive('/portfolio') && (
                      <div className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"></div>
                    )}
                  </span>
                </div>
              </Link>
              <Link href="/blog">
                <div className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${isActive('/blog') ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500'}`}>
                  <span className="relative py-1 px-2">
                    blog
                    {isActive('/blog') && (
                      <div className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"></div>
                    )}
                  </span>
                </div>
              </Link>
            </div>
            <div className="ml-auto">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </aside>
    </div>
  )
}
