import { fetchRepos } from "@/lib/github/fetch";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Software Enginner',
    default: 'Portfolio | Daniel Cerverizzo',
  },
  description: 'List projects written by Daniel Cerverizzo',
  metadataBase: new URL('https://cerverizzo.dev/'),
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function PortfolioHome() {
  const repos = await fetchRepos();

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-2xl p-6 min-h-screen">
        <Nav />
        <Portfolio repos={repos} />
      </div>
    </div>
  )
}