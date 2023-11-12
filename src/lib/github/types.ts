export type Repo = {
  name: string;
  html_url: string;
  url: string;
};

export type RepoDetails = Repo & {
  body_html: string;
  body_markdown: string;
  tags: string[];
};