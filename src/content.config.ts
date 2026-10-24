import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const fields = {
  title: z.string(),
  description: z.string(),
  category: z.string().default("NOTES"),
  date: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object(fields),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object(fields),
});

export const collections = { blog, projects };
