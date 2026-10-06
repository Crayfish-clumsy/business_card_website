import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    result: z.string(),
    client: z.string(),
    summary: z.string(),
    year: z.number(),
    duration: z.string(),
    order: z.number(),
    visual: z.enum(['web', 'kiosk', 'vpn', 'scheduler']),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    challenges: z.array(
      z.object({ title: z.string(), problem: z.string(), solution: z.string() }),
    ),
  }),
});

export const collections = { cases };
