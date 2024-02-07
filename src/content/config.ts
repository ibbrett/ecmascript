import { defineCollection, z } from "astro:content";

const features = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
  }),
});

const about = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const code = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const arraySnippet = defineCollection({
  schema: z.object({
    title: z.string(),
    header_long_title: z.string(),
    pubDate: z.coerce.date(),
    header_title: z.string(),
    syntax: z.string(),
    parent: z.string(),
    what: z.string(),
  }),
});

export const collections = { features, about, code, Array: arraySnippet };
