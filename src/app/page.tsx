/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Nav from './components/Nav'
import About from './components/About'
import RecentPosts from './components/RecentPosts'
import Follow from './components/Follow'
import React from 'react'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'Daniel Cerverizzo | Software Engineer',
    default: 'Daniel Cerverizzo | Software Engineer'
  },
  description: 'Software Engineer Full Stack',
  metadataBase: new URL('https://cerverizzo.dev/')
}

export default function Home () {
  return (
    <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 dark:bg-black'>
      <Nav />
      <section>
        <About />
        <RecentPosts limit={3} />
        <figure><embed src="https://wakatime.com/share/@dancerverizzo/a380e2ba-c745-4643-9327-b037e162853b.svg"
        className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'></embed></figure>
        <Follow />
      </section>
    </div>
  )
}
