// import { getPosts } from '../_services/notion'
// import Nav from '../components/Nav'
// import React from 'react'
// import RecentPosts from '../components/RecentPosts'

import Nav from "../components/Nav";
import RecentPosts from "../components/RecentPosts";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function BlogHome() {

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-2xl p-6 min-h-screen">
        <Nav />
        <RecentPosts />
      </div>
    </div>
  )
}