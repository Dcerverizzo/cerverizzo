
export default function Nav() {
  return (
    <div>
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
            <div className="flex flex-row space-x-0 pr-10">
              <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle" href="/">
                <span className="relative py-1 px-2">
                  home
                  <div className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900" ></div>
                </span>
              </a>
              <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500" href="/blog">
                <span className="relative py-1 px-2">blog</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  )
}
