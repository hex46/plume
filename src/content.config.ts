import { defineCollection, getCollection, z } from "astro:content";

import { glob } from "astro/loaders";
import type { CollectionName } from "@/types/Collection";

const components = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/components/" }),
});

const pages = defineCollection({
  loader: glob({
    pattern: ["*.md", "!index.md"],
    base: "./src/content/pages/",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    type: z.enum(["website", "article"]).optional(),
  }),
});

const index = defineCollection({
  loader: glob({ pattern: ["index.md"], base: "./src/content/pages/" }),
  schema: z.object({
    title: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    created: z.date(),
    lastUpdate: z.optional(z.date()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(Number.MAX_SAFE_INTEGER),
    archived: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().default(Number.MAX_SAFE_INTEGER),
  }),
});

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    created: z.date(),
  }),
});

export const collections = {
  index,
  components,
  pages,
  blog,
  projects,
  talks,
  thoughts,
};

export const isCollectionEmpty = async (
  name: CollectionName,
): Promise<boolean> => (await getCollection(name)).length === 0;
