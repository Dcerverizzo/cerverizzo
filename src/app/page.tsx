/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Nav from './components/Nav'
import About from './components/About'
import RecentPosts from './components/RecentPosts'
import Follow from './components/Follow'
import React from 'react'
import Provider from './components/Provider'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: 'Daniel Cerverizzo | Software Enginner',
    default: 'Daniel Cerverizzo | Software Enginner',
  },
  description: 'Software Enginner Full Stack ',
  metadataBase: new URL('https://cerverizzo.dev/'),
};

export default function Home() {
  return (
    <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 dark:bg-black'>
      <Provider>
        <Nav />
        <section>
          <About />
          <RecentPosts limit={3} />
          <Follow />
        </section>
      </Provider>
    </div>
  )
}
