import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const components = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/components/" }),
});

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages/" }),
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
export const collections = { components, pages, blog, projects, talks };
