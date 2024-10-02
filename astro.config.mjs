// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://dokicoder.github.io',
	base: 'nutshell-test',
	integrations: [mdx(), sitemap()],
});
