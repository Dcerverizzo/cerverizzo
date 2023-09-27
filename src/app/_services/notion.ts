"user-server";

import { Client } from '@notionhq/client';
import { NotionDatabaseResponse } from "../_types/notion";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = "44d84694-90b6-452b-a0a8-ff08546dc434";

export interface PageOrDatabase { }

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const typedResponse = response as unknown as NotionDatabaseResponse;

  console.log(typedResponse);

    return typedResponse.results.map((post) => {
      return {
        id: post.id,
        title: post.properties.Page.title[0].plain_text,
        slug: post.properties.Slug.rich_text[0].plain_text,
        createdAt: post.created_time,
        published: post.properties.Published.checkbox,
        authors: post.properties.Authors.people.map((author) => author.id),
        url: post.url,
      };
    });
}

export async function getPost(slug: string) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      throw new Error("Post not found");
    }

    const pageId = response.results[0].id;

    const n2m = new NotionToMarkdown({ notionClient: notion });

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    const typedResponse = response as unknown as NotionDatabaseResponse;

    return {
      title: typedResponse.results[0].properties.Page.title[0].plain_text,
      content: mdString.parent,
    };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    throw error;
  }
}
