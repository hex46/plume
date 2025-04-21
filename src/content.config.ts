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
    status: z.boolean().optional(),
  }),
});
export const collections = { components, pages, blog };
