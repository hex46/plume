import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    created: z.date(),
    lastUpdate: z.optional(z.date()),
    status: z.boolean().optional(),
  }),
});

export const collections = { blog };
