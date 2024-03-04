import { Metadata } from "next";
import Nav from "../components/Nav";
import RecentPosts from "../components/RecentPosts";

export const metadata: Metadata = {
  title: {
    template: '%s | Software Enginner',
    default: 'Insightful Posts | Daniel Cerverizzo',
  },
  description: 'List posts written by Daniel Cerverizzo',
  metadataBase: new URL('https://cerverizzo.dev/'),
};

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