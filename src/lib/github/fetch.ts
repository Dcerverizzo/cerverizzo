
import { notFound } from "next/navigation";
import { Repo, RepoDetails } from "./types";

export async function fetchRepos(): Promise<Repo[]> {
  // const res = await fetch(
  //   `https://api.github.com/users/${process.env.GH_USERNAME}/repos?per_page=110`,
  //   {
  //     next: { revalidate: 3 * 60 * 60 },
  //   }
  // );
  // const repositoriesFiltered = await res.json();

  // if (!res.ok) notFound();
  // return repositoriesFiltered.filter((repositoriesFiltered: { topics: string | string[]; }) => repositoriesFiltered.topics.includes('portfolio')).map((repo: any) => ({
  //   name: repo.name,
  //   html_url: repo.html_url,
  //   url: repo.url,
  // }));

  return [
    {
      name: 'cerverizzo',
      html_url: 'https://github.com/Dcerverizzo/cerverizzo',
      url: 'https://api.github.com/repos/Dcerverizzo/cerverizzo'
    },
    {
      name: 'financialTools',
      html_url: 'https://github.com/Dcerverizzo/financialTools',
      url: 'https://api.github.com/repos/Dcerverizzo/financialTools'
    },
    {
      name: 'heartFoundation',
      html_url: 'https://github.com/Dcerverizzo/heartFoundation',
      url: 'https://api.github.com/repos/Dcerverizzo/heartFoundation'
    },
    {
      name: 'jobs',
      html_url: 'https://github.com/Dcerverizzo/jobs',
      url: 'https://api.github.com/repos/Dcerverizzo/jobs'
    },
    {
      name: 'Porterminal',
      html_url: 'https://github.com/Dcerverizzo/Porterminal',
      url: 'https://api.github.com/repos/Dcerverizzo/Porterminal'
    },
    {
      name: 'SolucionaGeral',
      html_url: 'https://github.com/Dcerverizzo/SolucionaGeral',
      url: 'https://api.github.com/repos/Dcerverizzo/SolucionaGeral'
    },
    {
      name: 'spotify',
      html_url: 'https://github.com/Dcerverizzo/spotify',
      url: 'https://api.github.com/repos/Dcerverizzo/spotify'
    },
    {
      name: 'web-scraping-jobs',
      html_url: 'https://github.com/Dcerverizzo/web-scraping-jobs',
      url: 'https://api.github.com/repos/Dcerverizzo/web-scraping-jobs'
    }
  ]

}
